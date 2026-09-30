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

$result = $client->me->cancelReturn('example', [
  'reason' => 'buyer_request',
  'Idempotency-Key' => $idempotencyKey,
]);
echo $result->order_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
