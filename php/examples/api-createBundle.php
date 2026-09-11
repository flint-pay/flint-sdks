<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateBundleInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateBundleInput([
  'body' => (object) [
    'name' => 'example',
    'unit_price_money' => (object) [
      'amount' => '0',
      'currency' => 'USD',
    ],
  ],
]);
$result = $client->api->createBundle($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->bundle_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
