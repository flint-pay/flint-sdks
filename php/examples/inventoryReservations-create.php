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
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->inventory_reservation->inventory_reservation_id . PHP_EOL;
echo $result->inventory_reservation->status . PHP_EOL;
$client->close();
