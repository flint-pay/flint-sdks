<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
// Reuse this key when retrying the same action.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returns->createInspection('example', [
  'inspected_at' => '2026-01-01T00:00:00Z',
  'line_items' => [
    (object) [
      'acceptance_status' => 'accepted',
      'condition' => 'new',
      'quantity' => '100',
      'return_receipt_line_item_id' => 'example',
    ],
  ],
  'location_id' => 'example',
  'return_receipt_id' => 'example',
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
