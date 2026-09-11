<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiReleaseReturnResolutionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiReleaseReturnResolutionInput([
  'return_resolution_id' => 'example',
  'body' => (object) [
    'reason' => 'merchant_approved',
  ],
]);
$result = $client->api->releaseReturnResolution($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->return_id . PHP_EOL;
echo $result->data->data->return_resolution_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
