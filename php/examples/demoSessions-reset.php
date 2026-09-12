<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$result = $client->demoSessions->reset([], new RequestOptions(maxAttempts: 1));
echo $result->demo_session_id . PHP_EOL;
echo $result->sandbox_id . PHP_EOL;
$client->close();
