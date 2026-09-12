# Flint Public API API reference

Package 0.3.0-beta.1; API 2026-09-07.

[Models and field descriptions](MODELS.md) · [Runtime guide](RUNTIME.md)

Return modes are documented per operation. Payload methods return values directly; WithResponse exposes the full body, metadata and raw response. PHP accepts input arrays or generated input classes.

## Resources

- [analytics](#resource-analytics)
- [apiKeys](#resource-apikeys)
- [balanceTransactions](#resource-balancetransactions)
- [balances](#resource-balances)
- [bundles](#resource-bundles)
- [capabilities](#resource-capabilities)
- [categories](#resource-categories)
- [checkoutSessions](#resource-checkoutsessions)
- [creditNotes](#resource-creditnotes)
- [customerDeletionRequests](#resource-customerdeletionrequests)
- [customerSessions](#resource-customersessions)
- [customers](#resource-customers)
- [deliveryLocationSets](#resource-deliverylocationsets)
- [deliveryMethods](#resource-deliverymethods)
- [deliveryPreviews](#resource-deliverypreviews)
- [deliveryProfiles](#resource-deliveryprofiles)
- [deliveryQuotes](#resource-deliveryquotes)
- [deliveryRateCallbacks](#resource-deliveryratecallbacks)
- [deliveryRevocations](#resource-deliveryrevocations)
- [deliveryZones](#resource-deliveryzones)
- [demoSessions](#resource-demosessions)
- [developer](#resource-developer)
- [devices](#resource-devices)
- [disputes](#resource-disputes)
- [feedbackReports](#resource-feedbackreports)
- [fraudWarnings](#resource-fraudwarnings)
- [fulfillmentEvents](#resource-fulfillmentevents)
- [fulfillmentNotifications](#resource-fulfillmentnotifications)
- [fulfillments](#resource-fulfillments)
- [inventoryAdjustments](#resource-inventoryadjustments)
- [inventoryAllocationPolicies](#resource-inventoryallocationpolicies)
- [inventoryCounts](#resource-inventorycounts)
- [inventoryItems](#resource-inventoryitems)
- [inventoryLevels](#resource-inventorylevels)
- [inventoryMovements](#resource-inventorymovements)
- [inventoryReceipts](#resource-inventoryreceipts)
- [inventoryReservations](#resource-inventoryreservations)
- [inventoryTransfers](#resource-inventorytransfers)
- [invoicePaymentTerms](#resource-invoicepaymentterms)
- [invoices](#resource-invoices)
- [locations](#resource-locations)
- [me](#resource-me)
- [merchantAccountSessions](#resource-merchantaccountsessions)
- [merchantBillingBalances](#resource-merchantbillingbalances)
- [merchantSubscriptionInvoices](#resource-merchantsubscriptioninvoices)
- [merchants](#resource-merchants)
- [modifierGroups](#resource-modifiergroups)
- [modifierSets](#resource-modifiersets)
- [oauth](#resource-oauth)
- [onboarding](#resource-onboarding)
- [orders](#resource-orders)
- [organizations](#resource-organizations)
- [packages](#resource-packages)
- [paymentIntents](#resource-paymentintents)
- [paymentLinks](#resource-paymentlinks)
- [paymentMethodDomains](#resource-paymentmethoddomains)
- [paymentMethods](#resource-paymentmethods)
- [payoutSettings](#resource-payoutsettings)
- [payouts](#resource-payouts)
- [products](#resource-products)
- [promotions](#resource-promotions)
- [refunds](#resource-refunds)
- [reportDownloads](#resource-reportdownloads)
- [reports](#resource-reports)
- [returnDispositions](#resource-returndispositions)
- [returnInspections](#resource-returninspections)
- [returnPolicies](#resource-returnpolicies)
- [returnPreviews](#resource-returnpreviews)
- [returnReasons](#resource-returnreasons)
- [returnReceipts](#resource-returnreceipts)
- [returnResolutions](#resource-returnresolutions)
- [returns](#resource-returns)
- [reviews](#resource-reviews)
- [riskLists](#resource-risklists)
- [riskPreviews](#resource-riskpreviews)
- [riskRules](#resource-riskrules)
- [settings](#resource-settings)
- [shipments](#resource-shipments)
- [specification](#resource-specification)
- [subscriptionPlans](#resource-subscriptionplans)
- [subscriptions](#resource-subscriptions)
- [webhookDeliveries](#resource-webhookdeliveries)
- [webhookEndpoints](#resource-webhookendpoints)
- [webhookEventTypes](#resource-webhookeventtypes)
- [webhookEvents](#resource-webhookevents)

## Resource: analytics

### analytics.getOverview

Returns high-level merchant analytics for the requested time range.

`GET /v1/analytics/overview`

Call: `getOverview(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'range': string, 'timezone'?: string, 'include_previous_period'?: bool, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `range` | Required | string | Values: "today", "last_7_days", "last_30_days". |
| `timezone` | Optional | string |  |
| `include_previous_period` | Optional | boolean |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getOverviewWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/analytics-getOverview.php)


### analytics.getPaymentVolumeTimeseries

Returns merchant payment volume buckets for the requested time range.

`GET /v1/analytics/payment-volume-timeseries`

Call: `getPaymentVolumeTimeseries(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'range': string, 'timezone'?: string, 'include_previous_period'?: bool, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `range` | Required | string | Values: "today", "last_7_days", "last_30_days". |
| `timezone` | Optional | string |  |
| `include_previous_period` | Optional | boolean |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPaymentVolumeTimeseriesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/analytics-getPaymentVolumeTimeseries.php)


### analytics.getSubscription

Returns windowed subscription metrics plus current subscription snapshot metrics.

`GET /v1/analytics/subscriptions`

Call: `getSubscription(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'range': string, 'timezone'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `range` | Required | string | Values: "today", "last_7_days", "last_30_days". |
| `timezone` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/analytics-getSubscription.php)


## Resource: apiKeys

### apiKeys.create

Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string, 'name': string, 'sandbox_id'?: string, 'scopes': list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/apiKeys-create.php)


### apiKeys.get

Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.

`GET /v1/api-keys/{api_key_id}`

Call: `get(string|Model $api_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `api_key_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'api_key_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/apiKeys-get.php)


### apiKeys.list

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned.

`GET /v1/api-keys`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'status'?: string, 'page_size'?: int, 'page_token'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string | Values: "active", "revoked". |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "last_used_at", "name". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/apiKeys-list.php)

#### apiKeys.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->apiKeys->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### apiKeys.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->apiKeys->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### apiKeys.revoke

Permanently revokes an external API key and returns metadata with status revoked.

`POST /v1/api-keys/{api_key_id}/revoke`

Call: `revoke(string|Model $api_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `api_key_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'api_key_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/apiKeys-revoke.php)


### apiKeys.update

Updates an active external API key's name or complete scope list. API-key-authenticated callers may delegate only scopes already granted to the calling key.

`PATCH /v1/api-keys/{api_key_id}`

Call: `update(string|Model $api_key_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `api_key_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'api_key_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string|null, 'name'?: string, 'scopes'?: list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/apiKeys-update.php)


## Resource: balances

### balances.list

Returns an unpaginated current balance snapshot grouped by currency and balance source for the authenticated merchant.

`GET /v1/balances`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'currency'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/balances-list.php)


## Resource: balanceTransactions

### balanceTransactions.get

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Call: `get(string|Model $balance_transaction_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `balance_transaction_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'balance_transaction_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_transaction_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/balanceTransactions-get.php)


### balanceTransactions.list

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources.

`GET /v1/balance-transactions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'currency'?: string, 'type'?: string, 'related_object_type'?: string, 'related_object_id'?: string, 'status'?: string, 'created_after'?: string, 'created_before'?: string, 'available_after'?: string, 'available_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `type` | Optional | string | Values: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "payout_hold", "payout_hold_release", "adjustment", "merchant_billing_payment", "merchant_billing_payment_reversal". |
| `related_object_type` | Optional | string | Values: "payment_intent", "refund", "dispute", "payout", "payout_destination", "reserve", "adjustment", "merchant_subscription_invoice". |
| `related_object_id` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "available", "reserved", "reversed", "failed", "superseded". |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `available_after` | Optional | string | Format: date-time. |
| `available_before` | Optional | string | Format: date-time. |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/balanceTransactions-list.php)

#### balanceTransactions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->balanceTransactions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### balanceTransactions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->balanceTransactions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: bundles

### bundles.create

Create bundle.

`POST /v1/bundles`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'barcode'?: string, 'categories'?: list<string>, 'components'?: list<mixed>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_item_tax_category'?: string, 'metadata'?: array{}, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/bundles-create.php)


### bundles.get

Get bundle.

`GET /v1/bundles/{bundle_id}`

Call: `get(string|Model $bundle_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `bundle_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'bundle_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/bundles-get.php)


### bundles.list

List bundles.

`GET /v1/bundles`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'sku'?: string, 'query'?: string, 'category_handle'?: string, 'status'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `sku` | Optional | string |  |
| `query` | Optional | string |  |
| `category_handle` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "name". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | string | Values: "configured", "action_required", "not_applicable". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/bundles-list.php)

#### bundles.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->bundles->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### bundles.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->bundles->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### bundles.listComponents

List bundle components.

`GET /v1/bundles/{bundle_id}/components`

Call: `listComponents(string|Model $bundle_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `bundle_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'bundle_id': string, 'page_size'?: int, 'page_token'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | string | Values: "configured", "action_required", "not_applicable". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listComponentsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/bundles-listComponents.php)

#### bundles.listComponentsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->bundles->listComponentsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### bundles.listComponentsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->bundles->listComponentsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### bundles.remove

Archives a bundle and returns its final state.

`DELETE /v1/bundles/{bundle_id}`

Call: `remove(string|Model $bundle_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `bundle_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'bundle_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/bundles-remove.php)


### bundles.update

Update bundle.

`PATCH /v1/bundles/{bundle_id}`

Call: `update(string|Model $bundle_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `bundle_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'bundle_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/bundles-update.php)


## Resource: capabilities

### capabilities.list

Returns payment and money movement capability readiness for the authenticated merchant.

`GET /v1/capabilities`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'domain'?: string, 'capability'?: string, 'status'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `domain` | Optional | string | Values: "money_movement", "payments". |
| `capability` | Optional | string | Values: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings". |
| `status` | Optional | string | Values: "ready", "blocked", "pending", "not_available". |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/capabilities-list.php)

#### capabilities.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->capabilities->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### capabilities.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->capabilities->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: categories

### categories.create

Creates a reusable category. If handle is omitted, Flint derives it from the name and never changes it on rename.

`POST /v1/categories`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: array{}, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/categories-create.php)


### categories.get

Get category.

`GET /v1/categories/{category_id}`

Call: `get(string|Model $category_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `category_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'category_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/categories-get.php)


### categories.list

List categories.

`GET /v1/categories`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'status'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string | Values: "active", "archived". |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/categories-list.php)

#### categories.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->categories->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### categories.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->categories->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### categories.remove

Delete category.

`DELETE /v1/categories/{category_id}`

Call: `remove(string|Model $category_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `category_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'category_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/categories-remove.php)


### categories.update

Update category.

`PATCH /v1/categories/{category_id}`

Call: `update(string|Model $category_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `category_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'category_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'description'?: string, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/categories-update.php)


## Resource: checkoutSessions

### checkoutSessions.closeSession

Closes an open checkout session before it naturally expires.

`POST /v1/checkout-sessions/{checkout_session_id}/close`

Call: `closeSession(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `closeSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-closeSession.php)


### checkoutSessions.create

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

`POST /v1/checkout-sessions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-create.php)


### checkoutSessions.createDeliveryQuote

Creates an exact checkout-bound delivery quote without holding inventory.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`

Call: `createDeliveryQuote(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<mixed>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: string}}`

Returned payload: `object{'audience': string, 'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'choice_groups': list<mixed>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'destination_address'?: mixed, 'eligibility_context_revision': string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics': list<mixed>, 'methods'?: list<mixed>, 'order_id': string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string}|object{'audience': string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'choice_groups': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'selection_required': bool, 'status': string}|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createDeliveryQuoteWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-createDeliveryQuote.php)


### checkoutSessions.createDeliverySelection

Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Call: `createDeliverySelection(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'choices': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'external_reference_id'?: string, 'external_system'?: string, 'recipient'?: mixed}}`

Returned payload: `object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createDeliverySelectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-createDeliverySelection.php)


### checkoutSessions.deleteCurrentDeliverySelection

Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.

`DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Call: `deleteCurrentDeliverySelection(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expected_delivery_selection_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `expected_delivery_selection_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteCurrentDeliverySelectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-deleteCurrentDeliverySelection.php)


### checkoutSessions.get

Returns a single checkout session by ID.

`GET /v1/checkout-sessions/{checkout_session_id}`

Call: `get(string|Model $checkout_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-get.php)


### checkoutSessions.getCurrentDeliverySelection

Returns the provisional selection or the order-level committed selection effective for this checkout.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Call: `getCurrentDeliverySelection(string|Model $checkout_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `object{'audience': string, 'delivery_selection'?: object{'amount_money': object{'amount': string, 'currency': string}, 'buyer_location'?: mixed|mixed|mixed, 'calculation_expires_at': string, 'checkout_session_id': string, 'choices': list<mixed>, 'created_at': string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'delivery_selection_id': string, 'destination_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'eligibility_context_revision': string, 'expires_at': string, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at': string, 'limiting_deadline_reason': string, 'order_id': string, 'private_data_status'?: string, 'recipient'?: object{'email'?: string, 'name'?: string, 'phone'?: string}, 'redacted_at'?: string, 'status': string}|null|mixed, 'mutable': bool, 'originating_checkout_session_id'?: string, 'source': string}|object{'audience': string, 'delivery_selection'?: object{'amount_money': mixed, 'choices': list<mixed>, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: mixed, 'expires_at': string, 'recipient'?: mixed, 'status': string}|null|mixed, 'mutable': bool, 'source': string}|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getCurrentDeliverySelectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-getCurrentDeliverySelection.php)


### checkoutSessions.getDeliveryQuote

Returns one quote under its checkout authority. Buyer credentials receive the buyer-safe projection.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`

Call: `getDeliveryQuote(string|Model $checkout_session_id, string|Model $delivery_quote_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`, `path1` = `delivery_quote_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'delivery_quote_id': string, 'Flint-Version'?: string}`

Returned payload: `object{'audience': string, 'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'choice_groups': list<mixed>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'destination_address'?: mixed, 'eligibility_context_revision': string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics': list<mixed>, 'methods'?: list<mixed>, 'order_id': string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string}|object{'audience': string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'choice_groups': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'selection_required': bool, 'status': string}|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `delivery_quote_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getDeliveryQuoteWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-getDeliveryQuote.php)


### checkoutSessions.getDeliverySelectionHistory

Returns one checkout selection with immutable economics, lifecycle events, and retention-aware private data.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`

Call: `getDeliverySelectionHistory(string|Model $checkout_session_id, string|Model $delivery_selection_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`, `path1` = `delivery_selection_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'delivery_selection_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `delivery_selection_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getDeliverySelectionHistoryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-getDeliverySelectionHistory.php)


### checkoutSessions.list

Returns a paginated list of checkout sessions for the authenticated merchant.

`GET /v1/checkout-sessions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'order_id'?: string, 'payment_link_id'?: string, 'customer_id'?: string, 'origin'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'expires_after'?: string, 'expires_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "open", "paid", "partially_paid", "expired", "closed", "invalidated". |
| `order_id` | Optional | string |  |
| `payment_link_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `origin` | Optional | string | Values: "virtual_terminal", "payment_link", "checkout", "api", "subscription". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `expires_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `expires_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-list.php)

#### checkoutSessions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->checkoutSessions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### checkoutSessions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->checkoutSessions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### checkoutSessions.queryPickupAvailability

Computes a bounded, non-holding pickup-location projection from current checkout authority and one inventory snapshot. Merchant-authenticated requests include configured Location diagnostics; checkout credentials receive only buyer-safe results.

`POST /v1/checkout-sessions/{checkout_session_id}/query-pickup-availability`

Call: `queryPickupAvailability(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'expected_delivery_selection_id'?: string, 'maximum_distance'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `queryPickupAvailabilityWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/checkoutSessions-queryPickupAvailability.php)


### checkoutSessions.update

Updates mutable checkout session fields. Currently only metadata is mutable.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Call: `update(string|Model $checkout_session_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `checkout_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array|object|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/checkoutSessions-update.php)


## Resource: creditNotes

### creditNotes.create

Creates a draft credit note against an invoice that has been issued and not voided. Include credit_note_lines for initial corrections or omit them for an empty draft. The draft uses the invoice currency and receives a credit note number when issued.

`POST /v1/credit-notes`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'credit_note_lines'?: list<mixed>, 'external_reference_id'?: string, 'invoice_id': string, 'memo'?: string, 'reason': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/creditNotes-create.php)


### creditNotes.createAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's unallocated_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to credited. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Call: `createAllocation(string|Model $credit_note_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': array{'amount': string, 'currency': string}, 'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createAllocationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Required caller-chosen command identity. Reuse it when retrying the same allocation..

[Example](examples/creditNotes-createAllocation.php)


### creditNotes.get

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Call: `get(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/creditNotes-get.php)


### creditNotes.getAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Call: `getAllocation(string|Model $credit_note_id, string|Model $credit_note_allocation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`, `path1` = `credit_note_allocation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'credit_note_allocation_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `credit_note_allocation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getAllocationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/creditNotes-getAllocation.php)


### creditNotes.getPDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Call: `getPDF(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/creditNotes-getPDF.php)


### creditNotes.issue

Issues a draft credit note. Assigns credit_note_number, freezes the lines, renders the PDF, and sets unallocated_money to the total. The over-credit check runs here rather than on line edits: across every issued credit note, an invoice line cannot be credited past its frozen value. Issuing does not change the invoice; allocating does.

`POST /v1/credit-notes/{credit_note_id}/issue`

Call: `issue(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `issueWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/creditNotes-issue.php)


### creditNotes.list

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/credit-notes`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'invoice_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `invoice_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `status` | Optional | string | Values: "draft", "issued", "void". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/creditNotes-list.php)

#### creditNotes.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->creditNotes->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### creditNotes.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->creditNotes->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### creditNotes.listAllocations

Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced.

`GET /v1/credit-notes/{credit_note_id}/allocations`

Call: `listAllocations(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listAllocationsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/creditNotes-listAllocations.php)

#### creditNotes.listAllocationsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->creditNotes->listAllocationsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### creditNotes.listAllocationsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->creditNotes->listAllocationsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### creditNotes.reverseAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Call: `reverseAllocation(string|Model $credit_note_id, string|Model $credit_note_allocation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`, `path1` = `credit_note_allocation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'credit_note_allocation_id': string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `credit_note_allocation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `reverseAllocationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/creditNotes-reverseAllocation.php)


### creditNotes.update

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and credit_note_lines requires expected_version. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Call: `update(string|Model $credit_note_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/creditNotes-update.php)


### creditNotes.voidResource

Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Call: `voidResource(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `voidResourceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/creditNotes-voidResource.php)


## Resource: customerDeletionRequests

### customerDeletionRequests.list

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.

`GET /v1/customer-deletion-requests`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'status'?: string, 'customer_id'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | string | Values: "pending_review", "processing", "completed", "rejected", "failed". |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customerDeletionRequests-list.php)

#### customerDeletionRequests.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customerDeletionRequests->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### customerDeletionRequests.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customerDeletionRequests->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### customerDeletionRequests.resolve

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Call: `resolve(string|Model $customer_deletion_request_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_deletion_request_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_deletion_request_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'decision': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `resolveWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customerDeletionRequests-resolve.php)


## Resource: customers

### customers.create

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'email': string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array{}, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-create.php)


### customers.createAddress

Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Call: `createAddress(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-createAddress.php)


### customers.createDeletionRequest

Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/customers/{customer_id}/deletion-requests`

Call: `createDeletionRequest(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `createDeletionRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-createDeletionRequest.php)


### customers.deleteAddress

Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`

Call: `deleteAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`, `path1` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-deleteAddress.php)


### customers.get

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Call: `get(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customers-get.php)


### customers.getAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Call: `getAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`, `path1` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'customer_address_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customers-getAddress.php)


### customers.getDeletionRequest

Returns the current status of a tracked deletion request.

`GET /v1/customers/{customer_id}/deletion-requests/{customer_deletion_request_id}`

Call: `getDeletionRequest(string|Model $customer_id, string|Model $customer_deletion_request_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`, `path1` = `customer_deletion_request_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'customer_deletion_request_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_deletion_request_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getDeletionRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customers-getDeletionRequest.php)


### customers.list

Returns a paginated list of customers for the authenticated merchant.

`GET /v1/customers`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'email'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `email` | Optional | string |  |
| `sort_by` | Optional | string | Values: "name", "email", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customers-list.php)

#### customers.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customers->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### customers.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customers->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### customers.listAddresses

Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/customers/{customer_id}/addresses`

Call: `listAddresses(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listAddressesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/customers-listAddresses.php)

#### customers.listAddressesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customers->listAddressesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### customers.listAddressesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->customers->listAddressesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### customers.revokeSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Call: `revokeSessions(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokeSessionsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/customers-revokeSessions.php)


### customers.setDefaultAddress

Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default`

Call: `setDefaultAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`, `path1` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_for': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `setDefaultAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-setDefaultAddress.php)


### customers.update

Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected.

`PATCH /v1/customers/{customer_id}`

Call: `update(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array|object|null, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-update.php)


### customers.updateAddress

Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Call: `updateAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_id`, `path1` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'label'?: string, 'phone'?: string, 'recipient_name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/customers-updateAddress.php)


## Resource: customerSessions

### customerSessions.create

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Secret and refresh_token are returned only in this response. Flint-hosted merchants also receive a separately expiring one-time account_url.

`POST /v1/customer-sessions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'account_url_expires_in_seconds'?: string, 'customer_id': string, 'expires_in_seconds'?: string, 'refresh_expires_in_seconds'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/customerSessions-create.php)


### customerSessions.refresh

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family.

`POST /v1/customer-sessions/refresh`

Call: `refresh(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'refresh_token': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `refreshWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Required durable key for safe refresh retries. Reuse it with the same refresh token until a response is received..

[Example](examples/customerSessions-refresh.php)


### customerSessions.revoke

Revokes one customer session. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Call: `revoke(string|Model $customer_session_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_session_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_session_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/customerSessions-revoke.php)


## Resource: deliveryLocationSets

### deliveryLocationSets.create

Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-location-sets`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryLocationSets-create.php)


### deliveryLocationSets.get

Returns the current revision and lifecycle state for one delivery location set.

`GET /v1/delivery-location-sets/{delivery_location_set_id}`

Call: `get(string|Model $delivery_location_set_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_location_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_location_set_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryLocationSets-get.php)


### deliveryLocationSets.list

Returns delivery location sets in a stable, cursor-paginated order.

`GET /v1/delivery-location-sets`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: 255. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `status` | Optional | string | Values: "inactive", "active", "archived", "revoked". |
| `delivery_method_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryLocationSets-list.php)

#### deliveryLocationSets.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryLocationSets->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryLocationSets.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryLocationSets->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### deliveryLocationSets.remove

Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-location-sets/{delivery_location_set_id}`

Call: `remove(string|Model $delivery_location_set_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_location_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_location_set_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryLocationSets-remove.php)


### deliveryLocationSets.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-location-sets/{delivery_location_set_id}`

Call: `update(string|Model $delivery_location_set_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_location_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_location_set_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryLocationSets-update.php)


## Resource: deliveryMethods

### deliveryMethods.create

Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.

`POST /v1/delivery-methods`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryMethods-create.php)


### deliveryMethods.get

Returns the current revision and lifecycle state for one delivery method.

`GET /v1/delivery-methods/{delivery_method_id}`

Call: `get(string|Model $delivery_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_method_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryMethods-get.php)


### deliveryMethods.list

Returns delivery methods in a stable, cursor-paginated order.

`GET /v1/delivery-methods`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'type'?: string, 'delivery_zone_id'?: string, 'delivery_location_set_id'?: string, 'delivery_rate_callback_id'?: string, 'location_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: 255. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `status` | Optional | string | Values: "inactive", "active", "archived", "revoked". |
| `type` | Optional | string | Values: "shipment", "local_delivery", "pickup". |
| `delivery_zone_id` | Optional | string |  |
| `delivery_location_set_id` | Optional | string |  |
| `delivery_rate_callback_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryMethods-list.php)

#### deliveryMethods.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryMethods->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryMethods.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryMethods->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### deliveryMethods.remove

Retires the delivery method after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-methods/{delivery_method_id}`

Call: `remove(string|Model $delivery_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_method_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryMethods-remove.php)


### deliveryMethods.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-methods/{delivery_method_id}`

Call: `update(string|Model $delivery_method_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_method_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryMethods-update.php)


## Resource: deliveryPreviews

### deliveryPreviews.create

Computes exact display-only delivery outcomes without persisting a resource, holding inventory, or granting selection authority.

`POST /v1/delivery-previews`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'pickup_location_id'?: string, 'pricing_context'?: array{}}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryPreviews-create.php)


## Resource: deliveryProfiles

### deliveryProfiles.assignToUnconfigured

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Call: `assignToUnconfigured(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_profile_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_profile_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_catalog_default_version'?: string, 'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `assignToUnconfiguredWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryProfiles-assignToUnconfigured.php)


### deliveryProfiles.create

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryProfiles-create.php)


### deliveryProfiles.get

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Call: `get(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_profile_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_profile_id': string, 'include_diagnostics'?: bool, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `include_diagnostics` | Optional | boolean |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryProfiles-get.php)


### deliveryProfiles.list

Returns delivery profiles in a stable, cursor-paginated order.

`GET /v1/delivery-profiles`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'resolution_mode'?: string, 'include_diagnostics'?: bool, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: 255. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `status` | Optional | string | Values: "inactive", "active", "archived", "revoked". |
| `resolution_mode` | Optional | string | Values: "quote", "manual". |
| `include_diagnostics` | Optional | boolean |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryProfiles-list.php)

#### deliveryProfiles.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryProfiles->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryProfiles.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryProfiles->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### deliveryProfiles.remove

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Call: `remove(string|Model $delivery_profile_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_profile_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_profile_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryProfiles-remove.php)


### deliveryProfiles.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Call: `update(string|Model $delivery_profile_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_profile_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_profile_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_profile_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryProfiles-update.php)


## Resource: deliveryQuotes

### deliveryQuotes.list

Returns persisted delivery quote diagnostics in stable creation order.

`GET /v1/delivery-quotes`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'checkout_session_id'?: string, 'order_id'?: string, 'status'?: string, 'evaluation_status'?: string, 'created_after'?: string, 'created_before'?: string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `status` | Optional | string | Values: "active", "consumed", "stale", "expired", "revoked". |
| `evaluation_status` | Optional | string | Values: "complete", "incomplete", "degraded". |
| `created_after` | Optional | string |  |
| `created_before` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryQuotes-list.php)

#### deliveryQuotes.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryQuotes->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryQuotes.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryQuotes->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: deliveryRateCallbacks

### deliveryRateCallbacks.checkConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Call: `checkConnection(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `checkConnectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-checkConnection.php)


### deliveryRateCallbacks.create

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-create.php)


### deliveryRateCallbacks.createTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Call: `createTestDelivery(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `createTestDeliveryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-createTestDelivery.php)


### deliveryRateCallbacks.get

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Call: `get(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryRateCallbacks-get.php)


### deliveryRateCallbacks.list

Returns delivery rate callbacks in a stable, cursor-paginated order.

`GET /v1/delivery-rate-callbacks`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: 255. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `status` | Optional | string | Values: "inactive", "active", "archived", "revoked". |
| `delivery_method_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryRateCallbacks-list.php)

#### deliveryRateCallbacks.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryRateCallbacks->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryRateCallbacks.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryRateCallbacks->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### deliveryRateCallbacks.remove

Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Call: `remove(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-remove.php)


### deliveryRateCallbacks.rotateSigningKey

Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret once.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Call: `rotateSigningKey(string|Model $delivery_rate_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `rotateSigningKeyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-rotateSigningKey.php)


### deliveryRateCallbacks.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Call: `update(string|Model $delivery_rate_callback_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_rate_callback_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRateCallbacks-update.php)


## Resource: deliveryRevocations

### deliveryRevocations.get

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Call: `get(string|Model $delivery_revocation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_revocation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_revocation_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_revocation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryRevocations-get.php)


### deliveryRevocations.revokeDeliveryDependency

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Call: `revokeDeliveryDependency(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'merchant_note'?: string, 'reason': string, 'target': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `revokeDeliveryDependencyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryRevocations-revokeDeliveryDependency.php)


## Resource: deliveryZones

### deliveryZones.create

Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-zones`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed|mixed|mixed|mixed|mixed|mixed|mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryZones-create.php)


### deliveryZones.get

Returns the current revision and lifecycle state for one delivery zone.

`GET /v1/delivery-zones/{delivery_zone_id}`

Call: `get(string|Model $delivery_zone_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_zone_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_zone_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryZones-get.php)


### deliveryZones.list

Returns delivery zones in a stable, cursor-paginated order.

`GET /v1/delivery-zones`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string | maxLength: 255. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `status` | Optional | string | Values: "inactive", "active", "archived", "revoked". |
| `delivery_method_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/deliveryZones-list.php)

#### deliveryZones.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryZones->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### deliveryZones.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->deliveryZones->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### deliveryZones.remove

Retires the delivery zone after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-zones/{delivery_zone_id}`

Call: `remove(string|Model $delivery_zone_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_zone_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_zone_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryZones-remove.php)


### deliveryZones.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-zones/{delivery_zone_id}`

Call: `update(string|Model $delivery_zone_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `delivery_zone_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'delivery_zone_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/deliveryZones-update.php)


## Resource: demoSessions

### demoSessions.create

Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window.

`POST /v1/demo-sessions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Turnstile-Token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'template'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Turnstile-Token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/demoSessions-create.php)


### demoSessions.reset

Ends the caller's current demo sandbox (if any) and provisions a fresh one, returning a new temporary API key. Useful when the original one-time secret was lost. Subject to the same per-client daily limit as creation.

`POST /v1/demo-sessions/reset`

Call: `reset(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Turnstile-Token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'template'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Turnstile-Token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `resetWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/demoSessions-reset.php)


## Resource: developer

### developer.createPartnerApp

Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.

`POST /v1/developer/partner/apps`

Call: `createPartnerApp(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'app_type'?: string, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>, 'visibility'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createPartnerAppWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-createPartnerApp.php)


### developer.createSandbox

Creates a new test sandbox for the current merchant. Optionally seeds the new empty sandbox with the merchant's live defaults and issues a sandbox-bound test key as part of creation.

`POST /v1/developer/sandboxes`

Call: `createSandbox(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'issue_test_key'?: bool, 'name': string, 'scopes'?: list<string>, 'test_key_name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createSandboxWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-createSandbox.php)


### developer.deleteSandbox

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/developer/sandboxes/{sandbox_id}`

Call: `deleteSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `sandbox_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `sandbox_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteSandboxWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-deleteSandbox.php)


### developer.getAuthContext

Returns non-secret metadata for the authenticated API key, including its merchant, environment, sandbox binding, and granted scopes. A valid API key is required, but no additional API scope is required.

`GET /v1/developer/auth-context`

Call: `getAuthContext(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getAuthContextWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getAuthContext.php)


### developer.getCurrentAPIKeyRequestLog

Returns redacted request log detail for a request generated by the authenticated API key. Detail responses remain current-key scoped and redact headers, query parameters, request bodies, and response bodies before returning them.

`GET /v1/developer/request-logs/{api_request_log_id}`

Call: `getCurrentAPIKeyRequestLog(string|Model $api_request_log_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `api_request_log_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'api_request_log_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getCurrentAPIKeyRequestLogWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getCurrentAPIKeyRequestLog.php)


### developer.getPartnerApp

Returns a single partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}`

Call: `getPartnerApp(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPartnerAppWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getPartnerApp.php)


### developer.getPartnerAppInstall

Returns a single install for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}`

Call: `getPartnerAppInstall(string|Model $partner_app_id, string|Model $partner_app_install_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`, `path1` = `partner_app_install_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPartnerAppInstallWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getPartnerAppInstall.php)


### developer.getResourceTimeline

Returns summary-only API request, webhook event, and webhook delivery attempt entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type.

`GET /v1/developer/resource-timelines/{resource_id}`

Call: `getResourceTimeline(string|Model $resource_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `resource_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'resource_id': string, 'resource_type'?: string, 'include'?: list<string>, 'page_size'?: int, 'page_token'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string |  |
| `resource_type` | Optional | string |  |
| `include` | Optional | Array of string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `occurred_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getResourceTimelineWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getResourceTimeline.php)

#### developer.getResourceTimelineItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->getResourceTimelineItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### developer.getResourceTimelinePages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->getResourceTimelinePages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### developer.getSandbox

Returns a single sandbox by ID.

`GET /v1/developer/sandboxes/{sandbox_id}`

Call: `getSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `sandbox_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `sandbox_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getSandboxWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-getSandbox.php)


### developer.issueSandboxTestKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/developer/sandboxes/{sandbox_id}/test-key`

Call: `issueSandboxTestKey(string|Model $sandbox_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `sandbox_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string, 'body': array{'name': string, 'scopes'?: list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `sandbox_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `issueSandboxTestKeyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-issueSandboxTestKey.php)


### developer.listCurrentAPIKeyRequestLogs

Returns request log summaries generated by the authenticated API key. Results are always scoped to the calling key. Full request and response bodies are intentionally omitted from this public API surface to reduce the risk of sensitive data leakage.

`GET /v1/developer/request-logs`

Call: `listCurrentAPIKeyRequestLogs(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'request_id'?: string, 'http_method'?: string, 'path_query'?: string, 'resource_type'?: string, 'resource_id'?: string, 'status_bucket'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `request_id` | Optional | string |  |
| `http_method` | Optional | string |  |
| `path_query` | Optional | string |  |
| `resource_type` | Optional | string |  |
| `resource_id` | Optional | string |  |
| `status_bucket` | Optional | string | Values: "all", "success", "client_error", "server_error". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listCurrentAPIKeyRequestLogsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-listCurrentAPIKeyRequestLogs.php)

#### developer.listCurrentAPIKeyRequestLogsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listCurrentAPIKeyRequestLogsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### developer.listCurrentAPIKeyRequestLogsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listCurrentAPIKeyRequestLogsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### developer.listPartnerAppInstalls

Returns installs for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs`

Call: `listPartnerAppInstalls(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'partner_app_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPartnerAppInstallsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-listPartnerAppInstalls.php)

#### developer.listPartnerAppInstallsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listPartnerAppInstallsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### developer.listPartnerAppInstallsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listPartnerAppInstallsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### developer.listPartnerApps

Returns partner apps owned by the authenticated merchant.

`GET /v1/developer/partner/apps`

Call: `listPartnerApps(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPartnerAppsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-listPartnerApps.php)

#### developer.listPartnerAppsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listPartnerAppsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### developer.listPartnerAppsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listPartnerAppsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### developer.listSandboxes

Returns the merchant's sandboxes, including archived sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward.

`GET /v1/developer/sandboxes`

Call: `listSandboxes(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "archived", "all". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listSandboxesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/developer-listSandboxes.php)

#### developer.listSandboxesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listSandboxesItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### developer.listSandboxesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->developer->listSandboxesPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### developer.resetSandbox

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.

`POST /v1/developer/sandboxes/{sandbox_id}/reset`

Call: `resetSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `sandbox_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `sandbox_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resetSandboxWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-resetSandbox.php)


### developer.revokePartnerAppInstall

Revokes a partner app install and all of its environment grants.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Call: `revokePartnerAppInstall(string|Model $partner_app_id, string|Model $partner_app_install_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`, `path1` = `partner_app_install_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokePartnerAppInstallWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-revokePartnerAppInstall.php)


### developer.revokePartnerEnvironmentGrant

Revokes a single test or live environment grant for a partner app install.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Call: `revokePartnerEnvironmentGrant(string|Model $partner_app_id, string|Model $partner_app_install_id, string|Model $environment_grant_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`, `path1` = `partner_app_install_id`, `path2` = `environment_grant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'environment_grant_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `environment_grant_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokePartnerEnvironmentGrantWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-revokePartnerEnvironmentGrant.php)


### developer.rotatePartnerAppSecret

Rotates the client secret for a partner app owned by the authenticated merchant. The new client_secret is only returned once.

`POST /v1/developer/partner/apps/{partner_app_id}/rotate-secret`

Call: `rotatePartnerAppSecret(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `rotatePartnerAppSecretWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-rotatePartnerAppSecret.php)


### developer.updatePartnerApp

Updates the API version for a partner app owned by the authenticated merchant. Any supported version can be selected.

`PATCH /v1/developer/partner/apps/{partner_app_id}`

Call: `updatePartnerApp(string|Model $partner_app_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `partner_app_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'expected_api_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `partner_app_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updatePartnerAppWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/developer-updatePartnerApp.php)


## Resource: devices

### devices.create

Creates a device for the authenticated merchant. If hardware_fingerprint matches an existing device, the existing device is returned with 200 OK and data.already_existed=true.

`POST /v1/devices`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: array{}, 'name': string}}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/devices-create.php)


### devices.get

Returns a single device by ID.

`GET /v1/devices/{device_id}`

Call: `get(string|Model $device_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `device_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'device_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/devices-get.php)


### devices.list

Returns a paginated list of devices for the authenticated merchant.

`GET /v1/devices`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'location_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "deleted". |
| `location_id` | Optional | string |  |
| `sort_by` | Optional | string | Values: "name", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/devices-list.php)

#### devices.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->devices->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### devices.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->devices->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### devices.remove

Marks a device as deleted and returns its final state.

`DELETE /v1/devices/{device_id}`

Call: `remove(string|Model $device_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `device_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'device_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/devices-remove.php)


### devices.update

Applies a sparse update to a device. Send location_id=null to unassign a location.

`PATCH /v1/devices/{device_id}`

Call: `update(string|Model $device_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `device_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'device_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'location_id'?: string, 'metadata'?: array|object|null, 'name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/devices-update.php)


## Resource: disputes

### disputes.get

Returns one dispute by ID, with optional customer, order, and payment intent expansions.

`GET /v1/disputes/{dispute_id}`

Call: `get(string|Model $dispute_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `dispute_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'dispute_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/disputes-get.php)


### disputes.list

Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, and timing filters.

`GET /v1/disputes`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'status'?: string, 'reason'?: string, 'case_type'?: string, 'created_after'?: string, 'created_before'?: string, 'evidence_due_after'?: string, 'evidence_due_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `status` | Optional | string | Values: "warning_needs_response", "warning_under_review", "warning_closed", "needs_response", "under_review", "won", "lost", "prevented". |
| `reason` | Optional | string | Values: "bank_cannot_process", "check_returned", "credit_not_processed", "customer_initiated", "debit_not_authorized", "duplicate", "fraudulent", "general", "incorrect_account_details", "insufficient_funds", "noncompliant", "product_not_received", "product_unacceptable", "subscription_canceled", "unrecognized", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "other". |
| `case_type` | Optional | string | Values: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `evidence_due_after` | Optional | string | Format: date-time. |
| `evidence_due_before` | Optional | string | Format: date-time. |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/disputes-list.php)

#### disputes.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->disputes->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### disputes.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->disputes->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: feedbackReports

### feedbackReports.create

Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.

`POST /v1/feedback-reports`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | minLength: 1. maxLength: 255. |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted. Do not include personal information or secrets..

[Example](examples/feedbackReports-create.php)


### feedbackReports.get

Returns one immutable feedback report in the credential's merchant and environment.

`GET /v1/feedback-reports/{feedback_report_id}`

Call: `get(string|Model $feedback_report_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `feedback_report_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'feedback_report_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `feedback_report_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/feedbackReports-get.php)


### feedbackReports.list

Lists feedback reports in descending creation order for the credential's merchant and environment.

`GET /v1/feedback-reports`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/feedbackReports-list.php)

#### feedbackReports.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->feedbackReports->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### feedbackReports.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->feedbackReports->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: fraudWarnings

### fraudWarnings.get

Get an early fraud warning for the authenticated merchant environment.

`GET /v1/fraud-warnings/{fraud_warning_id}`

Call: `get(string|Model $fraud_warning_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `fraud_warning_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fraud_warning_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fraud_warning_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fraudWarnings-get.php)


### fraudWarnings.list

List early fraud warnings for the authenticated merchant environment.

`GET /v1/fraud-warnings`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'actionable'?: bool, 'payment_intent_id'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actionable` | Optional | boolean |  |
| `payment_intent_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fraudWarnings-list.php)

#### fraudWarnings.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fraudWarnings->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### fraudWarnings.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fraudWarnings->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: fulfillmentEvents

### fulfillmentEvents.get

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Call: `get(string|Model $fulfillment_event_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_event_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_event_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_event_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillmentEvents-get.php)


### fulfillmentEvents.list

Lists provider-neutral fulfillment events. Results default to newest received first.

`GET /v1/fulfillment-events`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id'?: string, 'shipment_id'?: string, 'package_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'event_type'?: string, 'external_system'?: string, 'external_event_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'sort_by'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |
| `package_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `event_type` | Optional | string | Values: "accepted", "preparing", "picked", "packed", "ready", "shipped", "dispatched", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "completed", "canceled", "failed", "no_show", "custom". |
| `external_system` | Optional | string |  |
| `external_event_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `occurred_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `sort_by` | Optional | string | Values: "received_at", "occurred_at". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillmentEvents-list.php)

#### fulfillmentEvents.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillmentEvents->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### fulfillmentEvents.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillmentEvents->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: fulfillmentNotifications

### fulfillmentNotifications.get

Retrieves one fulfillment notification audit record by ID.

`GET /v1/fulfillment-notifications/{fulfillment_notification_id}`

Call: `get(string|Model $fulfillment_notification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_notification_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_notification_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_notification_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillmentNotifications-get.php)


### fulfillmentNotifications.list

Returns persisted fulfillment notification audit records. Results default to newest created first.

`GET /v1/fulfillment-notifications`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id'?: string, 'order_id'?: string, 'fulfillment_event_id'?: string, 'page_size'?: int, 'page_token'?: string, 'channel'?: string, 'status'?: string, 'notification_type'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `fulfillment_event_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `channel` | Optional | string | Values: "email". |
| `status` | Optional | string | Values: "pending", "sent", "failed", "suppressed". |
| `notification_type` | Optional | string | Values: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered", "fulfillment_delivery_attempted", "fulfillment_dispatched", "fulfillment_exception", "fulfillment_failed", "fulfillment_in_transit", "fulfillment_no_show", "fulfillment_out_for_delivery", "fulfillment_ready", "fulfillment_returned", "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_in_transit", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped", "tracking_updated". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillmentNotifications-list.php)

#### fulfillmentNotifications.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillmentNotifications->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### fulfillmentNotifications.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillmentNotifications->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: fulfillments

### fulfillments.createEvent

Records an observational event for a fulfillment or one of its shipments or packages.

`POST /v1/fulfillments/{fulfillment_id}/events`

Call: `createEvent(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'custom_details'?: array{}, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string, 'package_id'?: string, 'shipment_id'?: string}}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createEventWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/fulfillments-createEvent.php)


### fulfillments.createShipment

Creates a shipment execution record under a shipment-type fulfillment. A shipment groups one carrier leg. Create one package under it for each physical parcel, including single-parcel shipments.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Call: `createShipment(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createShipmentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/fulfillments-createShipment.php)


### fulfillments.get

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Call: `get(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillments-get.php)


### fulfillments.list

Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/fulfillments`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'expand'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'type'?: string, 'location_id'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'sort_direction'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched". |
| `type` | Optional | string | Values: "shipment", "pickup", "local_delivery", "digital", "service". |
| `location_id` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/fulfillments-list.php)

#### fulfillments.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillments->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### fulfillments.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->fulfillments->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### fulfillments.transition

Performs one action from the fulfillment's supported_actions. Each action accepts only its action-specific fields. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/fulfillments/{fulfillment_id}/transitions`

Input: `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'completed_at'?: string, 'expected_version'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason': string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string, 'release_quantity': bool}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string, 'scheduled_end_at': string, 'scheduled_start_at': string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `transitionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/fulfillments-transition.php)


### fulfillments.update

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Call: `update(string|Model $fulfillment_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `fulfillment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/fulfillments-update.php)


## Resource: inventoryAdjustments

### inventoryAdjustments.create

Record a physical stock change as signed deltas. Returns the created adjustment, its movement IDs, and the resulting level for every level touched.

`POST /v1/inventory-adjustments`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_actor_id'?: string, 'lines': list<mixed>, 'note'?: string, 'occurred_at'?: string, 'reason': string, 'source_system'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryAdjustments-create.php)


### inventoryAdjustments.list

List inventory adjustments.

`GET /v1/inventory-adjustments`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'reason'?: string, 'idempotency_key'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `reason` | Optional | string | Values: "received_stock", "damage", "condition_changed", "theft", "loss", "manual_correction", "other". |
| `idempotency_key` | Optional | string |  |
| `source_system_type` | Optional | string | Values: "manual", "pos", "wms", "erp", "flint", "other". |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `occurred_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryAdjustments-list.php)

#### inventoryAdjustments.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryAdjustments->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryAdjustments.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryAdjustments->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: inventoryAllocationPolicies

### inventoryAllocationPolicies.create

Create an allocation policy with its routing configuration.

`POST /v1/inventory-allocation-policies`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryAllocationPolicies-create.php)


### inventoryAllocationPolicies.list

List inventory allocation policies.

`GET /v1/inventory-allocation-policies`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string | maxLength: 255. |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryAllocationPolicies-list.php)

#### inventoryAllocationPolicies.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryAllocationPolicies->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryAllocationPolicies.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryAllocationPolicies->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryAllocationPolicies.remove

Retire an allocation policy. keeps the archived resource available in list results.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Call: `remove(string|Model $inventory_allocation_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_allocation_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'inventory_allocation_policy_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Required | string |  |
| `expected_version` | Optional | integer | minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryAllocationPolicies-remove.php)


### inventoryAllocationPolicies.update

Update policy fields, availability, or atomically replace its routing configuration. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Call: `update(string|Model $inventory_allocation_policy_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_allocation_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_allocation_policy_id': string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_allocation_policy_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryAllocationPolicies-update.php)


## Resource: inventoryCounts

### inventoryCounts.apply

Apply a completed physical count to inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/apply`

Call: `apply(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_count_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_count_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `applyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryCounts-apply.php)


### inventoryCounts.cancel

Cancel an open physical count without changing inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/cancel`

Call: `cancel(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_count_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_count_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryCounts-cancel.php)


### inventoryCounts.create

Open a physical count for selected inventory items at one Location.

`POST /v1/inventory-counts`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'inventory_item_ids': list<string>, 'location_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryCounts-create.php)


### inventoryCounts.list

List inventory counts.

`GET /v1/inventory-counts`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'status'?: string, 'idempotency_key'?: string, 'created_after'?: string, 'created_before'?: string, 'applied_after'?: string, 'applied_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `status` | Optional | string | Values: "draft", "applied", "canceled". |
| `idempotency_key` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `applied_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `applied_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryCounts-list.php)

#### inventoryCounts.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryCounts->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryCounts.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryCounts->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryCounts.update

Replace a count's observations atomically. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-counts/{inventory_count_id}`

Call: `update(string|Model $inventory_count_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_count_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_count_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryCounts-update.php)


## Resource: inventoryItems

### inventoryItems.create

Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not required to be unique.

`POST /v1/inventory-items`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'sku'?: string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryItems-create.php)


### inventoryItems.list

List inventory items.

`GET /v1/inventory-items`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'sku'?: string, 'barcode'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `sku` | Optional | string |  |
| `barcode` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string | maxLength: 255. |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryItems-list.php)

#### inventoryItems.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryItems->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryItems.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryItems->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryItems.remove

Retire an inventory item. keeps the archived resource available in list results.

`DELETE /v1/inventory-items/{inventory_item_id}`

Call: `remove(string|Model $inventory_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'inventory_item_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_id` | Required | string |  |
| `expected_version` | Optional | integer | minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryItems-remove.php)


### inventoryItems.update

Update an inventory item. accepts status active or inactive. Send sku or barcode as null to clear.

`PATCH /v1/inventory-items/{inventory_item_id}`

Call: `update(string|Model $inventory_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_item_id': string, 'Flint-Version'?: string, 'body': array{'barcode'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'sku'?: string|null, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_item_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryItems-update.php)


## Resource: inventoryLevels

### inventoryLevels.list

List inventory levels. Levels are strongly consistent individually, but pages may reflect different committed instants.

`GET /v1/inventory-levels`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'has_available_quantity'?: bool, 'has_unavailable_condition'?: bool, 'has_shortage'?: bool, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `has_available_quantity` | Optional | boolean |  |
| `has_unavailable_condition` | Optional | boolean |  |
| `has_shortage` | Optional | boolean |  |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryLevels-list.php)

#### inventoryLevels.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryLevels->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryLevels.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryLevels->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryLevels.update

Set one inventory level's safety_stock_quantity. returns the updated level with durable command evidence.

`PATCH /v1/inventory-levels/{inventory_level_id}`

Call: `update(string|Model $inventory_level_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_level_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_level_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'safety_stock_quantity': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_level_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryLevels-update.php)


## Resource: inventoryMovements

### inventoryMovements.list

List inventory movements. Filter by idempotency_key to recover the movements a command produced.

`GET /v1/inventory-movements`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'type'?: string, 'reason'?: string, 'idempotency_key'?: string, 'return_id'?: string, 'return_disposition_id'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'source_reference_type'?: string, 'source_reference_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `location_id` | Optional | string |  |
| `type` | Optional | string |  |
| `reason` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_disposition_id` | Optional | string |  |
| `source_system_type` | Optional | string | Values: "manual", "pos", "wms", "erp", "flint", "other". |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `occurred_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `source_reference_type` | Optional | string |  |
| `source_reference_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryMovements-list.php)

#### inventoryMovements.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryMovements->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryMovements.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryMovements->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: inventoryReceipts

### inventoryReceipts.create

Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle.

`POST /v1/inventory-receipts`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_actor_id'?: string, 'lines': list<mixed>, 'occurred_at'?: string, 'source_system'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryReceipts-create.php)


### inventoryReceipts.list

List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns.

`GET /v1/inventory-receipts`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'receiving_location_id'?: string, 'inventory_reservation_id'?: string, 'return_id'?: string, 'return_disposition_id'?: string, 'idempotency_key'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `receiving_location_id` | Optional | string |  |
| `inventory_reservation_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_disposition_id` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `source_system_type` | Optional | string | Values: "manual", "pos", "wms", "erp", "flint", "other". |
| `external_source_id` | Optional | string |  |
| `external_actor_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `occurred_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryReceipts-list.php)

#### inventoryReceipts.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryReceipts->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryReceipts.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryReceipts->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: inventoryReservations

### inventoryReservations.commit

Move held quantity to committed. Lines carry cumulative targets, so resending an applied target is a successful no-op.

`POST /v1/inventory-reservations/{inventory_reservation_id}/commit`

Call: `commit(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_reservation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_reservation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `commitWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryReservations-commit.php)


### inventoryReservations.consume

Consume committed quantity, permanently removing it from stock. Cumulative targets; consumed quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/consume`

Call: `consume(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_reservation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string, 'source_system'?: mixed}}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_reservation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `consumeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryReservations-consume.php)


### inventoryReservations.create

Route standalone merchant demand and hold stock in one atomic command. A provisional hold lasts at most 15 minutes.

`POST /v1/inventory-reservations`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'assignments'?: list<mixed>, 'demands': list<mixed>, 'destination_fingerprint'?: string, 'inventory_routing_source': mixed, 'owner': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryReservations-create.php)


### inventoryReservations.list

List inventory reservations.

`GET /v1/inventory-reservations`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'owner_type'?: string, 'owner_key'?: string, 'idempotency_key'?: string, 'has_at_risk_quantity'?: bool, 'closed_reason'?: string, 'owner_expires_after'?: string, 'owner_expires_before'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "closed". |
| `owner_type` | Optional | string | Values: "merchant". |
| `owner_key` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `has_at_risk_quantity` | Optional | boolean |  |
| `closed_reason` | Optional | string | Values: "consumed", "released", "expired", "reallocated", "mixed". |
| `owner_expires_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `owner_expires_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryReservations-list.php)

#### inventoryReservations.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryReservations->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryReservations.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryReservations->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryReservations.release

Release held or committed quantity back to available. Cumulative targets; released quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/release`

Call: `release(string|Model $inventory_reservation_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_reservation_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_released_from_committed_quantity'?: string, 'target_released_from_held_quantity'?: string}>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_reservation_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `releaseWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryReservations-release.php)


## Resource: inventoryTransfers

### inventoryTransfers.create

Create a planned stock transfer between two Locations.

`POST /v1/inventory-transfers`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'destination_location_id': string, 'external_reference'?: string, 'lines': list<mixed>, 'note'?: string, 'origin_location_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryTransfers-create.php)


### inventoryTransfers.list

List inventory transfers.

`GET /v1/inventory-transfers`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'origin_location_id'?: string, 'destination_location_id'?: string, 'status'?: string, 'idempotency_key'?: string, 'external_reference'?: string, 'query'?: string, 'closed_reason'?: string, 'created_after'?: string, 'created_before'?: string, 'departed_after'?: string, 'departed_before'?: string, 'received_after'?: string, 'received_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `inventory_item_id` | Optional | string |  |
| `origin_location_id` | Optional | string |  |
| `destination_location_id` | Optional | string |  |
| `status` | Optional | string | Values: "draft", "in_transit", "partially_resolved", "closed". |
| `idempotency_key` | Optional | string |  |
| `external_reference` | Optional | string | maxLength: 255. |
| `query` | Optional | string | maxLength: 255. |
| `closed_reason` | Optional | string | Values: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `departed_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `departed_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `received_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `received_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/inventoryTransfers-list.php)

#### inventoryTransfers.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryTransfers->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### inventoryTransfers.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->inventoryTransfers->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### inventoryTransfers.transition

Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects.

`POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`

Input: `array{'Idempotency-Key'?: string, 'inventory_transfer_id': string, 'Flint-Version'?: string, 'body': array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<mixed|mixed>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': string}>, 'provenance': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_transfer_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `transitionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Retained for at least as long as this command's inventory effects.; scope: Endpoint-defined command identity. Required durable identity for this inventory command. The key is scoped to the authenticated merchant, environment, and endpoint; its fingerprint includes the canonical request body. Reuse it only for exact retries. Flint retains it for at least as long as the command's inventory effects, returns it in the response, and supports recovery through the relevant resource or movement list..

[Example](examples/inventoryTransfers-transition.php)


### inventoryTransfers.update

Update an open transfer's planning details.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Call: `update(string|Model $inventory_transfer_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `inventory_transfer_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'inventory_transfer_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference'?: string|null, 'line_changes'?: list<array{'inventory_item_id': string, 'operation': string, 'physical_condition'?: string, 'requested_quantity': string}|array{'inventory_transfer_line_id': string, 'operation': string, 'requested_quantity': string}|array{'inventory_transfer_line_id': string, 'operation': string}>, 'note'?: string|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `inventory_transfer_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/inventoryTransfers-update.php)


## Resource: invoicePaymentTerms

### invoicePaymentTerms.create

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'calculation': mixed, 'external_reference_id'?: string, 'late_fee_policy'?: mixed, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoicePaymentTerms-create.php)


### invoicePaymentTerms.get

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Call: `get(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_payment_term_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_payment_term_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoicePaymentTerms-get.php)


### invoicePaymentTerms.list

Returns a paginated list of invoice payment terms for the authenticated merchant.

`GET /v1/invoice-payment-terms`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoicePaymentTerms-list.php)

#### invoicePaymentTerms.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoicePaymentTerms->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### invoicePaymentTerms.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoicePaymentTerms->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### invoicePaymentTerms.remove

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Call: `remove(string|Model $invoice_payment_term_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_payment_term_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_payment_term_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `expected_version` | Optional | integer | Format: uint32. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoicePaymentTerms-remove.php)


### invoicePaymentTerms.update

Update invoice payment term for the authenticated merchant.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Call: `update(string|Model $invoice_payment_term_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_payment_term_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_payment_term_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'calculation'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: mixed|mixed|null, 'name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_payment_term_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoicePaymentTerms-update.php)


## Resource: invoices

### invoices.cancelPaymentAttempt

Cancels an active invoice payment attempt and its payment intent. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`

Call: `cancelPaymentAttempt(string|Model $invoice_id, string|Model $invoice_payment_attempt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`, `path1` = `invoice_payment_attempt_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'invoice_payment_attempt_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `invoice_payment_attempt_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `cancelPaymentAttemptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-cancelPaymentAttempt.php)


### invoices.collect

Charges the invoice's saved payment method or the supplied saved payment method. This command requires a caller-chosen Idempotency-Key that is reused for retries of the same collection request.

`POST /v1/invoices/{invoice_id}/collect`

Call: `collect(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'invoice_schedule_entry_id'?: string, 'payment_method_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `collectWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Caller-chosen idempotency key. Reuse it for retries of the same collection request..

[Example](examples/invoices-collect.php)


### invoices.create

Creates an invoice draft. Provide exactly one source: order_id for an order-backed draft, or quick_pay for a hidden backing-order draft.

`POST /v1/invoices`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}|array{}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-create.php)


### invoices.get

Returns a single invoice by ID.

`GET /v1/invoices/{invoice_id}`

Call: `get(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-get.php)


### invoices.getOrCreateCheckoutSession

Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/invoices/{invoice_id}/checkout-session`

Call: `getOrCreateCheckoutSession(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getOrCreateCheckoutSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-getOrCreateCheckoutSession.php)


### invoices.getPaymentAttempt

Returns one card or ACH collection attempt for the invoice.

`GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}`

Call: `getPaymentAttempt(string|Model $invoice_id, string|Model $invoice_payment_attempt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`, `path1` = `invoice_payment_attempt_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'invoice_payment_attempt_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `invoice_payment_attempt_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPaymentAttemptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-getPaymentAttempt.php)


### invoices.getPDF

Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/invoices/{invoice_id}/pdf`

Call: `getPDF(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-getPDF.php)


### invoices.issue

Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/issue`

Call: `issue(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'delivery_mode'?: string, 'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `issueWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-issue.php)


### invoices.list

Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/invoices`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'customer_id'?: string, 'order_id'?: string, 'external_reference_id'?: string, 'created_after'?: string, 'created_before'?: string, 'due_after'?: string, 'due_before'?: string, 'is_overdue'?: bool, 'has_amount_due'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". |
| `customer_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `due_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `due_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `is_overdue` | Optional | boolean |  |
| `has_amount_due` | Optional | boolean |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "due_at", "invoice_number", "outstanding_money". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-list.php)

#### invoices.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### invoices.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### invoices.listDeliveryAttempts

Returns email delivery attempts for send and reminder actions.

`GET /v1/invoices/{invoice_id}/delivery-attempts`

Call: `listDeliveryAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listDeliveryAttemptsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-listDeliveryAttempts.php)

#### invoices.listDeliveryAttemptsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listDeliveryAttemptsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### invoices.listDeliveryAttemptsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listDeliveryAttemptsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### invoices.listEvents

Returns the audit timeline for an invoice.

`GET /v1/invoices/{invoice_id}/events`

Call: `listEvents(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listEventsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-listEvents.php)

#### invoices.listEventsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listEventsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### invoices.listEventsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listEventsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### invoices.listPaymentAttempts

Lists card and ACH collection attempts for an invoice in reverse chronological order.

`GET /v1/invoices/{invoice_id}/payment-attempts`

Call: `listPaymentAttempts(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPaymentAttemptsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/invoices-listPaymentAttempts.php)

#### invoices.listPaymentAttemptsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listPaymentAttemptsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### invoices.listPaymentAttemptsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->invoices->listPaymentAttemptsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### invoices.markUncollectible

Closes the outstanding balance as a write-off and releases the order's invoice collection authority. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/mark-uncollectible`

Call: `markUncollectible(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `markUncollectibleWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-markUncollectible.php)


### invoices.pauseReminders

Stops the automatic reminder cadence on a collectible invoice and sets reminders_paused_at. Manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire.

`POST /v1/invoices/{invoice_id}/pause-reminders`

Call: `pauseReminders(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `pauseRemindersWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-pauseReminders.php)


### invoices.recordManualPayment

Applies an offline/manual payment to an issued invoice. Recording is rejected with INVOICE_PAYMENT_RESOLVING while an online payment is still resolving; an idle open checkout does not block. A payment that clears the balance invalidates the open checkout session. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments`

Call: `recordManualPayment(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'expected_version'?: string, 'external_reference_id'?: string, 'note'?: string, 'received_at'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `recordManualPaymentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-recordManualPayment.php)


### invoices.regeneratePublicLink

Revokes the current buyer-access link and all checkout credentials derived from it, then returns a new public_url. The current checkout session and its payment lineage are preserved. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/regenerate-public-link`

Call: `regeneratePublicLink(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `regeneratePublicLinkWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-regeneratePublicLink.php)


### invoices.resumeReminders

Clears reminders_paused_at so the invoice resumes its reminder cadence. Reminder times that passed while it was paused do not fire retroactively.

`POST /v1/invoices/{invoice_id}/resume-reminders`

Call: `resumeReminders(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `resumeRemindersWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-resumeReminders.php)


### invoices.reverseManualPayment

Reverses previously applied manual/offline payment amount from an invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments/reverse`

Call: `reverseManualPayment(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'expected_version'?: string, 'external_reference_id'?: string, 'note'?: string, 'received_at'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `reverseManualPaymentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-reverseManualPayment.php)


### invoices.sendReminder

Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/send-reminder`

Call: `sendReminder(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `sendReminderWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-sendReminder.php)


### invoices.update

Updates mutable fields on a draft invoice. Sent invoices are immutable except for delivery-related actions.

`PATCH /v1/invoices/{invoice_id}`

Call: `update(string|Model $invoice_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-update.php)


### invoices.voidResource

Voids an unpaid invoice so the associated order can be edited or collected again. An invoice with an issued credit note against it cannot be voided until that credit note is voided.

`POST /v1/invoices/{invoice_id}/void`

Call: `voidResource(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `voidResourceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/invoices-voidResource.php)


## Resource: locations

### locations.create

Create a Location. Including the inventory block also requires commerce.inventory_locations.write.

`POST /v1/locations`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: mixed, 'metadata'?: array{}, 'name': string, 'status'?: string, 'timezone': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/locations-create.php)


### locations.get

Get location.

`GET /v1/locations/{location_id}`

Call: `get(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `location_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'location_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/locations-get.php)


### locations.list

List Locations. Filtering by inventory_allocation_status requires commerce.inventory.read; the inventory block is omitted entirely when the caller lacks inventory read authority.

`GET /v1/locations`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'inventory_allocation_status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `inventory_allocation_status` | Optional | string | Values: "active", "inactive". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string | maxLength: 255. |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/locations-list.php)

#### locations.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->locations->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### locations.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->locations->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### locations.publishGeography

Publishes the location geography atomically. Supply the complete address and timezone; omitted coordinates are cleared. This PATCH does not merge nested address fields. Requires expected_geography_revision, independently of the location version used for metadata edits.

`PATCH /v1/locations/{location_id}/geography`

Call: `publishGeography(string|Model $location_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `location_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'expected_geography_revision': string, 'timezone': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `location_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `publishGeographyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/locations-publishGeography.php)


### locations.remove

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Call: `remove(string|Model $location_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `location_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'location_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string |  |
| `expected_version` | Optional | integer | minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/locations-remove.php)


### locations.update

Update a Location's profile or availability. Accepts status active or inactive.

`PATCH /v1/locations/{location_id}`

Call: `update(string|Model $location_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `location_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `location_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/locations-update.php)


### locations.updateInventory

Enable or disable inventory allocation at a Location. Omit expected_inventory_revision when enabling inventory for the first time; otherwise send the current inventory_revision.

`PATCH /v1/locations/{location_id}/inventory`

Call: `updateInventory(string|Model $location_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `location_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'allocation_status': string, 'expected_inventory_revision'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `location_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateInventoryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/locations-updateInventory.php)


## Resource: me

### me.cancelReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Call: `cancelReturn(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelReturnWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-cancelReturn.php)


### me.cancelSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Call: `cancelSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_immediately'?: bool}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-cancelSubscription.php)


### me.changeSubscriptionPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the subscription to an active payment method owned by the same customer.

`POST /v1/me/subscriptions/{subscription_id}/payment-method`

Call: `changeSubscriptionPaymentMethod(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `changeSubscriptionPaymentMethodWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-changeSubscriptionPaymentMethod.php)


### me.confirmEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Call: `confirmEmailChangeRequest(string|Model $email_change_request_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `email_change_request_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'email_change_request_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'current_email_code'?: string, 'new_email_code': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_change_request_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `confirmEmailChangeRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-confirmEmailChangeRequest.php)


### me.createAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/me/addresses`

Call: `createAddress(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createAddress.php)


### me.createDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/me/deletion-requests`

Call: `createDeletionRequest(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `createDeletionRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createDeletionRequest.php)


### me.createEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds.

`POST /v1/me/email-change-requests`

Call: `createEmailChangeRequest(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'new_email': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createEmailChangeRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createEmailChangeRequest.php)


### me.createInvoiceCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/me/invoices/{invoice_id}/checkout-session`

Call: `createInvoiceCheckoutSession(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `createInvoiceCheckoutSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createInvoiceCheckoutSession.php)


### me.createReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/me/returns`

Call: `createReturn(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'line_items': list<mixed>, 'metadata'?: array{}, 'order_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createReturnWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createReturn.php)


### me.createReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Call: `createReturnPreview(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createReturnPreviewWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-createReturnPreview.php)


### me.createReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/me/return-resolutions/{resolution_id}/checkout-session`

Call: `createReturnResolutionCheckoutSession(string|Model $resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `createReturnResolutionCheckoutSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-createReturnResolutionCheckoutSession.php)


### me.deleteAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/me/addresses/{customer_address_id}`

Call: `deleteAddress(string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-deleteAddress.php)


### me.get

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single customer by ID.

`GET /v1/me`

Call: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-get.php)


### me.getAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one saved address owned by the customer.

`GET /v1/me/addresses/{customer_address_id}`

Call: `getAddress(string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_address_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getAddress.php)


### me.getCreditNote

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Call: `getCreditNote(string|Model $invoice_id, string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`, `path1` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'credit_note_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `credit_note_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getCreditNoteWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getCreditNote.php)


### me.getCreditNotePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Call: `getCreditNotePDF(string|Model $invoice_id, string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`, `path1` = `credit_note_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'credit_note_id': string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `credit_note_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getCreditNotePDF.php)


### me.getDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current status of a tracked deletion request.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Call: `getDeletionRequest(string|Model $customer_deletion_request_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_deletion_request_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_deletion_request_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getDeletionRequestWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getDeletionRequest.php)


### me.getInvoice

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single invoice by ID.

`GET /v1/me/invoices/{invoice_id}`

Call: `getInvoice(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getInvoiceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getInvoice.php)


### me.getInvoicePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/me/invoices/{invoice_id}/pdf`

Call: `getInvoicePDF(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getInvoicePDF.php)


### me.getOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single order by ID.

`GET /v1/me/orders/{order_id}`

Call: `getOrder(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getOrderWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getOrder.php)


### me.getReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/me/returns/{return_id}`

Call: `getReturn(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getReturnWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getReturn.php)


### me.getSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single subscription by ID.

`GET /v1/me/subscriptions/{subscription_id}`

Call: `getSubscription(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-getSubscription.php)


### me.listAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/me/addresses`

Call: `listAddresses(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listAddressesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listAddresses.php)

#### me.listAddressesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listAddressesItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listAddressesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listAddressesPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listCreditNotes

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Call: `listCreditNotes(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listCreditNotesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`, `invoice`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listCreditNotes.php)

#### me.listCreditNotesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listCreditNotesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listCreditNotesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listCreditNotesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/me/fulfillments`

Call: `listFulfillments(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'type'?: string, 'location_id'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'sort_direction'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched". |
| `type` | Optional | string | Values: "shipment", "pickup", "local_delivery", "digital", "service". |
| `location_id` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listFulfillmentsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listFulfillments.php)

#### me.listFulfillmentsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listFulfillmentsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listFulfillmentsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listFulfillmentsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/me/invoices`

Call: `listInvoices(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'order_id'?: string, 'external_reference_id'?: string, 'created_after'?: string, 'created_before'?: string, 'due_after'?: string, 'due_before'?: string, 'is_overdue'?: bool, 'has_amount_due'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". |
| `order_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `due_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `due_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `is_overdue` | Optional | boolean |  |
| `has_amount_due` | Optional | boolean |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "due_at", "invoice_number", "outstanding_money". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listInvoicesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listInvoices.php)

#### me.listInvoicesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listInvoicesItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listInvoicesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listInvoicesPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/me/orders/{order_id}/activities`

Call: `listOrderActivities(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'type'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `type` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listOrderActivitiesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listOrderActivities.php)

#### me.listOrderActivitiesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listOrderActivitiesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listOrderActivitiesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listOrderActivitiesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of orders for the authenticated merchant.

`GET /v1/me/orders`

Call: `listOrders(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'payment_status'?: string, 'refund_status'?: string, 'fulfillment_status'?: list<string>, 'order_number'?: string, 'external_reference_id'?: string, 'origin'?: string, 'query'?: string, 'subscription_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "open", "closed". |
| `payment_status` | Optional | string | Values: "unpaid", "partially_paid", "paid". |
| `refund_status` | Optional | string | Values: "none", "partially_refunded", "refunded". |
| `fulfillment_status` | Optional | Array of string |  |
| `order_number` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `origin` | Optional | string | Values: "virtual_terminal", "payment_link", "checkout", "api", "subscription". |
| `query` | Optional | string |  |
| `subscription_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "outstanding_money", "total". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listOrdersWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listOrders.php)

#### me.listOrdersItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listOrdersItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listOrdersPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listOrdersPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listPackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists package records, newest created first.

`GET /v1/me/packages`

Call: `listPackages(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id'?: string, 'fulfillment_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPackagesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listPackages.php)

#### me.listPackagesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPackagesItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listPackagesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPackagesPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listPaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/me/payment-methods`

Call: `listPaymentMethods(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'type'?: string, 'status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `type` | Optional | string | Values: "card". |
| `status` | Optional | string | Values: "active", "pending", "expired", "removed", "failed". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPaymentMethodsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listPaymentMethods.php)

#### me.listPaymentMethodsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPaymentMethodsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listPaymentMethodsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPaymentMethodsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listPayments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/me/payments`

Call: `listPayments(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'invoice_id'?: string, 'status'?: string, 'origin'?: string, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'state'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `invoice_id` | Optional | string |  |
| `status` | Optional | string | Values: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". |
| `origin` | Optional | string | Values: "virtual_terminal", "payment_link", "checkout", "api", "subscription". |
| `risk_level` | Optional | Array of string |  |
| `payment_flow` | Optional | Array of string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `state` | Optional | string | Values: "with_refunds", "fully_refunded", "disputed", "needs_action". |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "amount". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPaymentsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listPayments.php)

#### me.listPaymentsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPaymentsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listPaymentsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listPaymentsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/me/refunds`

Call: `listRefunds(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'payment_intent_id'?: string, 'status'?: string, 'reason'?: list<string>, 'refund_method'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `payment_intent_id` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "in_transit", "succeeded", "failed", "requires_action", "canceled", "partially_succeeded". |
| `reason` | Optional | Array of string |  |
| `refund_method` | Optional | string | Values: "original_payment". |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "amount". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listRefundsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listRefunds.php)

#### me.listRefundsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listRefundsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listRefundsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listRefundsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/me/returns`

Call: `listReturns(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'created_after'?: string, 'created_before'?: string, 'decision_status'?: list<string>, 'external_reference_id'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>, 'resolution_type'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'work_type'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `decision_status` | Optional | Array of string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `merchandise_status` | Optional | Array of string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `receiving_location_id` | Optional | string |  |
| `resolution_status` | Optional | Array of string |  |
| `resolution_type` | Optional | Array of string |  |
| `return_number` | Optional | string |  |
| `return_reason_id` | Optional | string |  |
| `status` | Optional | Array of string |  |
| `updated_after` | Optional | string | Format: date-time. |
| `updated_before` | Optional | string | Format: date-time. |
| `work_type` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listReturnsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listReturns.php)

#### me.listReturnsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listReturnsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listReturnsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listReturnsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipment execution records, newest created first.

`GET /v1/me/shipments`

Call: `listShipments(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id'?: string, 'fulfillment_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'return_id'?: string, 'handed_off_after'?: string, 'handed_off_before'?: string, 'created_after'?: string, 'created_before'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `return_id` | Optional | string |  |
| `handed_off_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `handed_off_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listShipmentsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listShipments.php)

#### me.listShipmentsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listShipmentsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listShipmentsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listShipmentsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.listSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/me/subscriptions`

Call: `listSubscriptions(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'billing_schedule_owner'?: string, 'awaiting_billing_schedule'?: bool, 'plan_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'next_billing_at_after'?: string, 'next_billing_at_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "trialing", "active", "paused", "past_due", "canceled", "incomplete". |
| `billing_schedule_owner` | Optional | string | Values: "flint", "external". |
| `awaiting_billing_schedule` | Optional | boolean |  |
| `plan_id` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "next_billing_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `next_billing_at_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `next_billing_at_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listSubscriptionsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/me-listSubscriptions.php)

#### me.listSubscriptionsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listSubscriptionsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### me.listSubscriptionsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
foreach ($client->me->listSubscriptionsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### me.pauseSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Call: `pauseSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'pause_duration_cycles'?: int}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `pauseSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-pauseSubscription.php)


### me.reactivateSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/me/subscriptions/{subscription_id}/reactivate`

Call: `reactivateSubscription(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `reactivateSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-reactivateSubscription.php)


### me.removePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Call: `removePaymentMethod(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removePaymentMethodWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-removePaymentMethod.php)


### me.resendOrderReceipt

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/me/orders/{order_id}/receipt`

Call: `resendOrderReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resendOrderReceiptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-resendOrderReceipt.php)


### me.resumeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Resumes a paused subscription.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Call: `resumeSubscription(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resumeSubscriptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-resumeSubscription.php)


### me.savePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/me/payment-methods`

Call: `savePaymentMethod(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_type'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `savePaymentMethodWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-savePaymentMethod.php)


### me.setDefaultAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/me/addresses/{customer_address_id}/set-default`

Call: `setDefaultAddress(string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_for': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `setDefaultAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-setDefaultAddress.php)


### me.setDefaultPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the default payment method for the payment method's owning customer.

`POST /v1/me/payment-methods/{payment_method_id}/set-default`

Call: `setDefaultPaymentMethod(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `setDefaultPaymentMethodWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-setDefaultPaymentMethod.php)


### me.update

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Call: `update(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'name'?: string, 'phone'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-update.php)


### me.updateAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/me/addresses/{customer_address_id}`

Call: `updateAddress(string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `customer_address_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'label'?: string, 'phone'?: string, 'recipient_name'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateAddressWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `customer`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/me-updateAddress.php)


## Resource: merchantAccountSessions

### merchantAccountSessions.create

Creates an embedded browser handoff for one or more allowlisted account components.

`POST /v1/merchant-account-sessions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'sandbox_id'?: string, 'targeted_requirement_ids'?: list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object | Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Successful repeated requests mint a fresh launch session; prior client secrets are not replayed.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Completed retries create a fresh launch session instead of replaying a prior client secret..

[Example](examples/merchantAccountSessions-create.php)


### merchantAccountSessions.refresh

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant.

`POST /v1/merchant-account-sessions/refresh`

Call: `refresh(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'launch_token': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object | Refreshes a merchant account session from its signed launch token. No create fields are accepted. |

Returns the payload at `data` directly. Use `refreshWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/merchantAccountSessions-refresh.php)


## Resource: merchantBillingBalances

### merchantBillingBalances.get

Returns what the merchant currently owes Flint and owns as account credit in one currency.

`GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`

Call: `get(string|Model $merchant_billing_balance_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `merchant_billing_balance_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'merchant_billing_balance_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_billing_balance_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/merchantBillingBalances-get.php)


### merchantBillingBalances.list

Returns what the merchant currently owes Flint and owns as account credit by currency.

`GET /v1/merchant-billing-balances`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/merchantBillingBalances-list.php)

#### merchantBillingBalances.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->merchantBillingBalances->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### merchantBillingBalances.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->merchantBillingBalances->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: merchants

### merchants.get

Returns the authenticated merchant by ID.

`GET /v1/merchants/{merchant_id}`

Call: `get(string|Model $merchant_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `merchant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'merchant_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/merchants-get.php)


### merchants.update

Applies a sparse update to the authenticated merchant's public business profile fields.

`PATCH /v1/merchants/{merchant_id}`

Call: `update(string|Model $merchant_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `merchant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'merchant_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'api_version'?: string, 'email'?: string, 'expected_version'?: string, 'logo'?: mixed, 'metadata'?: array|object|null, 'organization_id'?: string, 'phone'?: string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'website_url'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/merchants-update.php)


## Resource: merchantSubscriptionInvoices

### merchantSubscriptionInvoices.get

Returns one invoice issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices/{merchant_subscription_invoice_id}`

Call: `get(string|Model $merchant_subscription_invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `merchant_subscription_invoice_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'merchant_subscription_invoice_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_subscription_invoice_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/merchantSubscriptionInvoices-get.php)


### merchantSubscriptionInvoices.list

Returns invoices issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/merchantSubscriptionInvoices-list.php)

#### merchantSubscriptionInvoices.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->merchantSubscriptionInvoices->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### merchantSubscriptionInvoices.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->merchantSubscriptionInvoices->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: modifierGroups

### modifierGroups.create

Create modifier group.

`POST /v1/modifier-groups`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'metadata'?: array{}, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_type'?: string, 'modifiers'?: list<mixed>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierGroups-create.php)


### modifierGroups.get

Get modifier group.

`GET /v1/modifier-groups/{modifier_group_id}`

Call: `get(string|Model $modifier_group_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_group_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_group_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/modifierGroups-get.php)


### modifierGroups.list

List modifier groups.

`GET /v1/modifier-groups`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'modifier_group_type'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `modifier_group_type` | Optional | string | Values: "list", "text". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/modifierGroups-list.php)

#### modifierGroups.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->modifierGroups->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### modifierGroups.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->modifierGroups->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### modifierGroups.remove

Retire modifier group.

`DELETE /v1/modifier-groups/{modifier_group_id}`

Call: `remove(string|Model $modifier_group_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_group_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_group_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierGroups-remove.php)


### modifierGroups.update

Update modifier group.

`PATCH /v1/modifier-groups/{modifier_group_id}`

Call: `update(string|Model $modifier_group_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_group_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_group_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierGroups-update.php)


## Resource: modifierSets

### modifierSets.create

Create modifier set.

`POST /v1/modifier-sets`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array{}, 'modifier_groups'?: list<mixed>, 'name': string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierSets-create.php)


### modifierSets.get

Get modifier set.

`GET /v1/modifier-sets/{modifier_set_id}`

Call: `get(string|Model $modifier_set_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_set_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/modifierSets-get.php)


### modifierSets.list

List modifier sets.

`GET /v1/modifier-sets`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/modifierSets-list.php)

#### modifierSets.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->modifierSets->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### modifierSets.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->modifierSets->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### modifierSets.remove

Retire modifier set.

`DELETE /v1/modifier-sets/{modifier_set_id}`

Call: `remove(string|Model $modifier_set_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_set_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierSets-remove.php)


### modifierSets.update

Update modifier set.

`PATCH /v1/modifier-sets/{modifier_set_id}`

Call: `update(string|Model $modifier_set_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `modifier_set_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'modifier_set_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/modifierSets-update.php)


## Resource: oauth

### oauth.authorizePartnerInstall

Authenticates the merchant in Flint, validates the requested partner app install, and redirects back to the partner's redirect_uri with an authorization code.

`GET /v1/oauth/authorize`

Call: `authorizePartnerInstall(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'response_type': string, 'client_id': string, 'redirect_uri': string, 'mode': string, 'permission_ids'?: string, 'environment_id'?: string, 'merchant_id'?: string, 'state': string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `response_type` | Required | string | Values: "code". |
| `client_id` | Required | string |  |
| `redirect_uri` | Required | string |  |
| `mode` | Required | string | Values: "test", "live". |
| `permission_ids` | Optional | string |  |
| `environment_id` | Optional | string |  |
| `merchant_id` | Optional | string |  |
| `state` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `merchant`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/oauth-authorizePartnerInstall.php)


### oauth.exchangePartnerInstallToken

Exchanges an authorization code or refresh token for an installation-scoped bearer token. This endpoint follows OAuth token endpoint conventions: it accepts application/x-www-form-urlencoded requests as well as JSON and returns OAuth token error objects for token exchange failures instead of the normal Flint error envelope.

`POST /v1/oauth/token`

Call: `exchangePartnerInstallToken(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string, 'body': array{'client_id': string, 'client_secret': string, 'code'?: string, 'grant_type': string, 'redirect_uri'?: string, 'refresh_token'?: string}}`

Returned payload: `OauthExchangePartnerInstallTokenResponse200`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the complete decoded body directly. Use `exchangePartnerInstallTokenWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/oauth-exchangePartnerInstallToken.php)


### oauth.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen.

`GET /v1/oauth/authorize/preview`

Call: `previewPartnerInstallAuthorization(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'client_id': string, 'redirect_uri': string, 'mode': string, 'permission_ids'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string |  |
| `redirect_uri` | Required | string |  |
| `mode` | Required | string | Values: "test", "live". |
| `permission_ids` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `previewPartnerInstallAuthorizationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/oauth-previewPartnerInstallAuthorization.php)


## Resource: onboarding

### onboarding.advance

Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements.

`POST /v1/onboarding/advance`

Input: `array{'sandbox_id'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>|list<string>, 'sandbox_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Optional | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `advanceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/onboarding-advance.php)


### onboarding.createAPIKey

Creates the first long-lived external API key and exits onboarding.

`POST /v1/onboarding/api-key`

Call: `createAPIKey(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'name': string, 'sandbox_id'?: string, 'scopes'?: list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createAPIKeyWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/onboarding-createAPIKey.php)


### onboarding.getState

Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only.

`GET /v1/onboarding/state`

Call: `getState(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'sandbox_id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getStateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `onboarding`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/onboarding-getState.php)


### onboarding.startFlow

Starts the consolidated onboarding flow by emailing a short-lived verification code and returning a temporary verification token.

`POST /v1/onboarding/start`

Call: `startFlow(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'email': string, 'first_name': string, 'last_name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `startFlowWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/onboarding-startFlow.php)


### onboarding.verifyEmailCode

Verifies the emailed code, provisions the Flint user and merchant if needed, and returns a short-lived session token for the rest of onboarding.

`POST /v1/onboarding/verify-email`

Call: `verifyEmailCode(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `verifyEmailCodeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/onboarding-verifyEmailCode.php)


## Resource: orders

### orders.addCharge

Adds a service charge, fee, or surcharge to an order.

`POST /v1/orders/{order_id}/charges`

Call: `addCharge(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'charge': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `addChargeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-addCharge.php)


### orders.addLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Call: `addLineItems(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'line_items': list<mixed>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `addLineItemsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-addLineItems.php)


### orders.applyDiscount

Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.

`POST /v1/orders/{order_id}/discounts`

Call: `applyDiscount(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `applyDiscountWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-applyDiscount.php)


### orders.cancelPayment

Cancels an unsettled order-owned payment leg. A leg in an active payment attempt requires the matching payment_attempt_id. Canceling an authorization releases the payment lock and attempt-owned holds; a staged or declined leg with no active attempt can be canceled without an attempt ID.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/cancel`

Call: `cancelPayment(string|Model $order_id, string|Model $payment_intent_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'cancellation_reason'?: string, 'payment_attempt_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `cancelPaymentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-cancelPayment.php)


### orders.cancelPaymentAttempt

Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.

`POST /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}/cancel`

Call: `cancelPaymentAttempt(string|Model $order_id, string|Model $payment_attempt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `payment_attempt_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'payment_attempt_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'cancellation_reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `payment_attempt_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `cancelPaymentAttemptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-cancelPaymentAttempt.php)


### orders.capturePayment

Captures an active payment authorization for an order and updates the order payment lifecycle.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/capture`

Call: `capturePayment(string|Model $order_id, string|Model $payment_intent_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'amount_money'?: mixed, 'payment_attempt_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `capturePaymentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-capturePayment.php)


### orders.closeSession

Closes an eligible open, paid, or partially refunded order. Closing cancels pending discounts, releases pending promotion reservations, and recalculates totals from the current surviving pricing economics; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Closing is blocked while payment collection is in progress.

`POST /v1/orders/{order_id}/close`

Call: `closeSession(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `closeSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-closeSession.php)


### orders.create

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}, 'discounts'?: list<mixed>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'metadata'?: array{}, 'requested_tip'?: mixed|mixed, 'tax'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-create.php)


### orders.createFulfillment

Creates an explicit fulfillment for an order.

`POST /v1/orders/{order_id}/fulfillments`

Call: `createFulfillment(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. |

Returns the payload at `data` directly. Use `createFulfillmentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-createFulfillment.php)


### orders.createPaymentIntent

Creates an immutable payment leg owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.

`POST /v1/orders/{order_id}/payment-intents`

Call: `createPaymentIntent(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createPaymentIntentWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-createPaymentIntent.php)


### orders.deleteCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Call: `deleteCharge(string|Model $order_id, string|Model $order_charge_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `order_charge_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'order_charge_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteChargeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-deleteCharge.php)


### orders.deleteLineItem

Removes a single line item from an order.

`DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`

Call: `deleteLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `order_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'order_line_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-deleteLineItem.php)


### orders.get

Returns a single order by ID.

`GET /v1/orders/{order_id}`

Call: `get(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-get.php)


### orders.getCurrentDeliverySelection

Returns the delivery selection committed to an order.

`GET /v1/orders/{order_id}/delivery-selections/current`

Call: `getCurrentDeliverySelection(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getCurrentDeliverySelectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-getCurrentDeliverySelection.php)


### orders.getPaymentAttempt

Returns one durable payment attempt for the order. Checkout-session callers can read only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}`

Call: `getPaymentAttempt(string|Model $order_id, string|Model $payment_attempt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `payment_attempt_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'payment_attempt_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `payment_attempt_id` | Required | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPaymentAttemptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-getPaymentAttempt.php)


### orders.list

Returns a paginated list of orders for the authenticated merchant.

`GET /v1/orders`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'customer_id'?: string, 'status'?: string, 'payment_status'?: string, 'refund_status'?: string, 'fulfillment_status'?: list<string>, 'order_number'?: string, 'external_reference_id'?: string, 'origin'?: string, 'query'?: string, 'subscription_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `status` | Optional | string | Values: "open", "closed". |
| `payment_status` | Optional | string | Values: "unpaid", "partially_paid", "paid". |
| `refund_status` | Optional | string | Values: "none", "partially_refunded", "refunded". |
| `fulfillment_status` | Optional | Array of string |  |
| `order_number` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `origin` | Optional | string | Values: "virtual_terminal", "payment_link", "checkout", "api", "subscription". |
| `query` | Optional | string |  |
| `subscription_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "outstanding_money", "total". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-list.php)

#### orders.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### orders.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### orders.listActivities

Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/orders/{order_id}/activities`

Call: `listActivities(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'type'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `type` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listActivitiesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-listActivities.php)

#### orders.listActivitiesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listActivitiesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### orders.listActivitiesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listActivitiesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### orders.listPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts`

Call: `listPaymentAttempts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPaymentAttemptsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-listPaymentAttempts.php)

#### orders.listPaymentAttemptsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listPaymentAttemptsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### orders.listPaymentAttemptsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->orders->listPaymentAttemptsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### orders.pay

Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To resume, send action: resume with payment_attempt_id, or replay the exact original request with the same Idempotency-Key while the attempt is open. Payment intents with manual capture return an active authorization instead of settling immediately.

`POST /v1/orders/{order_id}/pay`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'payment_source'?: mixed}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'payment_intents': list<mixed>}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'setup_payment_source': array{'token': string}}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'payment_attempt_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `payWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-pay.php)


### orders.previewDiscounts

Evaluates promotion outcomes for an order without mutating it. Merchant-authenticated callers may include a promotion by promotion_id or promotion_code; checkout-authenticated buyers must provide a code. The response includes applied, skipped, and single-threshold available promotion candidates.

`POST /v1/orders/{order_id}/discounts/preview`

Call: `previewDiscounts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'discount'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `previewDiscountsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/orders-previewDiscounts.php)


### orders.removeDiscounts

Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are settlement history and cannot be removed.

`POST /v1/orders/{order_id}/discounts/remove`

Call: `removeDiscounts(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'order_discount_ids': list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `removeDiscountsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-removeDiscounts.php)


### orders.repriceDiscounts

Recalculates pending discounts and automatic promotions for a mutable order.

`POST /v1/orders/{order_id}/discounts/reprice`

Call: `repriceDiscounts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `repriceDiscountsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-repriceDiscounts.php)


### orders.resendReceipt

Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/orders/{order_id}/receipt`

Call: `resendReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resendReceiptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-resendReceipt.php)


### orders.resolveInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/inventory-exception/resolve`

Call: `resolveInventoryException(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `resolveInventoryExceptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-resolveInventoryException.php)


### orders.update

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. Send requested_tip: null to clear the current requested tip.

`PATCH /v1/orders/{order_id}`

Call: `update(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|null, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'metadata'?: array|object|null, 'requested_tip'?: mixed|mixed|null, 'tax'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-update.php)


### orders.updateCharge

Updates a single service charge, fee, or surcharge on an order.

`PATCH /v1/orders/{order_id}/charges/{order_charge_id}`

Call: `updateCharge(string|Model $order_id, string|Model $order_charge_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `order_charge_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'order_charge_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: array|object|null, 'name'?: string, 'percent'?: string, 'tax'?: mixed, 'type'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateChargeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-updateCharge.php)


### orders.updateLineItem

Updates a single line item on an order.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Call: `updateLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `order_id`, `path1` = `order_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id': string, 'order_line_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/orders-updateLineItem.php)


## Resource: organizations

### organizations.create

Creates a child organization within the caller's accessible organization hierarchy.

`POST /v1/organizations`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array{}, 'name': string, 'parent_organization_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-create.php)


### organizations.get

Returns an accessible organization by ID.

`GET /v1/organizations/{organization_id}`

Call: `get(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/organizations-get.php)


### organizations.grantMembership

Adds or updates a direct organization membership for a user.

`POST /v1/organizations/{organization_id}/memberships`

Call: `grantMembership(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'role': string, 'user_id': string}}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `grantMembershipWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-grantMembership.php)


### organizations.list

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys.

`GET /v1/organizations`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'parent_organization_id'?: string, 'status'?: string, 'page_size'?: int, 'page_token'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `parent_organization_id` | Optional | string |  |
| `status` | Optional | string | Values: "active", "deleted". |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Values: "name", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/organizations-list.php)

#### organizations.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->organizations->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### organizations.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->organizations->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### organizations.listMemberships

Returns the direct memberships for an organization.

`GET /v1/organizations/{organization_id}/memberships`

Call: `listMemberships(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listMembershipsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/organizations-listMemberships.php)

#### organizations.listMembershipsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->organizations->listMembershipsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### organizations.listMembershipsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->organizations->listMembershipsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### organizations.remove

Soft-deletes an organization when it has no active descendants or merchant links.

`DELETE /v1/organizations/{organization_id}`

Call: `remove(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-remove.php)


### organizations.revokeMembership

Revokes a direct organization membership for a user.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Call: `revokeMembership(string|Model $organization_id, string|Model $user_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`, `path1` = `user_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'user_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `user_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `revokeMembershipWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-revokeMembership.php)


### organizations.transferOwnership

Transfers the organization owner role to another user.

`POST /v1/organizations/{organization_id}/transfer-ownership`

Call: `transferOwnership(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'new_owner_user_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `transferOwnershipWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-transferOwnership.php)


### organizations.update

Applies a sparse update to an accessible organization.

`PATCH /v1/organizations/{organization_id}`

Call: `update(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `organization_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null, 'name'?: string, 'parent_organization_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/organizations-update.php)


## Resource: packages

### packages.createItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Call: `createItem(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array{}, 'order_line_item_id': string, 'quantity': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-createItem.php)


### packages.deleteItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Call: `deleteItem(string|Model $package_id, string|Model $package_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`, `path1` = `package_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'package_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-deleteItem.php)


### packages.get

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Call: `get(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/packages-get.php)


### packages.getItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Call: `getItem(string|Model $package_id, string|Model $package_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`, `path1` = `package_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'package_item_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/packages-getItem.php)


### packages.list

Lists package records, newest created first.

`GET /v1/packages`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id'?: string, 'fulfillment_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/packages-list.php)

#### packages.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->packages->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### packages.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->packages->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### packages.listPackageItems

Lists order line quantities contained in packages.

`GET /v1/packages/{package_id}/items`

Call: `listPackageItems(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPackageItemsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/packages-listPackageItems.php)

#### packages.listPackageItemsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->packages->listPackageItemsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### packages.listPackageItemsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->packages->listPackageItemsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### packages.transition

Performs one action from the package's supported_actions. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/transitions`

Input: `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `transitionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-transition.php)


### packages.update

Updates non-lifecycle package fields such as carrier, tracking, label access, measurements, metadata, and caller-owned external references. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/packages/{package_id}`

Call: `update(string|Model $package_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string|null, 'dimensions'?: array{'height': string, 'length': string, 'unit': string, 'width': string}|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array|object|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': string}|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-update.php)


### packages.updateItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Call: `updateItem(string|Model $package_id, string|Model $package_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`, `path1` = `package_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'package_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null, 'quantity'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-updateItem.php)


### packages.voidResource

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/void`

Call: `voidResource(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `package_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `voidResourceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/packages-voidResource.php)


## Resource: paymentIntents

### paymentIntents.cancel

Cancels a standalone payment intent before it reaches a terminal settled state. Order-owned payment intents use the attempt-aware order cancellation route.

`POST /v1/payment-intents/{payment_intent_id}/cancel`

Call: `cancel(string|Model $payment_intent_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancellation_reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentIntents-cancel.php)


### paymentIntents.capture

Captures an authorized standalone payment intent, including partial captures when supported. Order-owned payment intents use the attempt-aware order capture route.

`POST /v1/payment-intents/{payment_intent_id}/capture`

Call: `capture(string|Model $payment_intent_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `captureWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentIntents-capture.php)


### paymentIntents.confirm

Confirms a standalone payment intent. Order-owned payment intents reject this route and must be confirmed through POST /v1/orders/{order_id}/pay.

`POST /v1/payment-intents/{payment_intent_id}/confirm`

Call: `confirm(string|Model $payment_intent_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'confirmation_token'?: string, 'payment_method_id'?: string, 'payment_source_token'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `confirmWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentIntents-confirm.php)


### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

`POST /v1/payment-intents`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed&mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentIntents-create.php)


### paymentIntents.get

Returns a single payment intent by ID.

`GET /v1/payment-intents/{payment_intent_id}`

Call: `get(string|Model $payment_intent_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id': string, 'expand'?: list<string>, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentIntents-get.php)


### paymentIntents.list

Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/payment-intents`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'customer_id'?: string, 'invoice_id'?: string, 'status'?: string, 'origin'?: string, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'state'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `invoice_id` | Optional | string |  |
| `status` | Optional | string | Values: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". |
| `origin` | Optional | string | Values: "virtual_terminal", "payment_link", "checkout", "api", "subscription". |
| `risk_level` | Optional | Array of string |  |
| `payment_flow` | Optional | Array of string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `state` | Optional | string | Values: "with_refunds", "fully_refunded", "disputed", "needs_action". |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "amount". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentIntents-list.php)

#### paymentIntents.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentIntents->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### paymentIntents.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentIntents->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### paymentIntents.update

Applies a sparse update to a payment intent before it reaches a terminal state.

`PATCH /v1/payment-intents/{payment_intent_id}`

Call: `update(string|Model $payment_intent_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_intent_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'customer_id'?: string, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'receipt_email'?: string, 'tip_money'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentIntents-update.php)


## Resource: paymentLinks

### paymentLinks.create

Creates a payment link for the authenticated merchant. Line items may use fixed prices, buyer-adjustable amounts, and buyer-adjustable quantities.

`POST /v1/payment-links`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'metadata'?: array{}, 'name': string, 'payment_link_type'?: string, 'payments'?: mixed, 'plan_id'?: string, 'promotion_config'?: mixed, 'redirects'?: mixed, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentLinks-create.php)


### paymentLinks.get

Returns a single payment link by ID.

`GET /v1/payment-links/{payment_link_id}`

Call: `get(string|Model $payment_link_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_link_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_link_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentLinks-get.php)


### paymentLinks.getPublic

Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for this browser operation.

`GET /v1/payment-links/{payment_link_id}/public`

Call: `getPublic(string|Model $payment_link_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_link_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_link_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPublicWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentLinks-getPublic.php)


### paymentLinks.list

Returns a paginated list of payment links for the authenticated merchant.

`GET /v1/payment-links`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'payment_link_type'?: string, 'has_plan'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `payment_link_type` | Optional | string | Values: "standard", "donation", "event". |
| `has_plan` | Optional | boolean |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentLinks-list.php)

#### paymentLinks.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentLinks->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### paymentLinks.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentLinks->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### paymentLinks.resolve

Creates a buyer checkout session from an active payment link. Catalog-backed modifier availability is frozen onto the checkout session and selected modifiers are resolved onto the backing order.

`POST /v1/payment-links/{payment_link_id}/resolve`

Call: `resolve(string|Model $payment_link_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_link_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_link_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'custom_field_values'?: array{}, 'modifiers'?: array{}, 'quantity_overrides'?: array{}, 'resolution_context': string, 'unit_price_overrides'?: array{}}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `resolveWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Required idempotency key. Reuse it with the same resolution_context for uncertain retries..

[Example](examples/paymentLinks-resolve.php)


### paymentLinks.update

Updates a payment link. To replace line items, custom fields, or delivery methods, send the complete array with `expected_version`.

`PATCH /v1/payment-links/{payment_link_id}`

Call: `update(string|Model $payment_link_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_link_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_link_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentLinks-update.php)


## Resource: paymentMethodDomains

### paymentMethodDomains.create

Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.

`POST /v1/payment-method-domains`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'domain_name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/paymentMethodDomains-create.php)


### paymentMethodDomains.get

Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.

`GET /v1/payment-method-domains/{payment_method_domain_id}`

Call: `get(string|Model $payment_method_domain_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_domain_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_domain_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentMethodDomains-get.php)


### paymentMethodDomains.list

Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched.

`GET /v1/payment-method-domains`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentMethodDomains-list.php)

#### paymentMethodDomains.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentMethodDomains->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### paymentMethodDomains.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentMethodDomains->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### paymentMethodDomains.update

Sets the domain registration status. Activating the domain also validates Apple Pay and Google Pay readiness.

`PATCH /v1/payment-method-domains/{payment_method_domain_id}`

Call: `update(string|Model $payment_method_domain_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_domain_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_domain_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'status': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_domain_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/paymentMethodDomains-update.php)


## Resource: paymentMethods

### paymentMethods.get

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Call: `get(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_id': string, 'expand'?: list<string>, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentMethods-get.php)


### paymentMethods.list

Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/payment-methods`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'customer_id'?: string, 'page_size'?: int, 'page_token'?: string, 'type'?: string, 'status'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `type` | Optional | string | Values: "card". |
| `status` | Optional | string | Values: "active", "pending", "expired", "removed", "failed". |
| `X-Checkout-Session-ID` | Optional | string |  |
| `X-Checkout-Session-Secret` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`, `checkout`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/paymentMethods-list.php)

#### paymentMethods.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentMethods->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### paymentMethods.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->paymentMethods->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### paymentMethods.remove

Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/payment-methods/{payment_method_id}`

Call: `remove(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentMethods-remove.php)


### paymentMethods.save

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Call: `save(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'customer_id': string, 'type'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `saveWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentMethods-save.php)


### paymentMethods.setDefault

Sets the default payment method for the payment method's owning customer.

`POST /v1/payment-methods/{payment_method_id}/set-default`

Call: `setDefault(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payment_method_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `setDefaultWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/paymentMethods-setDefault.php)


## Resource: payouts

### payouts.cancel

Cancels an eligible payout before it leaves Flint-controlled processing and returns the resulting payout.

`POST /v1/payouts/{payout_id}/cancel`

Call: `cancel(string|Model $payout_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/payouts-cancel.php)


### payouts.create

Creates a payout from an available balance to an eligible payout destination. Safe to retry with the same Idempotency-Key.

`POST /v1/payouts`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'balance_source_type'?: string, 'description'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'method'?: string, 'payout_destination_id'?: string, 'statement_descriptor'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/payouts-create.php)


### payouts.get

Returns one payout by ID, with optional related payout and payout destination expansions.

`GET /v1/payouts/{payout_id}`

Call: `get(string|Model $payout_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payouts-get.php)


### payouts.list

Returns a paginated list of payouts with optional filters for status, currency, destination, method, and timing.

`GET /v1/payouts`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'currency'?: string, 'method'?: string, 'balance_source_type'?: string, 'payout_destination_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'created_after'?: string, 'created_before'?: string, 'arrival_after'?: string, 'arrival_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `method` | Optional | string | Values: "standard". |
| `balance_source_type` | Optional | string | Values: "card", "bank_account", "fpx". |
| `payout_destination_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "in_transit", "paid", "failed", "canceled". |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `arrival_after` | Optional | string | Format: date-time. |
| `arrival_before` | Optional | string | Format: date-time. |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payouts-list.php)

#### payouts.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payouts->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### payouts.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payouts->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### payouts.listEntries

Lists the authoritative balance-transaction allocations for a payout in ascending occurrence order. A paid payout returns an unavailable error instead of incomplete or inferred entries.

`GET /v1/payouts/{payout_id}/entries`

Call: `listEntries(string|Model $payout_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listEntriesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payouts-listEntries.php)

#### payouts.listEntriesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payouts->listEntriesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### payouts.listEntriesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payouts->listEntriesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: payoutSettings

### payoutSettings.deletePayoutDestination

Disables an eligible payout destination and returns its final state. Safe to retry with the same Idempotency-Key.

`DELETE /v1/payout-settings/destinations/{payout_destination_id}`

Call: `deletePayoutDestination(string|Model $payout_destination_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_destination_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_destination_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `deletePayoutDestinationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/payoutSettings-deletePayoutDestination.php)


### payoutSettings.get

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Call: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payoutSettings-get.php)


### payoutSettings.getPayoutDestination

Returns one payout destination by ID.

`GET /v1/payout-settings/destinations/{payout_destination_id}`

Call: `getPayoutDestination(string|Model $payout_destination_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_destination_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_destination_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPayoutDestinationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payoutSettings-getPayoutDestination.php)


### payoutSettings.listPayoutDestinations

Returns a paginated list of payout destinations available to the authenticated merchant.

`GET /v1/payout-settings/destinations`

Call: `listPayoutDestinations(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'currency'?: string, 'type'?: string, 'status'?: string, 'available_payout_method'?: string, 'default_for_currency'?: bool, 'include_deleted'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `type` | Optional | string | Values: "bank_account", "debit_card". |
| `status` | Optional | string | Values: "pending", "active", "verification_required", "disabled", "deleted", "failed". |
| `available_payout_method` | Optional | string | Values: "standard". |
| `default_for_currency` | Optional | boolean |  |
| `include_deleted` | Optional | boolean |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPayoutDestinationsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/payoutSettings-listPayoutDestinations.php)

#### payoutSettings.listPayoutDestinationsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payoutSettings->listPayoutDestinationsItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### payoutSettings.listPayoutDestinationsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->payoutSettings->listPayoutDestinationsPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### payoutSettings.update

Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings`

Call: `update(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_payout_destinations'?: array{}, 'delay_days_override'?: int|null, 'interval'?: string, 'minimum_balance_by_currency'?: array{}, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string, 'weekly_payout_days'?: list<string>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/payoutSettings-update.php)


### payoutSettings.updatePayoutDestination

Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings/destinations/{payout_destination_id}`

Call: `updatePayoutDestination(string|Model $payout_destination_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `payout_destination_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'payout_destination_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updatePayoutDestinationWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/payoutSettings-updatePayoutDestination.php)


## Resource: products

### products.create

Creates a product for the authenticated merchant.

`POST /v1/products`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-create.php)


### products.createVariant

Create product variant.

`POST /v1/products/{product_id}/variants`

Call: `createVariant(string|Model $product_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'variant': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createVariantWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-createVariant.php)


### products.deleteVariant

Retire product variant.

`DELETE /v1/products/{product_id}/variants/{variant_id}`

Call: `deleteVariant(string|Model $product_id, string|Model $variant_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`, `path1` = `variant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'variant_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteVariantWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-deleteVariant.php)


### products.get

Returns a single product by ID.

`GET /v1/products/{product_id}`

Call: `get(string|Model $product_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-get.php)


### products.getOption

Get product option.

`GET /v1/products/{product_id}/options/{option_id}`

Call: `getOption(string|Model $product_id, string|Model $option_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`, `path1` = `option_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'option_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `option_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getOptionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-getOption.php)


### products.getVariant

Get product variant.

`GET /v1/products/{product_id}/variants/{variant_id}`

Call: `getVariant(string|Model $product_id, string|Model $variant_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`, `path1` = `variant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'variant_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getVariantWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-getVariant.php)


### products.list

Returns a paginated list of products for the authenticated merchant.

`GET /v1/products`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'product_type'?: string, 'status'?: string, 'category_handle'?: string, 'external_reference_id'?: string, 'sku'?: string, 'query'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `product_type` | Optional | string | Values: "physical", "service", "fee", "digital". |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `category_handle` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `sku` | Optional | string |  |
| `query` | Optional | string |  |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | string | Values: "configured", "action_required", "not_applicable". |
| `sort_by` | Optional | string | Values: "name", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-list.php)

#### products.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### products.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### products.listOptions

List product options.

`GET /v1/products/{product_id}/options`

Call: `listOptions(string|Model $product_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'page_size'?: int, 'page_token'?: string, 'status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listOptionsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-listOptions.php)

#### products.listOptionsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listOptionsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### products.listOptionsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listOptionsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### products.listVariants

List product variants.

`GET /v1/products/{product_id}/variants`

Call: `listVariants(string|Model $product_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "position", "created_at", "updated_at", "unit_price". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `delivery_profile_id` | Optional | string |  |
| `delivery_configuration_status` | Optional | string | Values: "configured", "action_required", "not_applicable". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listVariantsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/products-listVariants.php)

#### products.listVariantsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listVariantsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### products.listVariantsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->products->listVariantsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### products.remove

Archives a product and returns its final state.

`DELETE /v1/products/{product_id}`

Call: `remove(string|Model $product_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-remove.php)


### products.update

Applies a sparse update to product-parent fields. When categories is present, it replaces the full category list; send an empty array to clear categories. Sellable price, SKU, and inventory live on variants.

`PATCH /v1/products/{product_id}`

Call: `update(string|Model $product_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-update.php)


### products.updateVariant

Update product variant.

`PATCH /v1/products/{product_id}/variants/{variant_id}`

Call: `updateVariant(string|Model $product_id, string|Model $variant_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `product_id`, `path1` = `variant_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'product_id': string, 'variant_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `product_id` | Required | string |  |
| `variant_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateVariantWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/products-updateVariant.php)


## Resource: promotions

### promotions.create

Creates a promotion for the authenticated merchant.

`POST /v1/promotions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'application_method': mixed, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}|array{'any': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array{}, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'stacking_mode'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | any |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-create.php)


### promotions.createCode

Creates a code for a code-gated promotion.

`POST /v1/promotions/{promotion_id}/codes`

Call: `createCode(string|Model $promotion_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'code': string, 'expires_at'?: string, 'max_uses'?: string, 'metadata'?: array{}}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createCodeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-createCode.php)


### promotions.deleteCode

Deletes a promotion code.

`DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Call: `deleteCode(string|Model $promotion_id, string|Model $promotion_code_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`, `path1` = `promotion_code_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'promotion_code_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `promotion_code_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteCodeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-deleteCode.php)


### promotions.get

Returns a single promotion by ID.

`GET /v1/promotions/{promotion_id}`

Call: `get(string|Model $promotion_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/promotions-get.php)


### promotions.list

Returns a paginated list of promotions for the authenticated merchant.

`GET /v1/promotions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'product_id'?: string, 'variant_id'?: string, 'bundle_id'?: string, 'category_handle'?: string, 'redemption_type'?: string, 'discount_class'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "inactive", "expired", "not_yet_started", "exhausted", "no_active_codes", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `product_id` | Optional | string |  |
| `variant_id` | Optional | string |  |
| `bundle_id` | Optional | string |  |
| `category_handle` | Optional | string |  |
| `redemption_type` | Optional | string | Values: "automatic", "code". |
| `discount_class` | Optional | string | Values: "order", "line_item", "service_charge". |
| `sort_by` | Optional | string | Values: "name", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/promotions-list.php)

#### promotions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->promotions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### promotions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->promotions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### promotions.listCodes

Returns a paginated list of codes for a promotion.

`GET /v1/promotions/{promotion_id}/codes`

Call: `listCodes(string|Model $promotion_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listCodesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/promotions-listCodes.php)

#### promotions.listCodesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->promotions->listCodesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### promotions.listCodesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->promotions->listCodesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### promotions.remove

Archives a promotion and returns its final state.

`DELETE /v1/promotions/{promotion_id}`

Call: `remove(string|Model $promotion_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-remove.php)


### promotions.resolveCode

Resolves a buyer-entered promotion code to its promotion code record and parent promotion. This does not evaluate the code against an order or redeem it.

`GET /v1/promotions/by-code/{code}`

Call: `resolveCode(string|Model $code, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `code`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'code': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resolveCodeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/promotions-resolveCode.php)


### promotions.update

Applies a sparse update to promotion fields.

`PATCH /v1/promotions/{promotion_id}`

Call: `update(string|Model $promotion_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}|array{'any': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array|object|null, 'name'?: string, 'schedule'?: mixed, 'stacking_mode'?: string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | any |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-update.php)


### promotions.updateCode

Applies a sparse update to a promotion code.

`PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Call: `updateCode(string|Model $promotion_id, string|Model $promotion_code_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `promotion_id`, `path1` = `promotion_code_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'promotion_id': string, 'promotion_code_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string, 'max_uses'?: string, 'metadata'?: array|object|null, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Required | string |  |
| `promotion_code_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateCodeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/promotions-updateCode.php)


## Resource: refunds

### refunds.create

Creates a refund for an order or payment intent. This is a financial operation.

`POST /v1/refunds`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/refunds-create.php)


### refunds.get

Returns a single refund by ID.

`GET /v1/refunds/{refund_id}`

Call: `get(string|Model $refund_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `refund_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'refund_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/refunds-get.php)


### refunds.list

Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/refunds`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'payment_intent_id'?: string, 'customer_id'?: string, 'status'?: string, 'reason'?: list<string>, 'refund_method'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `payment_intent_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "in_transit", "succeeded", "failed", "requires_action", "canceled", "partially_succeeded". |
| `reason` | Optional | Array of string |  |
| `refund_method` | Optional | string | Values: "original_payment". |
| `min_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `max_amount` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. Example: 500. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "amount". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/refunds-list.php)

#### refunds.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->refunds->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### refunds.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->refunds->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### refunds.update

Updates refund metadata.

`PATCH /v1/refunds/{refund_id}`

Call: `update(string|Model $refund_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `refund_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'refund_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/refunds-update.php)


## Resource: reportDownloads

### reportDownloads.get

Authorizes the stable Flint download URL and redirects to a short-lived private file URL.

`GET /v1/report-downloads/{report_download_id}`

Call: `get(string|Model $report_download_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `report_download_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'report_download_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_download_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/reportDownloads-get.php)


## Resource: reports

### reports.create

Creates an idempotent asynchronous CSV report. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'currency': string, 'interval_end_at': string, 'interval_start_at': string, 'report_type': string, 'timezone'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries. Flint generates and returns one when omitted..

[Example](examples/reports-create.php)


### reports.get

Returns one report and its terminal download or failure details when available.

`GET /v1/reports/{report_id}`

Call: `get(string|Model $report_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `report_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'report_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `report_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/reports-get.php)


### reports.list

Lists reports in descending creation order using opaque pagination.

`GET /v1/reports`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/reports-list.php)

#### reports.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->reports->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### reports.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->reports->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: returnDispositions

### returnDispositions.cancel

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Call: `cancel(string|Model $return_disposition_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_disposition_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_disposition_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnDispositions-cancel.php)


### returnDispositions.get

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Call: `get(string|Model $return_disposition_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_disposition_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_disposition_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnDispositions-get.php)


### returnDispositions.list

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant.

`GET /v1/return-dispositions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'created_after'?: string, 'created_before'?: string, 'disposition_type'?: string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'replaces_return_disposition_id'?: string, 'return_id'?: string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `disposition_type` | Optional | string | Values: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `inventory_location_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: date-time. |
| `occurred_before` | Optional | string | Format: date-time. |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `replaces_return_disposition_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_inspection_line_item_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_line_item_id` | Optional | string |  |
| `status` | Optional | string | Values: "pending", "succeeded", "failed", "canceled". |
| `updated_after` | Optional | string | Format: date-time. |
| `updated_before` | Optional | string | Format: date-time. |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnDispositions-list.php)

#### returnDispositions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnDispositions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnDispositions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnDispositions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnDispositions.retry

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Call: `retry(string|Model $return_disposition_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_disposition_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_disposition_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_disposition_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `retryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnDispositions-retry.php)


## Resource: returnInspections

### returnInspections.decideLineItem

Record the accept or reject outcome for inspected quantity. Accepted quantity becomes dispositionable and satisfies after_inspection refund timing.

`POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`

Call: `decideLineItem(string|Model $return_inspection_id, string|Model $return_inspection_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_inspection_id`, `path1` = `return_inspection_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_inspection_id': string, 'return_inspection_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string |  |
| `return_inspection_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `decideLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnInspections-decideLineItem.php)


### returnInspections.get

Retrieve one inspection with its line items, findings, and current or superseded observation status.

`GET /v1/return-inspections/{return_inspection_id}`

Call: `get(string|Model $return_inspection_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_inspection_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_inspection_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnInspections-get.php)


### returnInspections.list

List inspection observations. Omitting return_id lists inspections across every Return for the merchant.

`GET /v1/return-inspections`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'acceptance_status'?: string, 'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'inspected_after'?: string, 'inspected_before'?: string, 'location_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id'?: string, 'source_system_type'?: string, 'status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Optional | string | Values: "accepted", "rejected", "review_required". |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `inspected_after` | Optional | string | Format: date-time. |
| `inspected_before` | Optional | string | Format: date-time. |
| `location_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_id` | Optional | string |  |
| `source_system_type` | Optional | string | Values: "manual", "pos", "wms", "erp", "other", "flint". |
| `status` | Optional | string | Values: "current", "superseded". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnInspections-list.php)

#### returnInspections.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnInspections->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnInspections.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnInspections->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: returnPolicies

### returnPolicies.create

Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.

`POST /v1/return-policies`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'revision': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnPolicies-create.php)


### returnPolicies.get

Retrieve one Return policy. Supports expand for current_revision.

`GET /v1/return-policies/{return_policy_id}`

Call: `get(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnPolicies-get.php)


### returnPolicies.getRevision

Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.

`GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`

Call: `getRevision(string|Model $return_policy_id, string|Model $return_policy_revision_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`, `path1` = `return_policy_revision_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'return_policy_revision_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `return_policy_revision_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getRevisionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnPolicies-getRevision.php)


### returnPolicies.list

List Return policies with their status and current revision.

`GET /v1/return-policies`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `status` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnPolicies-list.php)

#### returnPolicies.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnPolicies->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnPolicies.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnPolicies->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnPolicies.listRevisions

List every published revision of a Return policy.

`GET /v1/return-policies/{return_policy_id}/revisions`

Call: `listRevisions(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listRevisionsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnPolicies-listRevisions.php)

#### returnPolicies.listRevisionsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnPolicies->listRevisionsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnPolicies.listRevisionsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnPolicies->listRevisionsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnPolicies.publishRevision

Publish a new immutable Return policy revision while preserving the stable policy identity.

`POST /v1/return-policies/{return_policy_id}/revisions`

Call: `publishRevision(string|Model $return_policy_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_current_return_policy_revision_id': string, 'expected_version'?: string, 'revision': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `publishRevisionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnPolicies-publishRevision.php)


### returnPolicies.remove

Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.

`DELETE /v1/return-policies/{return_policy_id}`

Call: `remove(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnPolicies-remove.php)


### returnPolicies.update

Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.

`PATCH /v1/return-policies/{return_policy_id}`

Call: `update(string|Model $return_policy_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_policy_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_policy_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'status'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnPolicies-update.php)


## Resource: returnPreviews

### returnPreviews.create

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnPreviews-create.php)


## Resource: returnReasons

### returnReasons.create

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons.

`POST /v1/return-reasons`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnReasons-create.php)


### returnReasons.get

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Call: `get(string|Model $return_reason_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_reason_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_reason_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnReasons-get.php)


### returnReasons.list

List Return reasons, including Flint-provided defaults and merchant-defined reasons.

`GET /v1/return-reasons`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'source'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `source` | Optional | string | Values: "flint", "merchant". |
| `status` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnReasons-list.php)

#### returnReasons.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnReasons->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnReasons.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnReasons->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnReasons.remove

Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name.

`DELETE /v1/return-reasons/{return_reason_id}`

Call: `remove(string|Model $return_reason_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_reason_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_reason_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnReasons-remove.php)


### returnReasons.update

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set.

`PATCH /v1/return-reasons/{return_reason_id}`

Call: `update(string|Model $return_reason_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_reason_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_reason_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnReasons-update.php)


## Resource: returnReceipts

### returnReceipts.get

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Call: `get(string|Model $return_receipt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_receipt_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_receipt_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnReceipts-get.php)


### returnReceipts.list

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant.

`GET /v1/return-receipts`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'received_after'?: string, 'received_before'?: string, 'receiving_location_id'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'shipment_id'?: string, 'source_system_type'?: string, 'status'?: string, 'verification_status'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `received_after` | Optional | string | Format: date-time. |
| `received_before` | Optional | string | Format: date-time. |
| `receiving_location_id` | Optional | string |  |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |
| `source_system_type` | Optional | string | Values: "manual", "pos", "wms", "erp", "other", "flint". |
| `status` | Optional | string | Values: "current", "superseded". |
| `verification_status` | Optional | string | Values: "matched", "unverified", "excess". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnReceipts-list.php)

#### returnReceipts.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnReceipts->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnReceipts.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnReceipts->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnReceipts.verifyLineItem

Establish the Return line identity for receipt quantity that arrived without one. Unverified quantity counts toward no line and releases no refund timing gate until it is verified.

`POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`

Call: `verifyLineItem(string|Model $return_receipt_id, string|Model $return_receipt_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_receipt_id`, `path1` = `return_receipt_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_receipt_id': string, 'return_receipt_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string |  |
| `return_receipt_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `verifyLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnReceipts-verifyLineItem.php)


## Resource: returnResolutions

### returnResolutions.cancel

Cancel a resolution and release the line value it reserved. Effects that already succeeded are undone with a compensating correction instead.

`POST /v1/return-resolutions/{return_resolution_id}/cancel`

Call: `cancel(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-cancel.php)


### returnResolutions.confirm

Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.

`POST /v1/return-resolutions/{return_resolution_id}/confirm`

Call: `confirm(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `confirmWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-confirm.php)


### returnResolutions.get

Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.

`GET /v1/return-resolutions/{return_resolution_id}`

Call: `get(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnResolutions-get.php)


### returnResolutions.getOrCreateCheckoutSession

Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/return-resolutions/{return_resolution_id}/checkout-session`

Call: `getOrCreateCheckoutSession(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getOrCreateCheckoutSessionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-getOrCreateCheckoutSession.php)


### returnResolutions.list

List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled.

`GET /v1/return-resolutions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'action_required_by'?: string, 'corrects_return_resolution_id'?: string, 'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'resolution_type'?: list<string>, 'return_id'?: string, 'return_line_item_id'?: string, 'return_policy_revision_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_required_by` | Optional | string | Values: "buyer", "merchant", "integration". |
| `corrects_return_resolution_id` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `resolution_type` | Optional | Array of string |  |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Optional | Array of string |  |
| `updated_after` | Optional | string | Format: date-time. |
| `updated_before` | Optional | string | Format: date-time. |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returnResolutions-list.php)

#### returnResolutions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnResolutions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returnResolutions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returnResolutions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returnResolutions.release

Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.

`POST /v1/return-resolutions/{return_resolution_id}/release`

Call: `release(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `releaseWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-release.php)


### returnResolutions.retry

Retry a failed resolution. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt.

`POST /v1/return-resolutions/{return_resolution_id}/retry`

Call: `retry(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `retryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-retry.php)


### returnResolutions.update

Update a proposed resolution before confirmation. A present line_items or replacement_line_items array replaces that collection and requires expected_version.

`PATCH /v1/return-resolutions/{return_resolution_id}`

Call: `update(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_resolution_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returnResolutions-update.php)


## Resource: returns

### returns.addLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Call: `addLineItem(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'line_item': mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `addLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-addLineItem.php)


### returns.cancel

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Call: `cancel(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-cancel.php)


### returns.cancelLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution cannot be canceled, and the conflict response names what is blocking it.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Call: `cancelLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`, `path1` = `return_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'handback_quantity': string, 'quantity': string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-cancelLineItem.php)


### returns.complete

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Call: `complete(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason'?: string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `completeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-complete.php)


### returns.create

Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/returns`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'line_items': list<mixed>, 'metadata'?: array{}, 'order_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-create.php)


### returns.createDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line.

`POST /v1/returns/{return_id}/dispositions`

Call: `createDisposition(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createDispositionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-createDisposition.php)


### returns.createInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history.

`POST /v1/returns/{return_id}/inspections`

Call: `createInspection(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string, 'line_items': list<mixed>, 'location_id': string, 'return_receipt_id': string, 'source_system'?: mixed, 'supersedes_return_inspection_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createInspectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-createInspection.php)


### returns.createReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history.

`POST /v1/returns/{return_id}/receipts`

Call: `createReceipt(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'line_items': list<mixed>, 'received_at': string, 'receiving_location_id': string, 'shipment_id'?: string, 'source_system'?: mixed, 'supersedes_return_receipt_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createReceiptWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-createReceipt.php)


### returns.createResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects.

`POST /v1/returns/{return_id}/resolutions`

Call: `createResolution(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createResolutionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-createResolution.php)


### returns.decide

Record per-line Return decisions atomically. Each line selects policy_evaluation or explicit decision semantics.

`POST /v1/returns/{return_id}/decide`

Call: `decide(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'completion_mode'?: string, 'expected_version'?: string, 'line_items': list<mixed>}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `decideWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-decide.php)


### returns.deleteLineItem

Remove a line item from a requested Return. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Call: `deleteLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`, `path1` = `return_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-deleteLineItem.php)


### returns.get

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Call: `get(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returns-get.php)


### returns.getLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Call: `getLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`, `path1` = `return_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'return_line_item_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returns-getLineItem.php)


### returns.list

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/returns`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'created_after'?: string, 'created_before'?: string, 'customer_id'?: string, 'decision_status'?: list<string>, 'external_reference_id'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>, 'resolution_type'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'work_type'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: date-time. |
| `created_before` | Optional | string | Format: date-time. |
| `customer_id` | Optional | string |  |
| `decision_status` | Optional | Array of string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `merchandise_status` | Optional | Array of string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `receiving_location_id` | Optional | string |  |
| `resolution_status` | Optional | Array of string |  |
| `resolution_type` | Optional | Array of string |  |
| `return_number` | Optional | string |  |
| `return_reason_id` | Optional | string |  |
| `status` | Optional | Array of string |  |
| `updated_after` | Optional | string | Format: date-time. |
| `updated_before` | Optional | string | Format: date-time. |
| `work_type` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returns-list.php)

#### returns.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returns->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returns.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returns->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returns.listLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value.

`GET /v1/returns/{return_id}/line-items`

Call: `listLineItems(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'fulfillment_id'?: string, 'merchandise_status'?: list<string>, 'order_line_item_id'?: string, 'page_size'?: int, 'page_token'?: string, 'resolution_status'?: list<string>, 'return_reason_id'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `fulfillment_id` | Optional | string |  |
| `merchandise_status` | Optional | Array of string |  |
| `order_line_item_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: int32. minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `resolution_status` | Optional | Array of string |  |
| `return_reason_id` | Optional | string |  |
| `status` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listLineItemsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/returns-listLineItems.php)

#### returns.listLineItemsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returns->listLineItemsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### returns.listLineItemsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->returns->listLineItemsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### returns.processExisting

Process an existing requested Return atomically at the Flint facts layer. Requires the current Return version and Idempotency-Key. Linked effects remain asynchronous.

`POST /v1/returns/{return_id}/process`

Call: `processExisting(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'completion_behavior'?: string, 'expected_version'?: string, 'line_items': list<mixed>, 'receipt'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `processExistingWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Required durable command identity. Exact replay returns the original resource graph..

[Example](examples/returns-processExisting.php)


### returns.reopen

Reopen a completed Return to record late compensating facts. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Call: `reopen(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `reopenWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-reopen.php)


### returns.update

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Call: `update(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string|null, 'metadata'?: array|object|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-update.php)


### returns.updateLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Call: `updateLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`, `path1` = `return_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string|null, 'expected_version'?: string, 'requested_quantity'?: string, 'requested_resolution_type'?: string|null, 'return_reason_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateLineItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-updateLineItem.php)


### returns.waiveLineInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Call: `waiveLineInspection(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `return_id`, `path1` = `return_line_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `waiveLineInspectionWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/returns-waiveLineInspection.php)


## Resource: reviews

### reviews.approve

Approve a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/approve`

Call: `approve(string|Model $review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `review_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'review_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `review_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `approveWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/reviews-approve.php)


### reviews.decline

Decline a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/decline`

Call: `decline(string|Model $review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `review_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'review_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'add_to_block_list'?: bool}}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `review_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `declineWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/reviews-decline.php)


### reviews.get

Get a payment review for the authenticated merchant environment.

`GET /v1/reviews/{review_id}`

Call: `get(string|Model $review_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `review_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'review_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `review_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/reviews-get.php)


### reviews.list

List payment reviews for the authenticated merchant environment.

`GET /v1/reviews`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'status'?: list<string>, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'created_after'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string |  |
| `risk_level` | Optional | Array of string |  |
| `payment_flow` | Optional | Array of string |  |
| `payment_intent_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/reviews-list.php)

#### reviews.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->reviews->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### reviews.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->reviews->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


## Resource: riskLists

### riskLists.addItems

Add risk list items for the authenticated merchant environment.

`POST /v1/risk-lists/{risk_list_id}/items`

Call: `addItems(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `addItemsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskLists-addItems.php)


### riskLists.create

Create a risk list for the authenticated merchant environment.

`POST /v1/risk-lists`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'alias': string, 'item_type': string, 'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskLists-create.php)


### riskLists.deleteItem

Delete a risk list item for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Call: `deleteItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`, `path1` = `risk_list_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'risk_list_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `deleteItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskLists-deleteItem.php)


### riskLists.get

Get a risk list for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}`

Call: `get(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskLists-get.php)


### riskLists.getItem

Get a risk list item for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Call: `getItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`, `path1` = `risk_list_item_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'risk_list_item_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getItemWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskLists-getItem.php)


### riskLists.list

List risk lists for the authenticated merchant environment.

`GET /v1/risk-lists`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'include_archived'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `include_archived` | Optional | boolean |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskLists-list.php)

#### riskLists.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskLists->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### riskLists.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskLists->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### riskLists.listRiskListItems

List risk list items for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items`

Call: `listRiskListItems(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listRiskListItemsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskLists-listRiskListItems.php)

#### riskLists.listRiskListItemsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskLists->listRiskListItemsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### riskLists.listRiskListItemsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskLists->listRiskListItemsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### riskLists.remove

Retire a risk list for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}`

Call: `remove(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskLists-remove.php)


### riskLists.update

Update a risk list for the authenticated merchant environment.

`PATCH /v1/risk-lists/{risk_list_id}`

Call: `update(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_list_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'name': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskLists-update.php)


## Resource: riskPreviews

### riskPreviews.create

Create a risk preview for the authenticated merchant environment.

`POST /v1/risk-previews`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskPreviews-create.php)


## Resource: riskRules

### riskRules.create

Create a risk rule for the authenticated merchant environment.

`POST /v1/risk-rules`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'description': string, 'enabled'?: bool, 'predicate': array{'all': list<mixed>}|array{'any': list<mixed>}|array{'not': mixed}|array{'attribute': string, 'operator': string, 'value': string|int|bool}|array{'amount_money': mixed, 'attribute': string, 'operator': string}|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|array{'attribute': string, 'list_alias': string, 'operator': string}|array{'attribute': string, 'operator': string}}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskRules-create.php)


### riskRules.get

Get a risk rule for the authenticated merchant environment.

`GET /v1/risk-rules/{risk_rule_id}`

Call: `get(string|Model $risk_rule_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_rule_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_rule_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskRules-get.php)


### riskRules.getAttributeRegistry

Get the risk rule attribute registry for the authenticated merchant environment.

`GET /v1/risk-rules/attributes`

Call: `getAttributeRegistry(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getAttributeRegistryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskRules-getAttributeRegistry.php)


### riskRules.list

List risk rules for the authenticated merchant environment.

`GET /v1/risk-rules`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'include_archived'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `include_archived` | Optional | boolean |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/riskRules-list.php)

#### riskRules.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskRules->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### riskRules.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->riskRules->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### riskRules.remove

Retire a risk rule for the authenticated merchant environment.

`DELETE /v1/risk-rules/{risk_rule_id}`

Call: `remove(string|Model $risk_rule_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_rule_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_rule_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskRules-remove.php)


### riskRules.update

Update a risk rule for the authenticated merchant environment.

`PATCH /v1/risk-rules/{risk_rule_id}`

Call: `update(string|Model $risk_rule_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `risk_rule_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'risk_rule_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_rule_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/riskRules-update.php)


## Resource: settings

### settings.get

Returns the raw merchant-scoped settings record for the authenticated merchant. No inheritance is applied.

`GET /v1/settings`

Call: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/settings-get.php)


### settings.getEffective

Returns the fully resolved effective settings for the authenticated merchant. Optional device_id or location_id can be used to resolve inherited overrides.

`GET /v1/settings/effective`

Call: `getEffective(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'location_id'?: string, 'device_id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string |  |
| `device_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getEffectiveWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/settings-getEffective.php)


### settings.update

Applies a sparse patch to merchant-scoped settings. Send catalog by itself because it has its own version fence. Fee and payment limit controls remain internal-only.

`PATCH /v1/settings`

Call: `update(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'branding'?: mixed, 'catalog'?: mixed, 'checkout'?: mixed, 'customer_account'?: mixed, 'customer_email_delivery'?: mixed, 'fulfillment'?: mixed, 'inventory'?: mixed, 'invoices'?: array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<mixed>, 'show_cost_comparison'?: bool}|null, 'reminder_policy'?: array{'rules': list<mixed>}|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|null, 'legal'?: mixed, 'metadata'?: array|object|null, 'promotions'?: mixed, 'receipts'?: mixed, 'subscriptions'?: mixed, 'tax'?: mixed, 'tipping'?: mixed}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/settings-update.php)


## Resource: shipments

### shipments.createPackage

Creates a package record under a shipment. Package status transitions use explicit future status APIs; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields.

`POST /v1/shipments/{shipment_id}/packages`

Call: `createPackage(string|Model $shipment_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `shipment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array{}, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}}`

Returned payload: `mixed|mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createPackageWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/shipments-createPackage.php)


### shipments.get

Retrieves one shipment execution record by ID.

`GET /v1/shipments/{shipment_id}`

Call: `get(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `shipment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/shipments-get.php)


### shipments.list

Lists shipment execution records, newest created first.

`GET /v1/shipments`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'order_id'?: string, 'fulfillment_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'return_id'?: string, 'handed_off_after'?: string, 'handed_off_before'?: string, 'created_after'?: string, 'created_before'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `external_system` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `return_id` | Optional | string |  |
| `handed_off_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `handed_off_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/shipments-list.php)

#### shipments.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->shipments->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### shipments.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->shipments->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### shipments.update

Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/shipments/{shipment_id}`

Call: `update(string|Model $shipment_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `shipment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array|object|null}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/shipments-update.php)


### shipments.voidResource

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/shipments/{shipment_id}/void`

Call: `voidResource(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `shipment_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `voidResourceWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/shipments-voidResource.php)


## Resource: specification

### specification.get

Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.

`GET /v1/openapi.json`

Call: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'version'?: string, 'Flint-Version'?: string}`

Returned payload: `SpecificationGetResponse200`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `version` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the complete decoded body directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: none (unauthenticated). See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/specification-get.php)


## Resource: subscriptionPlans

### subscriptionPlans.create

Creates a subscription plan for the authenticated merchant.

`POST /v1/subscription-plans`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'currency': string, 'description'?: string, 'early_termination_fee_money'?: mixed, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_items'?: list<mixed>, 'metadata'?: array{}, 'name': string, 'setup_fee_money'?: mixed, 'trial_period_days'?: int}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptionPlans-create.php)


### subscriptionPlans.get

Returns a single subscription plan by ID.

`GET /v1/subscription-plans/{plan_id}`

Call: `get(string|Model $plan_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `plan_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'plan_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `plan_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptionPlans-get.php)


### subscriptionPlans.list

Returns a paginated list of subscription plans for the authenticated merchant.

`GET /v1/subscription-plans`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "active", "archived". |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "name", "created_at", "updated_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptionPlans-list.php)

#### subscriptionPlans.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptionPlans->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### subscriptionPlans.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptionPlans->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### subscriptionPlans.remove

Retires a subscription plan. Plans with active subscriptions cannot be retired.

`DELETE /v1/subscription-plans/{plan_id}`

Call: `remove(string|Model $plan_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `plan_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'plan_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `plan_id` | Required | string |  |
| `expected_version` | Optional | exact numeric string | Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptionPlans-remove.php)


### subscriptionPlans.update

Applies a sparse update to mutable subscription plan fields. Line items are mutated through the subscription plan line-item endpoints.

`PATCH /v1/subscription-plans/{plan_id}`

Call: `update(string|Model $plan_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `plan_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'plan_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `plan_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptionPlans-update.php)


## Resource: subscriptions

### subscriptions.cancel

Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/subscriptions/{subscription_id}/cancel`

Call: `cancel(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_immediately'?: bool}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `cancelWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-cancel.php)


### subscriptions.changePaymentMethod

Changes the subscription to an active payment method owned by the same customer.

`POST /v1/subscriptions/{subscription_id}/payment-method`

Call: `changePaymentMethod(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_id': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `changePaymentMethodWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-changePaymentMethod.php)


### subscriptions.create

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-create.php)


### subscriptions.createPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Call: `createPaymentRetry(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `createPaymentRetryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Required durable identity for this retry attempt..

[Example](examples/subscriptions-createPaymentRetry.php)


### subscriptions.get

Returns a single subscription by ID.

`GET /v1/subscriptions/{subscription_id}`

Call: `get(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `expand` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptions-get.php)


### subscriptions.getPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Call: `getPaymentRetry(string|Model $subscription_id, string|Model $subscription_payment_retry_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`, `path1` = `subscription_payment_retry_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'subscription_payment_retry_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_payment_retry_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getPaymentRetryWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptions-getPaymentRetry.php)


### subscriptions.list

Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/subscriptions`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'billing_schedule_owner'?: string, 'awaiting_billing_schedule'?: bool, 'customer_id'?: string, 'plan_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'next_billing_at_after'?: string, 'next_billing_at_before'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `status` | Optional | string | Values: "trialing", "active", "paused", "past_due", "canceled", "incomplete". |
| `billing_schedule_owner` | Optional | string | Values: "flint", "external". |
| `awaiting_billing_schedule` | Optional | boolean |  |
| `customer_id` | Optional | string |  |
| `plan_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: 1. maxLength: 255. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Values: "created_at", "updated_at", "next_billing_at". |
| `sort_direction` | Optional | string | Values: "asc", "desc". |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `updated_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `next_billing_at_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `next_billing_at_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptions-list.php)

#### subscriptions.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptions->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### subscriptions.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptions->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### subscriptions.listPaymentRetries

Returns a subscription's manual payment retries, newest first.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Call: `listPaymentRetries(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listPaymentRetriesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/subscriptions-listPaymentRetries.php)

#### subscriptions.listPaymentRetriesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptions->listPaymentRetriesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### subscriptions.listPaymentRetriesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->subscriptions->listPaymentRetriesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### subscriptions.pause

Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/subscriptions/{subscription_id}/pause`

Call: `pause(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'pause_duration_cycles'?: int}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `pauseWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-pause.php)


### subscriptions.reactivate

Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/subscriptions/{subscription_id}/reactivate`

Call: `reactivate(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `reactivateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-reactivate.php)


### subscriptions.resume

Resumes a paused subscription.

`POST /v1/subscriptions/{subscription_id}/resume`

Call: `resume(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `resumeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-resume.php)


### subscriptions.skipCycle

Moves the next billing date forward by one plan interval without charging the current cycle.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Call: `skipCycle(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'initiated_by'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `skipCycleWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-skipCycle.php)


### subscriptions.update

Updates mutable subscription fields such as payment_method_id and metadata.

`PATCH /v1/subscriptions/{subscription_id}`

Call: `update(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `subscription_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_at_period_end'?: bool, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'payment_method_id'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-update.php)


### subscriptions.updateBillingSchedule

Sets the next billing date, clears an external schedule while it awaits a date, or transfers schedule ownership. The response carries the updated subscription.

`PATCH /v1/subscriptions/{subscription_id}/billing-schedule`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_anchor_day'?: int, 'initiated_by': string, 'next_billing_at': string, 'owner': string}|array{'initiated_by': string, 'next_billing_at'?: string|null, 'owner': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | Alternative shapes (see declared variants) | A closed owner-specific billing schedule update. |

Returns the payload at `data` directly. Use `updateBillingScheduleWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/subscriptions-updateBillingSchedule.php)


## Resource: webhookDeliveries

### webhookDeliveries.get

Returns one endpoint delivery and its current retry state.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Call: `get(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_delivery_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_delivery_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookDeliveries-get.php)


### webhookDeliveries.listAttempts

Returns the attempts recorded for a specific webhook delivery.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Call: `listAttempts(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_delivery_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_delivery_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listAttemptsWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookDeliveries-listAttempts.php)

#### webhookDeliveries.listAttemptsItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookDeliveries->listAttemptsItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### webhookDeliveries.listAttemptsPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookDeliveries->listAttemptsPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### webhookDeliveries.resend

Sends the canonical event payload again to the delivery's current webhook endpoint URL. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Call: `resend(string|Model $webhook_delivery_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_delivery_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_delivery_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'reason'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_delivery_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Optional | object |  |

Returns the payload at `data` directly. Use `resendWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookDeliveries-resend.php)


## Resource: webhookEndpoints

### webhookEndpoints.create

Creates a webhook endpoint and returns the signing secret once.

`POST /v1/webhook-endpoints`

Call: `create(array|Model $params, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'mode'?: string, 'partner_app_id'?: string, 'url': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookEndpoints-create.php)


### webhookEndpoints.createWebhookTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Call: `createWebhookTestEvent(string|Model $webhook_endpoint_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_endpoint_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'event_type': string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `createWebhookTestEventWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookEndpoints-createWebhookTestEvent.php)


### webhookEndpoints.get

Returns a single webhook endpoint by ID. The signing secret is omitted after creation.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Call: `get(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_endpoint_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_endpoint_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEndpoints-get.php)


### webhookEndpoints.list

Returns a page of webhook endpoints for the authenticated merchant.

`GET /v1/webhook-endpoints`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'event_sources'?: list<string>, 'partner_app_id'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `event_sources` | Optional | Array of string |  |
| `partner_app_id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEndpoints-list.php)

#### webhookEndpoints.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEndpoints->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### webhookEndpoints.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEndpoints->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### webhookEndpoints.remove

Marks a webhook endpoint as deleted so it no longer receives events.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Call: `remove(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_endpoint_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `removeWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookEndpoints-remove.php)


### webhookEndpoints.rotateWebhookSecret

Rotates the signing secret for a webhook endpoint and returns the new secret once.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Call: `rotateWebhookSecret(string|Model $webhook_endpoint_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_endpoint_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `rotateWebhookSecretWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookEndpoints-rotateWebhookSecret.php)


### webhookEndpoints.update

Updates the mutable fields on a webhook endpoint.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Call: `update(string|Model $webhook_endpoint_id, array|Model $params, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_endpoint_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'mode'?: string, 'partner_app_id'?: string, 'url'?: string}}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_endpoint_id` | Required | string |  |
| `Idempotency-Key` | Optional | string |  |
| `X-Request-Id` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |
| `body` | Required | object |  |

Returns the payload at `data` directly. Use `updateWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. For mutation retries, supply a stable idempotency key and reuse it for the same business action. 

Idempotency header: Idempotency-Key; retention: Use the endpoint-specific replay lifetime; the general Flint replay window is 24 hours unless the endpoint documents an exception.; scope: Endpoint-defined command identity. Optional idempotency key for safe retries..

[Example](examples/webhookEndpoints-update.php)


## Resource: webhookEvents

### webhookEvents.get

Returns a specific webhook event for the authenticated merchant.

`GET /v1/webhook-events/{webhook_event_id}`

Call: `get(string|Model $webhook_event_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_event_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_event_id': string, 'Flint-Version'?: string}`

Returned payload: `mixed`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `getWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEvents-get.php)


### webhookEvents.list

Returns recent canonical webhook events for the authenticated merchant.

`GET /v1/webhook-events`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'webhook_endpoint_id'?: string, 'delivery_status'?: string, 'event_source'?: list<string>, 'partner_app_id'?: string, 'event_type'?: string, 'resource_type'?: string, 'resource_id'?: string, 'api_request_log_id'?: string, 'request_id'?: string, 'correlation_id'?: string, 'created_after'?: string, 'created_before'?: string, 'include'?: list<string>, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `webhook_endpoint_id` | Optional | string |  |
| `delivery_status` | Optional | string | Values: "pending", "delivered", "failed", "suppressed". |
| `event_source` | Optional | Array of string |  |
| `partner_app_id` | Optional | string |  |
| `event_type` | Optional | string | Values: "balance.updated", "balance_transaction.created", "balance_transaction.updated", "capability.updated", "checkout_session.closed", "checkout_session.completed", "checkout_session.expired", "checkout_session.invalidated", "credit_note.allocation_created", "credit_note.allocation_reversed", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created", "customer.deletion_completed", "customer.deletion_rejected", "customer.deletion_requested", "customer.updated", "delivery_location_set.activated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.deactivated", "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated", "delivery_profile.updated", "delivery_rate.archived", "delivery_rate.created", "delivery_rate.updated", "delivery_rate_callback.activated", "delivery_rate_callback.archived", "delivery_rate_callback.created", "delivery_rate_callback.deactivated", "delivery_rate_callback.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated", "dispute.closed", "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.warning_closed", "dispute.won", "fraud_warning.created", "fraud_warning.updated", "inventory.action_required", "inventory.count.applied", "inventory.level.updated", "inventory.receipt.created", "inventory.reservation.at_risk", "inventory.reservation.closed", "inventory.reservation.committed", "inventory.reservation.consumed", "inventory.reservation.created", "inventory.reservation.hold_expired", "inventory.reservation.released", "inventory.shortage.detected", "inventory.transfer.closed", "inventory.transfer.departed", "inventory.transfer.lost", "inventory.transfer.received", "inventory.transfer.returned", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created", "invoice.credited", "invoice.delivery_failed", "invoice.delivery_succeeded", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_due", "invoice.manual_payment_recorded", "invoice.manual_payment_reversed", "invoice.marked_uncollectible", "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded", "invoice.payment_attempt_canceled", "invoice.payment_attempt_expired", "invoice.payment_failed", "invoice.payment_processing", "invoice.refunded", "invoice.reminder_due", "invoice.sent", "invoice.updated", "invoice.voided", "merchant.readiness.updated", "merchant_billing_balance.updated", "merchant_subscription_invoice.issued", "merchant_subscription_invoice.updated", "order.closed", "order.created", "order.fulfillment.completed", "order.fulfillment.created", "order.fulfillment.event.created", "order.fulfillment.package.created", "order.fulfillment.package.updated", "order.fulfillment.shipment.created", "order.fulfillment.shipment.updated", "order.fulfillment.status_changed", "order.fulfillment.updated", "order.inventory_action_required", "order.inventory_exception.created", "order.inventory_exception.resolved", "order.paid", "order.partially_paid", "order.payment_authorization_canceled", "order.payment_authorization_expired", "order.payment_authorized", "order.payment_captured", "order.refunded", "order.updated", "partner_app.install.created", "partner_app.install.environment_grant.created", "partner_app.install.environment_grant.revoked", "partner_app.install.permissions_updated", "partner_app.install.revoked", "partner_app.install.updated", "payment_intent.canceled", "payment_intent.fulfillment_hold.updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_method.failed", "payment_method.removed", "payment_method.saved", "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed", "payout.updated", "payout_destination.created", "payout_destination.deleted", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "refund.created", "refund.failed", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "review.closed", "review.opened", "subscription.activated", "subscription.canceled", "subscription.created", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_failed", "subscription.payment_succeeded", "subscription.renewal_upcoming", "subscription.resumed", "subscription.trial_ending", "subscription.updated". |
| `resource_type` | Optional | string | Values: "balance", "balance_transaction", "capability", "checkout_session", "customer", "dispute", "fraud_warning", "invoice", "merchant", "inventory_count", "inventory_level", "inventory_reservation", "inventory_reservation_line", "inventory_receipt", "inventory_transfer", "order", "payment_intent", "payment_method", "payout", "payout_destination", "payout_settings", "refund", "return", "return_disposition", "return_inspection", "return_receipt", "return_resolution", "review", "subscription". |
| `resource_id` | Optional | string |  |
| `api_request_log_id` | Optional | string |  |
| `request_id` | Optional | string |  |
| `correlation_id` | Optional | string |  |
| `created_after` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `created_before` | Optional | string | Format: date-time. Example: "2026-03-17T14:30:00Z". |
| `include` | Optional | Array of string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEvents-list.php)

#### webhookEvents.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEvents->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### webhookEvents.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEvents->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### webhookEvents.listWebhookDeliveries

Returns endpoint deliveries created for one canonical webhook event.

`GET /v1/webhook-events/{webhook_event_id}/deliveries`

Call: `listWebhookDeliveries(string|Model $webhook_event_id, array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: `path0` = `webhook_event_id`. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'webhook_event_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWebhookDeliveriesWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEvents-listWebhookDeliveries.php)

#### webhookEvents.listWebhookDeliveriesItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEvents->listWebhookDeliveriesItems('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### webhookEvents.listWebhookDeliveriesPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEvents->listWebhookDeliveriesPages('example', [], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```


### webhookEvents.stream

Streams canonical merchant webhook events created after the connection opens or after the supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready, gap, withheld, and disconnect. Gap and withheld records advance the resumable cursor even when a resource payload is expired or hidden by API-key scope.

`GET /v1/webhook-events/stream`

Call: `stream(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'event_type'?: string, 'after_event_id'?: string, 'Last-Event-ID'?: string, 'Flint-Version'?: string}`

Response body (inside Result.data): `null`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Optional | string | Values: "balance.updated", "balance_transaction.created", "balance_transaction.updated", "capability.updated", "checkout_session.closed", "checkout_session.completed", "checkout_session.expired", "checkout_session.invalidated", "credit_note.allocation_created", "credit_note.allocation_reversed", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created", "customer.deletion_completed", "customer.deletion_rejected", "customer.deletion_requested", "customer.updated", "delivery_location_set.activated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.deactivated", "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated", "delivery_profile.updated", "delivery_rate.archived", "delivery_rate.created", "delivery_rate.updated", "delivery_rate_callback.activated", "delivery_rate_callback.archived", "delivery_rate_callback.created", "delivery_rate_callback.deactivated", "delivery_rate_callback.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated", "dispute.closed", "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.warning_closed", "dispute.won", "fraud_warning.created", "fraud_warning.updated", "inventory.action_required", "inventory.count.applied", "inventory.level.updated", "inventory.receipt.created", "inventory.reservation.at_risk", "inventory.reservation.closed", "inventory.reservation.committed", "inventory.reservation.consumed", "inventory.reservation.created", "inventory.reservation.hold_expired", "inventory.reservation.released", "inventory.shortage.detected", "inventory.transfer.closed", "inventory.transfer.departed", "inventory.transfer.lost", "inventory.transfer.received", "inventory.transfer.returned", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created", "invoice.credited", "invoice.delivery_failed", "invoice.delivery_succeeded", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_due", "invoice.manual_payment_recorded", "invoice.manual_payment_reversed", "invoice.marked_uncollectible", "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded", "invoice.payment_attempt_canceled", "invoice.payment_attempt_expired", "invoice.payment_failed", "invoice.payment_processing", "invoice.refunded", "invoice.reminder_due", "invoice.sent", "invoice.updated", "invoice.voided", "merchant.readiness.updated", "merchant_billing_balance.updated", "merchant_subscription_invoice.issued", "merchant_subscription_invoice.updated", "order.closed", "order.created", "order.fulfillment.completed", "order.fulfillment.created", "order.fulfillment.event.created", "order.fulfillment.package.created", "order.fulfillment.package.updated", "order.fulfillment.shipment.created", "order.fulfillment.shipment.updated", "order.fulfillment.status_changed", "order.fulfillment.updated", "order.inventory_action_required", "order.inventory_exception.created", "order.inventory_exception.resolved", "order.paid", "order.partially_paid", "order.payment_authorization_canceled", "order.payment_authorization_expired", "order.payment_authorized", "order.payment_captured", "order.refunded", "order.updated", "payment_intent.canceled", "payment_intent.fulfillment_hold.updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_method.failed", "payment_method.removed", "payment_method.saved", "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed", "payout.updated", "payout_destination.created", "payout_destination.deleted", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "refund.created", "refund.failed", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "review.closed", "review.opened", "subscription.activated", "subscription.canceled", "subscription.created", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_failed", "subscription.payment_succeeded", "subscription.renewal_upcoming", "subscription.resumed", "subscription.trial_ending", "subscription.updated". |
| `after_event_id` | Optional | string |  |
| `Last-Event-ID` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEvents-stream.php)


## Resource: webhookEventTypes

### webhookEventTypes.list

Returns the webhook event types that can be used in enabled_events and event_type filters, grouped by the event source each type is valid for.

`GET /v1/webhook-event-types`

Call: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

Path arguments: none. Params contain flat body fields and query/header fields.

Canonical input schema (for configuration examples and HTTP fixtures): `array{'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Returned payload: `list<mixed>`

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: 1. maximum: 100. |
| `page_token` | Optional | string |  |
| `Flint-Version` | Optional | string | Format: date. |

Returns the payload at `data` directly. Use `listWithResponse` for `body`, `meta` and `raw` without unwrapping.

Authentication modes: `merchant`, `merchantKey`. See [credential setup](RUNTIME.md#authentication).

Request options are the second argument. Default attempts: 1; maximum: 1. 

[Example](examples/webhookEventTypes-list.php)

#### webhookEventTypes.listItems

Iterate individual values across pages. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEventTypes->listItems([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $item) {
  // Process this item before requesting the next one.
}
$client->close();
```

#### webhookEventTypes.listPages

Iterate page Results, including HTTP metadata. Iteration is lazy; all pages share the deadline.

```php
<?php
declare(strict_types=1);
require __DIR__ . '/vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
foreach ($client->webhookEventTypes->listPages([], new RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000)) as $page) {
  // Process this page before requesting the next one.
}
$client->close();
```

