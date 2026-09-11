<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiRevokeDeveloperPartnerEnvironmentGrantInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiRevokeDeveloperPartnerEnvironmentGrantInput([
  'partner_app_id' => 'example',
  'partner_app_install_id' => 'example',
  'environment_grant_id' => 'example',
]);
$result = $client->api->revokeDeveloperPartnerEnvironmentGrant($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->merchant_id . PHP_EOL;
echo $result->data->data->partner_app_install_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
