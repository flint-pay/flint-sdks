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

$result = $client->deliveryRevocations->revokeDeliveryDependency([
  'reason' => 'unsafe_configuration',
  'target' => (object) [
    'target_type' => 'location_geography',
    'location_id' => 'example',
    'location_geography_revision' => '100',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->delivery_revocation_id . PHP_EOL;
$client->close();
