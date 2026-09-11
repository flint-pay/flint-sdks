<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateCheckoutSessionDeliverySelectionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateCheckoutSessionDeliverySelectionInput([
  'checkout_session_id' => 'example',
  'body' => (object) [
    'choices' => [],
    'delivery_quote_id' => 'example',
    'expected_delivery_selection_id' => 'example',
  ],
]);
$result = $client->api->createCheckoutSessionDeliverySelection($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
