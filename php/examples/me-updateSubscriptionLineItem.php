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

$result = $client->me->updateSubscriptionLineItem('sub_01J00000000000000000000001', 'sli_01J00000000000000000000001', [
  'variant_id' => 'var_01J00000000000000000000001',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->customer_id . PHP_EOL;
echo $result->payment_method_id . PHP_EOL;
$client->close();
