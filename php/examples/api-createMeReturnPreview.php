<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateMeReturnPreviewInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer', credentials: ['customer' => ['CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '']],
));
$input = new ApiCreateMeReturnPreviewInput([
  'body' => (object) [
    'mode' => 'eligibility',
    'eligibility' => (object) [
      'order_id' => 'example',
      'selection' => (object) [
        'selection_type' => 'all_remaining_fulfilled',
      ],
    ],
  ],
]);
$result = $client->api->createMeReturnPreview($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
