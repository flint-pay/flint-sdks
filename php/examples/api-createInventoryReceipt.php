<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryReceiptInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateInventoryReceiptInput([
  'Idempotency-Key' => 'example',
  'body' => (object) [
    'lines' => [],
  ],
]);
$result = $client->api->createInventoryReceipt($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_receipt->inventory_receipt_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
