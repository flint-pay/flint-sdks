<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateMeReturnResolutionCheckoutSessionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiCreateMeReturnResolutionCheckoutSessionInput([
  'resolution_id' => 'example',
]);
$result = $client->api->createMeReturnResolutionCheckoutSession($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->checkout_session->checkout_session_id . PHP_EOL;
echo $result->data->data->checkout_session->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
