<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  customerToken: getenv('CUSTOMER_TOKEN') ?: '',
));
$result = $client->me->getSubscriptionPaymentRetry('example', 'example');
echo $result->status . PHP_EOL;
echo $result->subscription_id . PHP_EOL;
$client->close();
