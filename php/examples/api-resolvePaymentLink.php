<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiResolvePaymentLinkInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiResolvePaymentLinkInput([
  'payment_link_id' => 'example',
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'resolution_context' => 'example',
  ],
]);
$result = $client->api->resolvePaymentLink($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->checkout_session->checkout_session_id . PHP_EOL;
echo $result->data->data->checkout_session->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
