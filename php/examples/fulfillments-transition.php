<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$apiKey = getenv('API_KEY');
if ($apiKey === false || $apiKey === '') throw new \RuntimeException('Set API_KEY: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  apiKey: $apiKey,
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$input = [
  'fulfillment_id' => 'example',
  'body' => (object) [
    'action' => 'complete',
  ],
];
$result = $client->fulfillments->transition($input, new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->fulfillment->fulfillment_id . PHP_EOL;
echo $result->fulfillment->order_id . PHP_EOL;
$client->close();
