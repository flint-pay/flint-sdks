<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$apiKey = getenv('API_KEY');
if ($apiKey === false || $apiKey === '') throw new \RuntimeException('Set API_KEY: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  apiKey: $apiKey,
));
$result = $client->returnInspections->get('example');
echo $result->location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
