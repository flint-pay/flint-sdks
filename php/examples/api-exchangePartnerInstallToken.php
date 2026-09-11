<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiExchangePartnerInstallTokenInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiExchangePartnerInstallTokenInput([
  'body' => (object) [
    'client_id' => 'example',
    'client_secret' => 'example',
    'grant_type' => 'example',
  ],
]);
$result = $client->api->exchangePartnerInstallToken($input, new RequestOptions(maxAttempts: 1));
echo $result->data->environment_grant_id . PHP_EOL;
echo $result->data->merchant_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
