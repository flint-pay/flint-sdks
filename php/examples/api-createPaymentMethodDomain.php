<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreatePaymentMethodDomainInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreatePaymentMethodDomainInput([
  'body' => (object) [
    'domain_name' => 'payments.example.invalid',
  ],
]);
$result = $client->api->createPaymentMethodDomain($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->payment_method_domain_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
