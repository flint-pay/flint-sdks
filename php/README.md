# Flint Public API SDK (php)

Package 0.3.0-beta.1; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md) · [Models and field descriptions](MODELS.md) · [pagination-and-retries](guides/pagination-and-retries.md)

## Installation

Requires PHP 8.2+, ext-json and ext-curl; framework independent.

Install: `composer require flintpay/flint:0.3.0-beta.1`

## Quickstart

Set `API_BASE_URL` to your API environment and replace the sample IDs below with values from your account. Set the credential environment variables shown below; the [authentication guide](RUNTIME.md#authentication) lists every mode and required credential key. The example scripts read these variables explicitly.

Copy an example into your application with its `vendor/autoload.php` path, or run `composer install` in the generated package, then `php examples/RESOURCE-METHOD.php`. Examples use a placeholder base URL and one request attempt.

Payload-mode calls return the decoded payload directly. Use the corresponding WithResponse method for the complete body and HTTP metadata; see the [WithResponse example](RUNTIME.md#response-return-modes). Each invocation makes its own request; choose one form per action. Operations configured for result mode retain `$result->data` and `$result->meta`. The API reference describes the return mode for each operation.

Replace sample IDs with values from your account. Each new action gets a unique idempotency key. Save it with the action if retries need to survive a process restart.

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{SdkError, Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));

// Reuse this key when retrying the same action.
$idempotencyKey = bin2hex(random_bytes(16));

try {
  $result = $client->paymentIntents->create([
    'amount_money' => (object) [
      'amount' => '2500',
      'currency' => 'USD',
    ],
    'capture_method' => 'automatic',
    'external_reference_id' => 'purchase-1001',
    'payment_options' => [
      'card',
    ],
    'receipt_email' => 'buyer@example.com',
    'Idempotency-Key' => $idempotencyKey,
  ], new RequestOptions(maxAttempts: 1));
  echo $result->payment_intent->payment_intent_id . PHP_EOL;
  echo $result->payment_intent->status . PHP_EOL;
} catch (SdkError $error) {
  error_log($error->kind . ': ' . ($error->errorCode ?? '') . ' request=' . ($error->meta['requestId'] ?? 'unknown'));
  if ($error->outcome === 'unknown') {
    // Reconcile with the API before resubmitting this action.
    error_log('The request may have succeeded; check its current state.');
  }
  throw $error;
}
```

[Run the standalone example](examples/paymentIntents-create.php)

## More examples

Reuse the client above. Each recipe represents a separate business action.

### refunds.create

Creates a refund for an order or payment intent. This is a financial operation.

```php
// Reuse this key when retrying the same action.
$refundsCreateIdempotencyKey = bin2hex(random_bytes(16));

$result = $client->refunds->create([
  'amount_money' => (object) [
    'amount' => '500',
    'currency' => 'USD',
  ],
  'external_reference_id' => 'refund-1001',
  'payment_intent_id' => 'pi_replace_with_your_payment_intent_id',
  'reason' => 'requested_by_customer',
  'Idempotency-Key' => $refundsCreateIdempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->refund_id . PHP_EOL;
echo $result->status . PHP_EOL;
```

[Run the standalone example](examples/refunds-create.php)

### checkoutSessions.create

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

```php
// Reuse this key when retrying the same action.
$checkoutSessionsCreateIdempotencyKey = bin2hex(random_bytes(16));

$result = $client->checkoutSessions->create([
  'order_id' => 'ord_replace_with_your_order_id',
  'payments' => (object) [
    'enabled_payment_options' => [
      'card',
    ],
  ],
  'redirects' => (object) [
    'cancel_redirect_url' => 'https://shop.example.com/cart',
    'success_redirect_url' => 'https://shop.example.com/checkout/success',
  ],
  'surface' => 'hosted',
  'Idempotency-Key' => $checkoutSessionsCreateIdempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->checkout_session->checkout_session_id . PHP_EOL;
echo $result->checkout_session->status . PHP_EOL;
```

[Run the standalone example](examples/checkoutSessions-create.php)

Close the client when finished with `$client->close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
