<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiDecideReturnInspectionLineItemInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiDecideReturnInspectionLineItemInput([
  'return_inspection_id' => 'example',
  'return_inspection_line_item_id' => 'example',
  'body' => (object) [
    'acceptance_decision_reason' => 'inspection_result',
    'acceptance_status' => 'accepted',
  ],
]);
$result = $client->api->decideReturnInspectionLineItem($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->location_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
