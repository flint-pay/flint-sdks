<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreatePaymentIntentInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreatePaymentIntentInput([
  'body' => (object) [
    'amount_money' => (object) [
      'amount' => '0',
      'currency' => 'USD',
    ],
    'payment_options' => [
      'card',
    ],
  ],
]);
$result = $client->api->createPaymentIntent($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->payment_intent->payment_intent_id . PHP_EOL;
echo $result->data->data->payment_intent->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
