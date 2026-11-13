<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->merchantSignups->verify('msu_01KEZF7C00SRGYRMBPKRKW8V9J', [
  'expected_version' => 1,
  'terms_acceptance' => (object) [
    'ip_address' => '203.0.113.7',
    'merchant_terms_version' => '2026-10-01',
    'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/605.1.15',
  ],
  'verification_code' => 'K7QM-4TXD',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
