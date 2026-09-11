<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiTransitionInventoryTransferInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiTransitionInventoryTransferInput([
  'Idempotency-Key' => 'example',
  'inventory_transfer_id' => 'example',
  'body' => (object) [
    'action' => 'depart',
    'provenance' => (object) [],
    'lines' => [
      (object) [
        'inventory_transfer_line_id' => 'example',
        'target_departed_quantity' => '0',
      ],
    ],
  ],
]);
$result = $client->api->transitionInventoryTransfer($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_transfer->destination_location_id . PHP_EOL;
echo $result->data->data->inventory_transfer->inventory_transfer_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
