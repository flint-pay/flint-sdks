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

$result = $client->orders->createFulfillment('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'line_items' => [
    (object) [
      'order_line_item_id' => 'li_01KEZF7C004XP0V220YVMGQ354',
      'quantity' => 1,
    ],
  ],
  'metadata' => (object) [
    'source' => 'dispatch',
  ],
  'shipment' => (object) [
    'package' => (object) [
      'carrier' => 'ups',
      'status' => 'created',
      'tracking_number' => '1Z999AA10123456784',
    ],
    'packaging' => 'single_package',
  ],
  'type' => 'shipment',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->fulfillment_id . PHP_EOL;
echo $result->order_id . PHP_EOL;
$client->close();
