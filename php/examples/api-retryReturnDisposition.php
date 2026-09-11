<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRetryReturnDispositionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiRetryReturnDispositionInput([
  'return_disposition_id' => 'example',
  'body' => (object) [
    'reason' => 'dependency_recovered',
  ],
]);
$result = $client->api->retryReturnDisposition($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->return_disposition_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
