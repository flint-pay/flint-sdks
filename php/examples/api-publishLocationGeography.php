<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiPublishLocationGeographyInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiPublishLocationGeographyInput([
  'location_id' => 'example',
  'body' => (object) [
    'address' => (object) [],
    'expected_geography_revision' => '0',
    'timezone' => 'example',
  ],
]);
$result = $client->api->publishLocationGeography($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->location_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
