<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCancelReturnLineItemInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCancelReturnLineItemInput((array) json_decode('{"return_id":"example","return_line_item_id":"example","body":{"handback_quantity":"100","quantity":"100","reason":"buyer_request"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->cancelReturnLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
