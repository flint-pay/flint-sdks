<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
));
$result = $client->demoSessions->reset([]);
echo $result->demo_session_id . PHP_EOL;
echo $result->sandbox_id . PHP_EOL;
$client->close();
