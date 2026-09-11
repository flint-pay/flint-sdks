<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReturnReceiptInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateReturnReceiptInput([
  'return_id' => 'example',
  'body' => (object) [
    'line_items' => [
      (object) [
        'quantity' => '100',
        'return_line_item_id' => 'example',
      ],
    ],
    'received_at' => '2026-01-01T00:00:00Z',
    'receiving_location_id' => 'example',
  ],
]);
$result = $client->api->createReturnReceipt($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->receiving_location_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
