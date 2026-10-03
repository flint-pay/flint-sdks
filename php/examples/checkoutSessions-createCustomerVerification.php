<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  authMode: 'checkout',
  credentials: [
    'checkout' => [
      'CheckoutSessionIDHeader' => getenv('API_CHECKOUT_CHECKOUTSESSIONIDHEADER') ?: '',
      'CheckoutSessionSecretHeader' => getenv('API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER') ?: '',
    ],
  ],
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->createCustomerVerification('example', [
  'purpose' => 'gift_card_purchase',
  'X-Checkout-Session-ID' => 'example',
  'X-Checkout-Session-Secret' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->checkout_session_id . PHP_EOL;
echo $result->customer_verification_id . PHP_EOL;
$client->close();
