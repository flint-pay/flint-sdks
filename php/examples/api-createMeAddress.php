<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateMeAddressInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiCreateMeAddressInput([
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
$result = $client->api->createMeAddress($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_address_id . PHP_EOL;
echo $result->data->data->customer_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
