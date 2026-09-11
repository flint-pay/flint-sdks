<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateCustomerAddressInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateCustomerAddressInput([
  'customer_id' => 'example',
  'body' => (object) [
    'address' => (object) [
      'city' => 'example',
      'country' => 'US',
      'line1' => 'example',
      'postal_code' => 'example',
      'state' => 'example',
    ],
    'recipient_name' => 'example',
  ],
]);
$result = $client->api->createCustomerAddress($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_address_id . PHP_EOL;
echo $result->data->data->customer_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
