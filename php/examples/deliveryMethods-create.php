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

$result = $client->deliveryMethods->create([
  'configuration' => (object) [
    'minimum_option_lifetime_seconds' => '120',
    'origin' => (object) [
      'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
      'type' => 'fixed_location',
    ],
    'pricing' => (object) [
      'calculated' => (object) [],
      'type' => 'calculated',
    ],
  ],
  'name' => 'Standard shipping',
  'type' => 'shipment',
  'Idempotency-Key' => $idempotencyKey,
]);
echo $result->current_delivery_method_revision_id . PHP_EOL;
echo $result->delivery_method_id . PHP_EOL;
$client->close();
