<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$input = [
  'inventory_transfer_id' => 'example',
  'body' => (object) [
    'action' => 'depart',
    'provenance' => (object) [],
    'lines' => [
      (object) [
        'inventory_transfer_line_id' => 'example',
        'target_departed_quantity' => '0',
      ],
    ],
  ],
  'Idempotency-Key' => $idempotencyKey,
];
$result = $client->inventoryTransfers->transition($input);
echo $result->inventory_transfer->destination_location_id . PHP_EOL;
echo $result->inventory_transfer->inventory_transfer_id . PHP_EOL;
$client->close();
