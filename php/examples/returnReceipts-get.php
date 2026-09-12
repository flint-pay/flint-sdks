<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->returnReceipts->get('example', [], new RequestOptions(maxAttempts: 1));
echo $result->receiving_location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
