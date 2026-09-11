<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateInventoryLevelInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateInventoryLevelInput([
  'Idempotency-Key' => 'example',
  'inventory_level_id' => 'example',
  'body' => (object) [
    'safety_stock_quantity' => '0',
  ],
]);
$result = $client->api->updateInventoryLevel($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_level->inventory_item_id . PHP_EOL;
echo $result->data->data->inventory_level->inventory_level_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
