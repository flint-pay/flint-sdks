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

$result = $client->returnResolutions->getOrCreateCheckoutSession('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->checkout_session->checkout_session_id . PHP_EOL;
echo $result->checkout_session->status . PHP_EOL;
$client->close();
