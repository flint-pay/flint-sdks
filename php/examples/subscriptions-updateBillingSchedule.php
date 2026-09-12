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

$input = [
  'subscription_id' => 'example',
  'body' => (object) [
    'owner' => 'flint',
    'initiated_by' => 'buyer',
    'next_billing_at' => '2026-01-01T00:00:00Z',
  ],
  'Idempotency-Key' => $idempotencyKey,
];
$result = $client->subscriptions->updateBillingSchedule($input, new RequestOptions(maxAttempts: 1));
echo $result->customer_id . PHP_EOL;
echo $result->payment_method_id . PHP_EOL;
$client->close();
