<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRotateDeliveryRateCallbackSigningKeyInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiRotateDeliveryRateCallbackSigningKeyInput([
  'delivery_rate_callback_id' => 'example',
]);
$result = $client->api->rotateDeliveryRateCallbackSigningKey($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->delivery_rate_callback_id . PHP_EOL;
echo $result->data->data->key_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
