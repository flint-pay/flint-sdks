<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReturnInspectionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateReturnInspectionInput([
  'return_id' => 'example',
  'body' => (object) [
    'inspected_at' => '2026-01-01T00:00:00Z',
    'line_items' => [
      (object) [
        'acceptance_status' => 'accepted',
        'condition' => 'new',
        'quantity' => '100',
        'return_receipt_line_item_id' => 'example',
      ],
    ],
    'location_id' => 'example',
    'return_receipt_id' => 'example',
  ],
]);
$result = $client->api->createReturnInspection($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->location_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
