<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));
$result = $client->deliveryMethods->get('example');
echo $result->current_delivery_method_revision_id . PHP_EOL;
echo $result->delivery_method_id . PHP_EOL;
$client->close();
