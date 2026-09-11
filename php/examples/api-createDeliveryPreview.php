<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateDeliveryPreviewInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateDeliveryPreviewInput([
  'body' => (object) [
    'currency' => 'USD',
    'delivery_method_ids' => [],
    'line_items' => [
      (object) [
        'variant_id' => 'example',
      ],
    ],
  ],
]);
$result = $client->api->createDeliveryPreview($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
