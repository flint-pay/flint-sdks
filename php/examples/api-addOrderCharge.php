<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiAddOrderChargeInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiAddOrderChargeInput((array) json_decode('{"order_id":"example","body":{"charge":{"name":"example","type":"service_fee","amount_money":{"amount":"0","currency":"USD"}}}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->addOrderCharge($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
