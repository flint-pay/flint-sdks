# Flint Public API SDK (php)

Package 0.2.0-beta.2; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md)

## Installation

Requires PHP 8.2+, ext-json and ext-curl; framework independent.

Install: `composer require flintpay/flint:0.2.0-beta.2`

## Quickstart

Set `API_BASE_URL` to your API environment and replace the sample IDs below with values from your account. Set `API_TOKEN` for token authentication; named authentication modes use the `API_MODE_SCHEME` environment variables shown in each example. The example scripts read these variables explicitly.

Copy an example into your application with its `vendor/autoload.php` path, or run `composer install` in the generated package, then `php examples/RESOURCE-METHOD.php`. Examples use a placeholder base URL and one request attempt.

Replace sample IDs with values from your account. For idempotent mutations, create and save a unique key with the business action before sending the request; reload that same key when retrying. Use a different key for each new action.

### api.createPaymentIntent

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{SdkError, Client, ClientOptions, RequestOptions, ApiCreatePaymentIntentInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));

// Load the key already saved with this business action.
$idempotencyKey = getenv('API_IDEMPOTENCY_KEY');
if (!$idempotencyKey) throw new \RuntimeException('Set API_IDEMPOTENCY_KEY to the saved key');

try {
  $input = new ApiCreatePaymentIntentInput([
    'body' => (object) [
      'amount_money' => (object) [
        'amount' => '0',
        'currency' => 'USD',
      ],
      'payment_options' => [
        'card',
      ],
    ],
    'Idempotency-Key' => $idempotencyKey,
  ]);
  $result = $client->api->createPaymentIntent($input, new RequestOptions(maxAttempts: 1));
  echo $result->data->data->payment_intent->payment_intent_id . PHP_EOL;
  echo $result->data->data->payment_intent->status . PHP_EOL;
  echo ($result->meta['requestId'] ?? '') . PHP_EOL;
} catch (SdkError $error) {
  error_log($error->kind . ': ' . ($error->errorCode ?? '') . ' request=' . ($error->meta['requestId'] ?? 'unknown'));
  if ($error->outcome === 'unknown') {
    // Reconcile with the API before resubmitting this action.
    error_log('The request may have succeeded; check its current state.');
  }
  throw $error;
}
```

[Run the standalone example](examples/api-createPaymentIntent.php)

## More examples

Reuse the client above. Each recipe represents a separate business action.

### api.getPaymentIntent

Returns a single payment intent by ID.

```php
$input = new \Flint\ApiGetPaymentIntentInput([
  'payment_intent_id' => 'example',
]);
$result = $client->api->getPaymentIntent($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->payment_intent_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
```

[Run the standalone example](examples/api-getPaymentIntent.php)

### api.createRefund

Creates a refund for an order or payment intent. This is a financial operation.

```php
// Load the key already saved with this business action.
$apiCreateRefundIdempotencyKey = getenv('API_API_CREATEREFUND_IDEMPOTENCY_KEY');
if (!$apiCreateRefundIdempotencyKey) throw new \RuntimeException('Set API_API_CREATEREFUND_IDEMPOTENCY_KEY to the saved key');

$input = new \Flint\ApiCreateRefundInput([
  'body' => (object) [
    'order_id' => 'example',
  ],
  'Idempotency-Key' => $apiCreateRefundIdempotencyKey,
]);
$result = $client->api->createRefund($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->refund_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
```

[Run the standalone example](examples/api-createRefund.php)

Close the client when finished with `$client->close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
