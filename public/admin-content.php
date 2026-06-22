<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$contentFile = __DIR__ . '/admin-content.json';
$allowedPasscodes = ['alonzhomes', 'admin', 'alonzhomes2026'];

function read_content(string $contentFile): array
{
    if (!file_exists($contentFile)) {
        return ['images' => new stdClass(), 'texts' => new stdClass()];
    }

    $raw = file_get_contents($contentFile);
    $data = json_decode($raw ?: '', true);

    if (!is_array($data)) {
        return ['images' => new stdClass(), 'texts' => new stdClass()];
    }

    return [
        'images' => isset($data['images']) && is_array($data['images']) ? $data['images'] : new stdClass(),
        'texts' => isset($data['texts']) && is_array($data['texts']) ? $data['texts'] : new stdClass(),
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(read_content($contentFile), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input') ?: '', true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$passcode = strtolower(trim((string)($input['passcode'] ?? '')));

if (!in_array($passcode, $allowedPasscodes, true)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Invalid passcode']);
    exit;
}

$kind = (string)($input['kind'] ?? '');
$key = preg_replace('/[^a-zA-Z0-9_\-]/', '', (string)($input['key'] ?? ''));
$value = trim((string)($input['value'] ?? ''));

if (($kind !== 'images' && $kind !== 'texts') || $key === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid content key']);
    exit;
}

$content = read_content($contentFile);

if (is_object($content[$kind])) {
    $content[$kind] = [];
}

if ($value === '') {
    unset($content[$kind][$key]);
} else {
    $content[$kind][$key] = $value;
}

$encoded = json_encode($content, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

if ($encoded === false || file_put_contents($contentFile, $encoded . PHP_EOL, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not write admin-content.json']);
    exit;
}

echo json_encode(['ok' => true, 'content' => $content], JSON_UNESCAPED_SLASHES);
