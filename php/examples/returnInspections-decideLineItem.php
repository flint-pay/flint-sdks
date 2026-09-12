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

$result = $client->returnInspections->decideLineItem('example', 'example', [
  'acceptance_decision_reason' => 'inspection_result',
  'acceptance_status' => 'accepted',
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
