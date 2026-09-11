<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiUpdateDeveloperPartnerAppInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiUpdateDeveloperPartnerAppInput([
  'partner_app_id' => 'example',
  'body' => (object) [],
]);
$result = $client->api->updateDeveloperPartnerApp($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->client_id . PHP_EOL;
echo $result->data->data->partner_app_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
