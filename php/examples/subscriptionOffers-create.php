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

$result = $client->subscriptionOffers->create([
  'billing_interval_options' => [
    (object) [
      'billing_interval' => 'monthly',
      'billing_interval_count' => 1,
    ],
  ],
  'name' => 'Monthly product subscription',
  'product_ids' => [
    'prod_01J00000000000000000000001',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->status . PHP_EOL;
echo $result->subscription_offer_id . PHP_EOL;
$client->close();
