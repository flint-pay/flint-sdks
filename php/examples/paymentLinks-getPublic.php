<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$result = $client->paymentLinks->getPublic('example', [], new RequestOptions(maxAttempts: 1));
echo $result->payment_link->payment_link_id . PHP_EOL;
echo $result->payment_link->status . PHP_EOL;
$client->close();
