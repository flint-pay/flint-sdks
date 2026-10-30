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

$result = $client->inventoryReceipts->create([
  'external_actor_id' => 'receiver_204',
  'lines' => [
    (object) [
      'disposition' => 'sellable',
      'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'inventory_reservation_id' => 'invr_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'inventory_reservation_line_id' => 'invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      'quantity' => 1,
      'receiving_location_id' => 'loc_01K0P7W6A4N9F3J2T8Q5R1C6XM',
    ],
  ],
  'occurred_at' => '2026-07-21T14:18:00Z',
  'source_system' => (object) [
    'external_source_id' => 'east-coast-wms',
    'type' => 'wms',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->inventory_receipt->inventory_receipt_id . PHP_EOL;
$client->close();
