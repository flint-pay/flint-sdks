<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetDeliveryMethodInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetDeliveryMethodInput([
  'delivery_method_id' => 'example',
]);
$result = $client->api->getDeliveryMethod($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->current_delivery_method_revision_id . PHP_EOL;
echo $result->data->data->delivery_method_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
