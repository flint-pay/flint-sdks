<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRevokeDeliveryDependencyInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiRevokeDeliveryDependencyInput([
  'body' => (object) [
    'reason' => 'unsafe_configuration',
    'target' => (object) [
      'target_type' => 'location_geography',
      'location_id' => 'example',
      'location_geography_revision' => '100',
    ],
  ],
]);
$result = $client->api->revokeDeliveryDependency($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->delivery_revocation_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
