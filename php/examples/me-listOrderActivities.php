<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$customerToken = getenv('CUSTOMER_TOKEN');
if ($customerToken === false || $customerToken === '') throw new \RuntimeException('Set CUSTOMER_TOKEN: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  customerToken: $customerToken,
));
$result = $client->me->listOrderActivities('example');
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
