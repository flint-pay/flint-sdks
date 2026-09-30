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

$result = $client->checkoutSessions->confirmCustomerVerification('cs_example', 'cver_example', [
  'code' => '123456',
  'X-Checkout-Session-ID' => 'cs_example',
  'X-Checkout-Session-Secret' => 'checkout_secret_example',
  'Idempotency-Key' => $idempotencyKey,
]);
echo $result->checkout_session->checkout_session_id . PHP_EOL;
echo $result->checkout_session->status . PHP_EOL;
$client->close();
