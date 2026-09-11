<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRecordManualInvoicePaymentInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiRecordManualInvoicePaymentInput([
  'invoice_id' => 'example',
  'body' => (object) [
    'amount_money' => (object) [
      'amount' => '0',
      'currency' => 'USD',
    ],
  ],
]);
$result = $client->api->recordManualInvoicePayment($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->invoice_id . PHP_EOL;
echo $result->data->data->merchant_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
