<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetMeInvoiceInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiGetMeInvoiceInput([
  'invoice_id' => 'example',
]);
$result = $client->api->getMeInvoice($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->invoice_id . PHP_EOL;
echo $result->data->data->merchant_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
