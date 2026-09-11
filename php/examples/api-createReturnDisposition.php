<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReturnDispositionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateReturnDispositionInput([
  'return_id' => 'example',
  'body' => (object) [
    'disposition_type' => 'sellable',
    'occurred_at' => '2026-01-01T00:00:00Z',
    'quantity' => '100',
    'reason' => 'inspection_result',
    'return_receipt_line_item_id' => 'example',
  ],
]);
$result = $client->api->createReturnDisposition($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->return_disposition_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
