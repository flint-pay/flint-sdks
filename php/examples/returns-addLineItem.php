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

$result = $client->returns->addLineItem('example', [
  'line_item' => (object) [
    'order_line_item_id' => 'example',
    'requested_quantity' => '100',
    'return_reason_id' => 'example',
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->order_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
