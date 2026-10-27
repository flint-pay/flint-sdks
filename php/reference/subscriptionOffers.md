[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptionOffers

### subscriptionOffers.create

Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`POST /v1/subscription-offers`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput) | The request body for: Create subscription offer. |

Body model: [CreateSubscriptionOfferRequestInput](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput).

#### subscriptionOffers.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionOfferRequestInput.md#createsubscriptionofferrequestinput). Models: [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput).

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

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

### subscriptionOffers.get

Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`GET /v1/subscription-offers/{subscription_offer_id}`

Signature: `get(string|Model $subscription_offer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->subscriptionOffers->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionOffers-get.php)

### subscriptionOffers.list

List subscription offers. Offer changes affect new signups only. Existing subscriptions keep their terms.

`GET /v1/subscription-offers`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `product_id` | Optional | string |  |
| `variant_id` | Optional | string |  |
| `query` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"name"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [SubscriptionOffersListResponse200](../models/SubscriptionOffersListResponse200.md#subscriptionofferslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptionOffers->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptionOffers-list.php)

### subscriptionOffers.remove

Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`DELETE /v1/subscription-offers/{subscription_offer_id}`

Signature: `remove(string|Model $subscription_offer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionOffers->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionOffers-remove.php)

### subscriptionOffers.update

Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.

`PATCH /v1/subscription-offers/{subscription_offer_id}`

Signature: `update(string|Model $subscription_offer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_offer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput) | The request body for: Update subscription offer. minProperties: `1`. |

Body model: [UpdateSubscriptionOfferRequestInput](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput).

#### subscriptionOffers.update body fields

Field definitions: [shared fields](../models/UpdateSubscriptionOfferRequestInput.md#updatesubscriptionofferrequestinput). Models: [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput).

#### Response

Returned payload: [SubscriptionOffer](../models/SubscriptionOffer.md#subscriptionoffer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptionOffers->update('example', [
  'billing_interval_options' => [
    (object) [
      'billing_interval' => 'daily',
      'billing_interval_count' => 1,
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptionOffers-update.php)

