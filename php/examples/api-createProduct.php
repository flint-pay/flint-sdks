<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateProductInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateProductInput([
  'body' => (object) [
    'name' => 'example',
    'product_type' => 'physical',
    'default_variant' => (object) [
      'unit_price_money' => (object) [
        'amount' => '0',
        'currency' => 'USD',
      ],
    ],
  ],
]);
$result = $client->api->createProduct($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->product_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
