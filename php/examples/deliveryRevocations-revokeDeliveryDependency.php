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

$result = $client->deliveryRevocations->revokeDeliveryDependency([
  'reason' => 'unsafe_configuration',
  'target' => (object) [
    'target_type' => 'location_geography',
    'location_id' => 'example',
    'location_geography_revision' => '100',
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->delivery_revocation_id . PHP_EOL;
$client->close();
