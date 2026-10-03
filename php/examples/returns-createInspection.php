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
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
