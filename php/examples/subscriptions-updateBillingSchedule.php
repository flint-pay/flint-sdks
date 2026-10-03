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
  'subscription_id' => 'example',
  'body' => (object) [
    'owner' => 'flint',
    'initiated_by' => 'buyer',
    'next_billing_at' => '2026-01-01T00:00:00Z',
  ],
];
$result = $client->subscriptions->updateBillingSchedule($input, new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->customer_id . PHP_EOL;
echo $result->payment_method_id . PHP_EOL;
$client->close();
