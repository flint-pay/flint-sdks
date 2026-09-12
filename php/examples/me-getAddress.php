<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
$result = $client->me->getAddress('example', [], new RequestOptions(maxAttempts: 1));
echo $result->customer_address_id . PHP_EOL;
echo $result->customer_id . PHP_EOL;
$client->close();
