<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiApplyInventoryCountInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiApplyInventoryCountInput([
  'Idempotency-Key' => 'example',
  'inventory_count_id' => 'example',
  'body' => (object) [],
]);
$result = $client->api->applyInventoryCount($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_count->inventory_count_id . PHP_EOL;
echo $result->data->data->inventory_count->location_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
