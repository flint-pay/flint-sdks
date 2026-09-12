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

$result = $client->riskRules->create([
  'action' => 'review',
  'description' => 'Synthetic SDK example',
  'predicate' => (object) [
    'attribute' => 'payment_method_type',
    'operator' => 'eq',
    'value' => 'card',
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->risk_rule_id . PHP_EOL;
$client->close();
