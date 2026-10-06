<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
));
$result = $client->oauth->exchangePartnerInstallToken([
  'client_id' => 'example',
  'client_secret' => 'example',
  'grant_type' => 'authorization_code',
]);
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
