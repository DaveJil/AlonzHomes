type ContentKind = 'images' | 'texts';

interface ServerContent {
  images: Record<string, string>;
  texts: Record<string, string>;
}

const API_PATH = '/admin-content.php';
const JSON_FALLBACK_PATH = '/admin-content.json';

let serverContent: ServerContent = { images: {}, texts: {} };
let hasLoaded = false;
let loadPromise: Promise<void> | null = null;
const LISTENERS = new Set<() => void>();

function normalizeContent(data: unknown): ServerContent {
  const source = data && typeof data === 'object' ? data as Partial<ServerContent> : {};
  return {
    images: source.images && typeof source.images === 'object' ? source.images : {},
    texts: source.texts && typeof source.texts === 'object' ? source.texts : {},
  };
}

function notifyListeners() {
  LISTENERS.forEach(listener => listener());
}

export function subscribeServerContent(listener: () => void): () => void {
  LISTENERS.add(listener);
  return () => {
    LISTENERS.delete(listener);
  };
}

export function getServerContentValue(kind: ContentKind, key: string): string | undefined {
  const value = serverContent[kind][key];
  return value && value.trim() !== '' ? value.trim() : undefined;
}

export function loadServerContent(): Promise<void> {
  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = (async () => {
    try {
      let response = await fetch(`${API_PATH}?t=${Date.now()}`, { cache: 'no-store' });

      if (!response.ok) {
        response = await fetch(`${JSON_FALLBACK_PATH}?t=${Date.now()}`, { cache: 'no-store' });
      }

      if (!response.ok) {
        throw new Error(`Content request failed with ${response.status}`);
      }

      serverContent = normalizeContent(await response.json());
      hasLoaded = true;
      notifyListeners();
    } catch (error) {
      hasLoaded = true;
      console.warn('Global admin content could not be loaded', error);
    } finally {
      loadPromise = null;
    }
  })();

  return loadPromise;
}

export async function saveServerContent(
  kind: ContentKind,
  key: string,
  value: string,
  passcode: string
): Promise<boolean> {
  if (!hasLoaded) {
    await loadServerContent();
  }

  serverContent = {
    ...serverContent,
    [kind]: {
      ...serverContent[kind],
      [key]: value.trim(),
    },
  };
  notifyListeners();

  try {
    const response = await fetch(API_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ kind, key, value, passcode }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to publish global admin content', error);
    return false;
  }
}
