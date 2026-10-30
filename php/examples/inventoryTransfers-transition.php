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

$result = $client->inventoryTransfers->transition('invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'action' => 'depart',
  'expected_version' => 2,
  'lines' => [
    (object) [
      'inventory_transfer_line_id' => 'invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'target_departed_quantity' => 4,
    ],
  ],
  'provenance' => (object) [
    'source_system' => (object) [
      'type' => 'manual',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->inventory_transfer->destination_location_id . PHP_EOL;
echo $result->inventory_transfer->inventory_transfer_id . PHP_EOL;
$client->close();
