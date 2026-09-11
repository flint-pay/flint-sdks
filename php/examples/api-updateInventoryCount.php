<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateInventoryCountInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateInventoryCountInput([
  'body' => (object) [
    'expected_version' => '2',
    'observations' => [
      (object) [
        'counted_damaged_quantity' => '0',
        'counted_on_hand_quantity' => '12',
        'counted_quality_control_quantity' => '0',
        'counted_quarantined_quantity' => '0',
        'inventory_item_id' => 'invi_01K0P7W6A4N9F3J2T8Q5R1C6XM',
      ],
    ],
    'source_system' => (object) [
      'type' => 'manual',
    ],
  ],
  'Idempotency-Key' => 'example',
  'inventory_count_id' => 'example',
]);
$result = $client->api->updateInventoryCount($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_count_id . PHP_EOL;
echo $result->data->data->location_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
