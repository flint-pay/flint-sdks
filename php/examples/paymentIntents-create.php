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

$result = $client->paymentIntents->create([
  'amount_money' => (object) [
    'amount' => '2500',
    'currency' => 'USD',
  ],
  'capture_method' => 'automatic',
  'external_reference_id' => 'purchase-1001',
  'payment_options' => [
    'card',
  ],
  'receipt_email' => 'buyer@example.com',
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->payment_intent->payment_intent_id . PHP_EOL;
echo $result->payment_intent->status . PHP_EOL;
$client->close();
