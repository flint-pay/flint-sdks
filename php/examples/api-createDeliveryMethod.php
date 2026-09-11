<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateDeliveryMethodInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateDeliveryMethodInput([
  'body' => (object) [
    'configuration' => (object) [
      'minimum_option_lifetime_seconds' => '120',
      'origin' => (object) [
        'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
        'type' => 'fixed_location',
      ],
      'pricing' => (object) [
        'calculated' => (object) [],
        'type' => 'calculated',
      ],
    ],
    'name' => 'Standard shipping',
    'type' => 'shipment',
  ],
]);
$result = $client->api->createDeliveryMethod($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->current_delivery_method_revision_id . PHP_EOL;
echo $result->data->data->delivery_method_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
