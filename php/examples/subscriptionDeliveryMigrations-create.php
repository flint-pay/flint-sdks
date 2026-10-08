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
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionDeliveryMigrations->create([
  'from_delivery_method_id' => 'dmet_01J00000000000000000000001',
  'to_delivery_method_id' => 'dmet_01J00000000000000000000002',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->from_delivery_method_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
