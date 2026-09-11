<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetDeliveryLocationSetInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetDeliveryLocationSetInput([
  'delivery_location_set_id' => 'example',
]);
$result = $client->api->getDeliveryLocationSet($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->current_delivery_location_set_revision_id . PHP_EOL;
echo $result->data->data->delivery_location_set_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
