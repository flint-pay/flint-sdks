<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateCheckoutSessionDeliveryQuoteInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateCheckoutSessionDeliveryQuoteInput((array) json_decode('{"checkout_session_id":"example","body":{"expected_delivery_selection_id":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createCheckoutSessionDeliveryQuote($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
