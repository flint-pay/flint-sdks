<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiPayOrderInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiPayOrderInput([
  'order_id' => 'example',
  'body' => (object) [
    'action' => 'pay',
  ],
]);
$result = $client->api->payOrder($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->order->order_id . PHP_EOL;
echo $result->data->data->order->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
