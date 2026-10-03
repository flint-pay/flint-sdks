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

$result = $client->reports->create([
  'currency' => 'USD',
  'interval_end_at' => '2026-01-02T00:00:00Z',
  'interval_start_at' => '2026-01-01T00:00:00Z',
  'report_type' => 'orders_itemized_v1',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->report_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
