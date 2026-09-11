<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateSubscriptionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateSubscriptionInput([
  'body' => (object) [
    'billing_start' => (object) [
      'type' => 'immediate',
    ],
    'customer_id' => 'example',
    'plan_id' => 'example',
    'billing_schedule' => (object) [
      'owner' => 'flint',
    ],
  ],
]);
$result = $client->api->createSubscription($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_id . PHP_EOL;
echo $result->data->data->payment_method_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
