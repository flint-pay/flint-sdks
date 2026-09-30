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

$result = $client->inventoryLevels->update('example', [
  'safety_stock_quantity' => '0',
  'Idempotency-Key' => $idempotencyKey,
]);
echo $result->inventory_level->inventory_item_id . PHP_EOL;
echo $result->inventory_level->inventory_level_id . PHP_EOL;
$client->close();
