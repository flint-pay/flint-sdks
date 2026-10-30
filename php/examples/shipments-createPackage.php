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

$result = $client->shipments->createPackage('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'carrier' => 'ups',
  'dimensions' => (object) [
    'height' => 4,
    'length' => 8,
    'unit' => 'inch',
    'width' => 6,
  ],
  'expected_delivery_at' => '2026-05-15T18:00:00Z',
  'external_reference_id' => 'pkg_789',
  'external_system' => 'merchant_wms',
  'metadata' => (object) [
    'box' => 'small',
  ],
  'service_code' => 'ground',
  'status' => 'shipped',
  'tracking_number' => '1Z999AA10123456784',
  'tracking_url' => 'https://track.example.com/1Z999AA10123456784',
  'weight' => (object) [
    'unit' => 'pound',
    'value' => 1.2,
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->fulfillment_id . PHP_EOL;
echo $result->order_id . PHP_EOL;
$client->close();
