<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetCheckoutSessionDeliverySelectionHistoryInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetCheckoutSessionDeliverySelectionHistoryInput([
  'checkout_session_id' => 'example',
  'delivery_selection_id' => 'example',
]);
$result = $client->api->getCheckoutSessionDeliverySelectionHistory($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->checkout_session_id . PHP_EOL;
echo $result->data->data->delivery_quote_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
