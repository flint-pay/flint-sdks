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

$result = $client->inventoryReservations->create([
  'demands' => [],
  'inventory_routing_source' => (object) [
    'type' => 'fixed_location',
    'location_id' => 'example',
  ],
  'owner' => (object) [
    'expires_at' => '2026-01-01T00:00:00Z',
    'key' => 'example',
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->inventory_reservation->inventory_reservation_id . PHP_EOL;
echo $result->inventory_reservation->status . PHP_EOL;
$client->close();
