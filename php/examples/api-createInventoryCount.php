<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryCountInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateInventoryCountInput([
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'inventory_item_ids' => [
      'example',
    ],
    'location_id' => 'example',
  ],
]);
$result = $client->api->createInventoryCount($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_count_id . PHP_EOL;
echo $result->data->data->location_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
