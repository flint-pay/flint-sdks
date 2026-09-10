<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateCustomerAddressInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateCustomerAddressInput((array) json_decode('{"customer_id":"example","body":{"address":{"city":"example","country":"US","line1":"example","postal_code":"example","state":"example"},"recipient_name":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createCustomerAddress($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
