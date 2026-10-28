# Flint Public API SDK

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

## Install

```sh
composer require flintpay/flint
```

Requires PHP 8.2+ with ext-json and ext-curl. PHPDoc types target PHPStan 2.2+.

## Quickstart

Set `API_BASE_URL` ([authentication](RUNTIME.md#authentication)) and configure default credentials as described in the authentication guide, then replace the sample values with your own. Choose your sandbox or local mock URL explicitly; the API declares https://api.withflintpay.com as its default server.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, SdkError};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
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

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. For a standalone payment intent in requires_action, call confirm with an empty body to retrieve current_payment_action.

```php
$result = $client->paymentIntents->get('example');
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
```

[Run the standalone example](examples/paymentIntents-get.php)

### refunds.create

Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card load. Set refund_type to full for the full remaining refundable amount, amount for an explicit amount_money, or targets for named line items, charges, and taxes. To refund a gift card redemption made outside a Flint order, set refund_type to amount and send one tender_allocations entry per redemption, with no order_id. A created refund returns 201 even when processing fails; inspect status and failure_reason. A same-key replay returns the original refund without another money attempt. This is a financial operation.

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$refundsCreateIdempotencyKey = bin2hex(random_bytes(16));

$result = $client->refunds->create([
  'refund_type' => 'full',
  'order_id' => 'example',
], new RequestOptions(idempotencyKey: $refundsCreateIdempotencyKey));
echo $result->refund_id . PHP_EOL;
echo $result->status . PHP_EOL;
```

[Run the standalone example](examples/refunds-create.php)

## Errors and retries

Failed calls throw `SdkError` with `getMessage()`, `kind`, `status`, `errorCode` and the request ID in `meta`. An `outcome` of `unknown` means the request may have succeeded, so check the current state before resubmitting. Each operation retries according to its declared policy; the [API reference](REFERENCE.md) lists its attempt limit. See [errors](RUNTIME.md#responses-and-errors) and [retries](RUNTIME.md#retries-and-idempotency).

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

Verify each delivery with `$client->verifyWebhookDelivery($rawBody, $headers, ['endpoint_ids' => $endpointIds, 'cache' => $cache])` on the original request bytes, never re-encoded JSON. Pass a PSR-16 `cache`, or enable APCu, so PHP-FPM workers share JWKS keys and refresh limits. Standalone verification accepts a trusted base URL and endpoint IDs; see the runtime guide. See [verifyWebhook examples and errors](RUNTIME.md#webhooks-and-recovery).

## Documentation

Set API_BASE_URL to your sandbox or local mock URL and supply the credential environment variables shown in the quickstart. Example IDs are placeholders: replace them with IDs from that environment.

Selected methods use positional path arguments; check their signatures. Request options are the last argument.

- [API reference](REFERENCE.md): resource index linking to operation files under reference/
- [Models](MODELS.md): model index, fields and descriptions
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks
- [default-credentials](guides/default-credentials.md)
- [pagination-and-retries](guides/pagination-and-retries.md)
- [Agent index](llms.txt): a small documentation entry point
- `examples/`: a runnable script per operation. Run `composer install`, then `php examples/RESOURCE-METHOD.php`.

Package 5.1.0, generated for API 2026-09-07.
