<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateMeDeletionRequestInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiCreateMeDeletionRequestInput([]);
$result = $client->api->createMeDeletionRequest($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_deletion_request_id . PHP_EOL;
echo $result->data->data->customer_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
