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

$result = $client->giftCardFundingDispositions->create([
  'disposition' => 'honor_value',
  'dispute_id' => 'du_01JZXK4G8Q5V3N7M2P9R6T1W0Y',
  'reason_message' => 'Honored after the dispute review.',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->dispute_id . PHP_EOL;
echo $result->gift_card_funding_disposition_id . PHP_EOL;
$client->close();
