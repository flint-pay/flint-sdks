<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateDeliveryProfileInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateDeliveryProfileInput([
  'delivery_profile_id' => 'example',
  'body' => (object) [
    'name' => 'example',
  ],
]);
$result = $client->api->updateDeliveryProfile($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->current_delivery_profile_revision_id . PHP_EOL;
echo $result->data->data->delivery_profile_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
