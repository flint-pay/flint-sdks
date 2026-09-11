<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiAddReturnLineItemInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiAddReturnLineItemInput([
  'return_id' => 'example',
  'body' => (object) [
    'line_item' => (object) [
      'order_line_item_id' => 'example',
      'requested_quantity' => '100',
      'return_reason_id' => 'example',
    ],
  ],
]);
$result = $client->api->addReturnLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->order_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
