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

$result = $client->refunds->create([
  'amount_money' => (object) [
    'amount' => '500',
    'currency' => 'USD',
  ],
  'external_reference_id' => 'refund-1001',
  'payment_intent_id' => 'pi_replace_with_your_payment_intent_id',
  'reason' => 'requested_by_customer',
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->refund_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
