<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$apiKey = getenv('API_KEY');
if ($apiKey === false || $apiKey === '') throw new \RuntimeException('Set API_KEY: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  apiKey: $apiKey,
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->invoicePaymentTerms->update('example', [
  'calculation' => (object) [
    'type' => 'on_receipt',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->invoice_payment_term_id . PHP_EOL;
echo $result->merchant_id . PHP_EOL;
$client->close();
