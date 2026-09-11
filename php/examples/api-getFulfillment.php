<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetFulfillmentInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetFulfillmentInput([
  'fulfillment_id' => 'example',
]);
$result = $client->api->getFulfillment($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->fulfillment_id . PHP_EOL;
echo $result->data->data->order_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
