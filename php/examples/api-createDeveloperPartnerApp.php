<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateDeveloperPartnerAppInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateDeveloperPartnerAppInput([
  'body' => (object) [
    'name' => 'example',
    'permission_manifest' => [],
    'redirect_uris' => [],
  ],
]);
$result = $client->api->createDeveloperPartnerApp($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->client_id . PHP_EOL;
echo $result->data->data->partner_app_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
