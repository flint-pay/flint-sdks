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

$result = $client->reports->create([
  'currency' => 'USD',
  'interval_end_at' => '2026-01-01T00:00:00Z',
  'interval_start_at' => '2026-01-01T00:00:00Z',
  'report_type' => 'orders_itemized_v1',
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->report_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
