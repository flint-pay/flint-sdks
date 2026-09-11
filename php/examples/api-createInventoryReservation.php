<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryReservationInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateInventoryReservationInput([
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'demands' => [],
    'inventory_routing_source' => (object) [
      'type' => 'fixed_location',
      'location_id' => 'example',
    ],
    'owner' => (object) [
      'expires_at' => '2026-01-01T00:00:00Z',
      'key' => 'example',
    ],
  ],
]);
$result = $client->api->createInventoryReservation($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_reservation->inventory_reservation_id . PHP_EOL;
echo $result->data->data->inventory_reservation->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
