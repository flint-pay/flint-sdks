<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiAddReturnLineItemInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiAddReturnLineItemInput((array) json_decode('{"return_id":"example","body":{"line_item":{"order_line_item_id":"example","requested_quantity":"100","return_reason_id":"example"}}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->addReturnLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
