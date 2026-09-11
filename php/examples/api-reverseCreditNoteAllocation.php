<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiReverseCreditNoteAllocationInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiReverseCreditNoteAllocationInput([
  'credit_note_id' => 'example',
  'credit_note_allocation_id' => 'example',
]);
$result = $client->api->reverseCreditNoteAllocation($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->credit_note->credit_note_id . PHP_EOL;
echo $result->data->data->credit_note->invoice_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
