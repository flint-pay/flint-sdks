<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateSubscriptionPlanInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateSubscriptionPlanInput([
  'plan_id' => 'example',
  'body' => (object) [],
]);
$result = $client->api->updateSubscriptionPlan($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->plan_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
