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

$result = $client->orders->createPaymentIntent('ord_replace_with_your_order_id', [
  'amount_money' => (object) [
    'amount' => '2500',
    'currency' => 'USD',
  ],
  'payment_options' => [
    'card',
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->payment_intent->payment_intent_id . PHP_EOL;
echo $result->payment_intent->status . PHP_EOL;
$client->close();
