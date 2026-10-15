# Flint Public API SDK

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

## Install

```sh
composer require flintpay/flint
```

Requires PHP 8.2+ with ext-json and ext-curl. PHPDoc types target PHPStan 2.2+.

## Quickstart

Set `API_KEY` ([authentication](RUNTIME.md#authentication)), then replace the sample values with your own. Set `API_BASE_URL` to use another environment.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, SdkError};
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
  echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
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

Methods return the decoded body, except result-mode operations, which return `$result->data` and `$result->meta`; the [API reference](REFERENCE.md) lists each operation's mode. Call `$client->close()` when finished to release the cURL handle.

## More examples

### paymentIntents.get

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. If buyer authentication is required but Flint cannot produce its client action, returns PAYMENT_CLIENT_ACTION_UNAVAILABLE.

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

## Errors and retries

Failed calls throw `SdkError` with `getMessage()`, `kind`, `status`, `errorCode` and the request ID in `meta`. An `outcome` of `unknown` means the request may have succeeded, so check the current state before resubmitting. Operations with a declared retry policy follow it, as listed in the [API reference](REFERENCE.md); otherwise GET, HEAD and OPTIONS calls make up to three attempts and other methods send once. See [errors](RUNTIME.md#responses-and-errors) and [retries](RUNTIME.md#retries-and-idempotency).

Check an error's class to handle a specific failure; every class extends `SdkError`:

```php
use Flint\Errors\NotFoundError;
/** @param callable(): mixed $request */
function handleSdkRequest(callable $request): void {
    try {
        $request(); // Pass a closure that calls a resource method.
    } catch (NotFoundError $error) {
        error_log($error->getMessage());
    }
}
```

## Pagination

List operations such as `apiKeys.list` also have `listItems` and `listPages` methods that fetch pages lazily. See [pagination](RUNTIME.md#pagination-and-polling).

## Webhooks

Verify each delivery with `$client->verifyWebhook($rawBody, $headers, $secrets)` on the original request bytes, never re-encoded JSON. Standalone `Webhooks::verify` needs no client configuration. See [verifyWebhook examples and errors](RUNTIME.md#webhooks-and-recovery).

## Documentation

- [API reference](REFERENCE.md): every operation, with examples
- [Models](MODELS.md): fields and descriptions
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks
- [pagination-and-retries](guides/pagination-and-retries.md)
- `examples/`: a runnable script per operation. Run `composer install`, then `php examples/RESOURCE-METHOD.php`.

Package 3.0.0, generated for API 2026-09-07.
