<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryTransferInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateInventoryTransferInput([
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'destination_location_id' => 'example',
    'lines' => [
      (object) [
        'inventory_item_id' => 'example',
        'requested_quantity' => '1',
      ],
    ],
    'origin_location_id' => 'example',
  ],
]);
$result = $client->api->createInventoryTransfer($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->destination_location_id . PHP_EOL;
echo $result->data->data->inventory_transfer_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
