<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCancelOrderPaymentAttemptInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCancelOrderPaymentAttemptInput([
  'order_id' => 'example',
  'payment_attempt_id' => 'example',
]);
$result = $client->api->cancelOrderPaymentAttempt($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->order->order_id . PHP_EOL;
echo $result->data->data->order->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
