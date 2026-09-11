<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetProductOptionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetProductOptionInput([
  'product_id' => 'example',
  'option_id' => 'example',
]);
$result = $client->api->getProductOption($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->option_id . PHP_EOL;
echo $result->data->data->product_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
