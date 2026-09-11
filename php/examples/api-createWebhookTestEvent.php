<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateWebhookTestEventInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateWebhookTestEventInput([
  'webhook_endpoint_id' => 'example',
  'body' => (object) [
    'event_type' => 'balance.updated',
  ],
]);
$result = $client->api->createWebhookTestEvent($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->webhook_delivery_attempt_id . PHP_EOL;
echo $result->data->data->webhook_delivery_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
