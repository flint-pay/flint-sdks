<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCancelReturnDispositionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCancelReturnDispositionInput([
  'return_disposition_id' => 'example',
  'body' => (object) [
    'reason' => 'created_in_error',
  ],
]);
$result = $client->api->cancelReturnDisposition($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->return_disposition_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
