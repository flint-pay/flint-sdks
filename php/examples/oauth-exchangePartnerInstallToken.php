<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$result = $client->oauth->exchangePartnerInstallToken([
  'client_id' => 'example',
  'client_secret' => 'example',
  'grant_type' => 'example',
], new RequestOptions(maxAttempts: 1));
echo $result->environment_grant_id . PHP_EOL;
echo $result->merchant_id . PHP_EOL;
$client->close();
