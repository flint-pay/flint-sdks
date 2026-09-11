<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiVerifyReturnReceiptLineItemInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiVerifyReturnReceiptLineItemInput([
  'return_receipt_id' => 'example',
  'return_receipt_line_item_id' => 'example',
  'body' => (object) [
    'return_line_item_id' => 'example',
    'verification_reason' => 'order_match_confirmed',
  ],
]);
$result = $client->api->verifyReturnReceiptLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->receiving_location_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
