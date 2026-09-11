<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetCurrentAPIKeyRequestLogInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetCurrentAPIKeyRequestLogInput([
  'api_request_log_id' => 'example',
]);
$result = $client->api->getCurrentAPIKeyRequestLog($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->api_request_log_id . PHP_EOL;
echo $result->data->data->request_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
