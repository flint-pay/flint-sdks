<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReturnPreviewInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateReturnPreviewInput([
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
$result = $client->api->createReturnPreview($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
