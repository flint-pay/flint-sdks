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

$result = $client->shipments->create([
  'direction' => 'outbound',
  'external_reference_id' => 'ship_789',
  'external_system' => 'merchant_wms',
  'fulfillment_id' => 'ful_01KEZF7C009TD0XN8YPHHHXQFR',
  'metadata' => (object) [
    'warehouse' => 'east',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->fulfillment_id . PHP_EOL;
echo $result->order_id . PHP_EOL;
$client->close();
