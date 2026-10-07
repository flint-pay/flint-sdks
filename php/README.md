# Flint Public API SDK (php)

Package 3.0.0-beta.20261007031000; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md) · [Models and field descriptions](MODELS.md) · [pagination-and-retries](guides/pagination-and-retries.md)

## Installation

Requires PHP 8.2+, ext-json and ext-curl; framework independent. PHPDoc types target PHPStan 2.2+ (development tooling only).

Install: `composer require flintpay/flint:3.0.0-beta.20261007031000`

## Quickstart

The default API base URL is `https://api.withflintpay.com`, the first server declared by the API. Set `API_BASE_URL` to override it for another environment. Replace the sample IDs below with values from your account. Set the credential environment variables shown below; the [authentication guide](RUNTIME.md#authentication) lists every mode and required credential key. The example scripts read these variables explicitly.

Copy an example into your application with its `vendor/autoload.php` path, or run `composer install` in the generated package, then `php examples/RESOURCE-METHOD.php`. Examples use the client and operation defaults.

Payload-mode calls return the decoded payload directly. Use the corresponding WithResponse method for the complete body and HTTP metadata; see the [WithResponse example](RUNTIME.md#response-return-modes). Each invocation makes its own request; choose one form per action. Operations configured for result mode retain `$result->data` and `$result->meta`. The API reference describes the return mode for each operation.

Replace sample IDs with values from your account. Each new action gets a unique idempotency key. Save it with the action if retries need to survive a process restart.

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{SdkError, Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));

// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

try {
  $result = $client->paymentIntents->create([
    'amount_money' => (object) [
      'amount' => '5000',
      'currency' => 'USD',
    ],
    'payment_options' => [
      'card',
    ],
  ], new RequestOptions(idempotencyKey: $idempotencyKey));
  echo $result->payment_intent->payment_intent_id . PHP_EOL;
  echo $result->payment_intent->status . PHP_EOL;
} catch (SdkError $error) {
  error_log($error->getMessage() . ' status=' . ($error->status ?? 'none') . ' code=' . ($error->errorCode ?? '') . ' request=' . ($error->meta['requestId'] ?? 'unknown'));
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

### paymentIntents.get

Returns a single payment intent by ID.

```php
$result = $client->paymentIntents->get('example');
echo $result->payment_intent_id . PHP_EOL;
echo $result->status . PHP_EOL;
```

[Run the standalone example](examples/paymentIntents-get.php)

### refunds.create

Creates a refund for an order or payment intent. This is a financial operation.

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$refundsCreateIdempotencyKey = bin2hex(random_bytes(16));

$result = $client->refunds->create([
  'order_id' => 'example',
], new RequestOptions(idempotencyKey: $refundsCreateIdempotencyKey));
echo $result->refund_id . PHP_EOL;
echo $result->status . PHP_EOL;
```

[Run the standalone example](examples/refunds-create.php)

Close the client when finished with `$client->close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
- [verifyWebhook examples and errors](RUNTIME.md#webhooks-and-recovery)
