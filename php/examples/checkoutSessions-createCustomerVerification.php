<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$checkoutSessionIDHeader = getenv('API_CHECKOUT_CHECKOUTSESSIONIDHEADER');
if ($checkoutSessionIDHeader === false || $checkoutSessionIDHeader === '') throw new \RuntimeException('Set API_CHECKOUT_CHECKOUTSESSIONIDHEADER: this call requires a credential');
$checkoutSessionSecretHeader = getenv('API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER');
if ($checkoutSessionSecretHeader === false || $checkoutSessionSecretHeader === '') throw new \RuntimeException('Set API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  authMode: 'checkout',
  credentials: [
    'checkout' => [
      'CheckoutSessionIDHeader' => $checkoutSessionIDHeader,
      'CheckoutSessionSecretHeader' => $checkoutSessionSecretHeader,
    ],
  ],
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->createCustomerVerification('example', [
  'purpose' => 'gift_card_purchase',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->checkout_session_id . PHP_EOL;
echo $result->customer_verification_id . PHP_EOL;
$client->close();
