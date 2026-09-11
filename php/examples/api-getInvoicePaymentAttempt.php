<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetInvoicePaymentAttemptInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiGetInvoicePaymentAttemptInput([
  'invoice_id' => 'example',
  'invoice_payment_attempt_id' => 'example',
]);
$result = $client->api->getInvoicePaymentAttempt($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->invoice_id . PHP_EOL;
echo $result->data->data->invoice_payment_attempt_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
