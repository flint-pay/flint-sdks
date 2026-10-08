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
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->changeSubscriptionDelivery('sub_01J00000000000000000000001', [
  'delivery' => (object) [
    'delivery_method_id' => 'dmet_01J00000000000000000000001',
    'destination' => (object) [
      'customer_address_id' => 'caddr_01J00000000000000000000001',
      'type' => 'customer_address',
    ],
    'type' => 'shipment',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->customer_id . PHP_EOL;
echo $result->payment_method_id . PHP_EOL;
$client->close();
