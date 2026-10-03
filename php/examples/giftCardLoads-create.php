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

$result = $client->giftCardLoads->create('gc_01J00000000000000000000001', [
  'consideration_money' => (object) [
    'amount' => '1000',
    'currency' => 'USD',
  ],
  'source' => (object) [
    'buyer_id' => 'synthetic-buyer',
    'funding_source_type' => 'external_payment',
    'reference_id' => 'synthetic-funding-reference',
  ],
  'value_money' => (object) [
    'amount' => '1000',
    'currency' => 'USD',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
$client->close();
