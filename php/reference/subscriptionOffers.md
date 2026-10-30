[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionOffers

### subscriptionOffers.create

Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`POST /v1/subscription-offers`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput) | The request body for: Create subscription offer. |

Body model: [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput).

#### subscriptionOffers.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput). Models: [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionOffers->create([
  'name' => 'example',
  'billing_interval_options' => [
    (object) [
      'billing_interval' => 'daily',
      'billing_interval_count' => 1,
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionOffers-create.php)

### subscriptionOffers.delete

Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`DELETE /v1/subscription-offers/{subscription_offer_id}`

Signature: `delete(string|Model $subscription_offer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Refuses the deletion if the offer has changed. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionOffers->delete('soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionOffers-delete.php)

### subscriptionOffers.get

Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`GET /v1/subscription-offers/{subscription_offer_id}`

Signature: `get(string|Model $subscription_offer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->subscriptionOffers->get('soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionOffers-get.php)

### subscriptionOffers.list

List subscription offers. Offer changes affect new signups only. Existing subscriptions keep their terms. Default order: created_at descending, then subscription_offer_id descending.

`GET /v1/subscription-offers`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `product_id` | Optional | string | Filter by Flint product ID. |
| `variant_id` | Optional | string | Filter by Flint variant ID. |
| `query` | Optional | string | Case-insensitive search over name, subscription_offer_id, and external_reference_id. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by subscription_offer_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [SubscriptionOfferListResponse](../models/SubscriptionOfferListResponse.md#subscriptionofferlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptionOffers->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionOffers-list.php)

### subscriptionOffers.update

Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`PATCH /v1/subscription-offers/{subscription_offer_id}`

Signature: `update(string|Model $subscription_offer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string | Subscription offer ID. |
| `body` | Required | [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput) | The request body for: Update subscription offer. minProperties: `1`. |

Body model: [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput).

#### subscriptionOffers.update body fields

Field definitions: [shared fields](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput). Models: [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionOffers->update('soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Monthly subscription',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionOffers-update.php)

