<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateRiskPreviewInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateRiskPreviewInput([
  'body' => (object) [
    'risk_rule_id' => 'rr_example',
  ],
]);
$result = $client->api->createRiskPreview($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
