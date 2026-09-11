<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiTransitionFulfillmentInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiTransitionFulfillmentInput([
  'fulfillment_id' => 'example',
  'body' => (object) [
    'action' => 'complete',
  ],
]);
$result = $client->api->transitionFulfillment($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->fulfillment->fulfillment_id . PHP_EOL;
echo $result->data->data->fulfillment->order_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
