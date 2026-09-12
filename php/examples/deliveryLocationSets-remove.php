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

$result = $client->deliveryLocationSets->remove('example', [
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->current_delivery_location_set_revision_id . PHP_EOL;
echo $result->delivery_location_set_id . PHP_EOL;
$client->close();
