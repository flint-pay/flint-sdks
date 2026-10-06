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

$result = $client->giftCardRedemptions->create([
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
  'capture_mode' => 'automatic',
  'external_reference_id' => 'sdk-example',
  'gift_card_id' => 'gc_01J00000000000000000000001',
], new RequestOptions(idempotencyKey: $idempotencyKey));
$client->close();
