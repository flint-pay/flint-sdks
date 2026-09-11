<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetMeCreditNoteInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiGetMeCreditNoteInput([
  'invoice_id' => 'example',
  'credit_note_id' => 'example',
]);
$result = $client->api->getMeCreditNote($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->credit_note_id . PHP_EOL;
echo $result->data->data->invoice_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
