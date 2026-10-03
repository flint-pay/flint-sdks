<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
));
$result = $client->paymentLinks->getPublic('example');
echo $result->payment_link->payment_link_id . PHP_EOL;
echo $result->payment_link->status . PHP_EOL;
$client->close();
