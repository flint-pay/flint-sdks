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
$input = [
  'body' => (object) [
    'destination' => (object) [
      'customer_address_id' => 'caddr_01J00000000000000000000001',
      'type' => 'customer_address',
    ],
    'mode' => 'delivery_options',
    'subscription_id' => 'sub_01J00000000000000000000001',
  ],
];
$result = $client->subscriptionPreviews->create($input);
$client->close();
