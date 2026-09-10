<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiVerifyReturnReceiptLineItemInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiVerifyReturnReceiptLineItemInput((array) json_decode('{"return_receipt_id":"example","return_receipt_line_item_id":"example","body":{"return_line_item_id":"example","verification_reason":"order_match_confirmed"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->verifyReturnReceiptLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
