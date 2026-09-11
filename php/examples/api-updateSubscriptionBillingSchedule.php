<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateSubscriptionBillingScheduleInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateSubscriptionBillingScheduleInput([
  'subscription_id' => 'example',
  'body' => (object) [
    'owner' => 'flint',
    'initiated_by' => 'buyer',
    'next_billing_at' => '2026-01-01T00:00:00Z',
  ],
]);
$result = $client->api->updateSubscriptionBillingSchedule($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->customer_id . PHP_EOL;
echo $result->data->data->payment_method_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
