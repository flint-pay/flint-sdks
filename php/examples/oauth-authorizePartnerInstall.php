<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->oauth->authorizePartnerInstall([
  'response_type' => 'code',
  'client_id' => 'example',
  'redirect_uri' => 'example',
  'mode' => 'test',
  'state' => 'example',
], new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
