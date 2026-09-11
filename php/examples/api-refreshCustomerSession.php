<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRefreshCustomerSessionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiRefreshCustomerSessionInput([
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'refresh_token' => 'example',
  ],
]);
$result = $client->api->refreshCustomerSession($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_id . PHP_EOL;
echo $result->data->data->customer_session_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
