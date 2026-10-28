[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptions

### subscriptions.cancel

Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/cancel`

Signature: `cancel(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-1). Models: [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequestInput.md#cancelsubscriptionrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->cancel('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-cancel.php)

### subscriptions.changePlan

Replaces the subscription's lines and recurring options with the active target plan's current terms. With billing_starts next_renewal, changes terms now without charging and keeps the current period and next billing date. With billing_starts now, charges a new period and credits unused paid item time after promotions; the plan changes only when payment succeeds. If the credit exceeds the new item charge, choose next_renewal. Omit interval and quantity to keep their current values; the target plan must offer them. Contract terms and existing recurring promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same result. Returns status 200 for a decline, with a closed unpaid order, failed order_payment_attempt, and unchanged subscription. Inspect order_payment_attempt.last_payment_error and update the subscription payment method before trying again. Send expected_version to reject a concurrent change. After a confirmed CONCURRENT_MODIFICATION with billing_starts now, refresh the subscription and send a new Idempotency-Key. The buyer account cannot change plans.

`POST /v1/subscriptions/{subscription_id}/change-plan`

Signature: `changePlan(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequestInput.md#changesubscriptionplanrequestinput) | The request body for: Change subscription plan. |

Body model: [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequestInput.md#changesubscriptionplanrequestinput).

#### subscriptions.changePlan body fields

Field definitions: [shared fields](../models/ChangeSubscriptionPlanRequestInput.md#changesubscriptionplanrequestinput).

#### Response

Returned payload: [SubscriptionPlanChangeResult](../models/SubscriptionPlanChangeResult.md#subscriptionplanchangeresult).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `changePlanWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->changePlan('example', [
  'billing_starts' => 'now',
  'subscription_plan_id' => 'plan_00000000000000000000000000',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-changePlan.php)

### subscriptions.create

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput) | The request body for: Create subscription. |

Body model: [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput).

#### subscriptions.create body fields

Field definitions: [shared fields](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput). Models: [SubscriptionBillingScheduleRequestInput](../models/SubscriptionBillingScheduleRequestInput.md#subscriptionbillingschedulerequestinput), [SubscriptionBillingStartRequestInput](../models/SubscriptionBillingStartRequestInput.md#subscriptionbillingstartrequestinput), [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [SubscriptionServiceLocationRequestInput](../models/SubscriptionServiceLocationRequestInput.md#subscriptionservicelocationrequestinput), [SubscriptionTermsRequestInput](../models/SubscriptionTermsRequestInput.md#subscriptiontermsrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->create([
  'billing_start' => (object) [
    'type' => 'immediate',
  ],
  'customer_id' => 'example',
  'terms' => (object) [
    'subscription_plan_id' => 'example',
    'type' => 'subscription_plan',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-create.php)

### subscriptions.createAccessLink

Creates a link to one subscription in your Flint-hosted customer account, to put in buyer email or messages you send yourself. Omit purpose or send subscription_view for read-only access without a sign-in. Send subscription_manage to also let the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state. subscription_manage requires commerce.subscriptions.write; subscription_view requires commerce.subscriptions.read. Neither purpose permits other subscription changes or access to another subscription. Both work for 14 days or 5 opens, whichever comes first; after that the buyer signs in. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED. Send no request body, an empty object ({}), or an optional purpose. Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/subscriptions/{subscription_id}/access-links`

Signature: `createAccessLink(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequestInput.md#createsubscriptionaccesslinkrequestinput) | The access a subscription link gives its buyer. Omit the body or purpose for read-only access. |

Body model: [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequestInput.md#createsubscriptionaccesslinkrequestinput).

#### subscriptions.createAccessLink body fields

Field definitions: [shared fields](../models/CreateSubscriptionAccessLinkRequestInput.md#createsubscriptionaccesslinkrequestinput).

#### Response

Returned payload: [AccessLink](../models/AccessLinkInput.md#accesslinkinput).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createAccessLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->createAccessLink('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-createAccessLink.php)

### subscriptions.createLineItem

Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery eligibility are checked before the line is saved. Already-created orders keep their lines.

`POST /v1/subscriptions/{subscription_id}/line-items`

Signature: `createLineItem(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequestInput.md#createsubscriptionlineitemrequestinput) | The request body for: Add subscription line item. |

Body model: [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequestInput.md#createsubscriptionlineitemrequestinput).

#### subscriptions.createLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `type` | Required | string | The catalog source of the new line: variant or bundle. Values: `"variant"`, `"bundle"`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### subscriptions.createLineItem body oneOf variant 1

The `variant` variant of `CreateSubscriptionLineItemRequest`.

Body model: [CreateSubscriptionLineItemRequestVariantInput](../models/CreateSubscriptionLineItemRequestVariantInput.md#createsubscriptionlineitemrequestvariantinput).

#### subscriptions.createLineItem body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateSubscriptionLineItemRequestVariantInput.md#createsubscriptionlineitemrequestvariantinput).

#### subscriptions.createLineItem body oneOf variant 2

The `bundle` variant of `CreateSubscriptionLineItemRequest`.

Body model: [CreateSubscriptionLineItemRequestBundleInput](../models/CreateSubscriptionLineItemRequestBundleInput.md#createsubscriptionlineitemrequestbundleinput).

#### subscriptions.createLineItem body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateSubscriptionLineItemRequestBundleInput.md#createsubscriptionlineitemrequestbundleinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->createLineItem('example', [
  'quantity' => 1,
  'type' => 'variant',
  'variant_id' => 'var_00000000000000000000000000',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-createLineItem.php)

### subscriptions.createPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Signature: `createPaymentRetry(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->createPaymentRetry('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-createPaymentRetry.php)

### subscriptions.deleteLineItem

Removes a line from future subscription renewals. The final line cannot be removed. Send expected_version as a query parameter to reject a concurrent change.

`DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```text
deleteLineItem(string|
  Model $subscription_id,
 string|
  Model $subscription_line_item_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_line_item_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->deleteLineItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-deleteLineItem.php)

### subscriptions.get

Returns a single subscription by ID. A paid checkout session's credential can retrieve only the subscription created by its source order. Checkout credentials cannot expand related resources.

`GET /v1/subscriptions/{subscription_id}`

Signature: `get(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->subscriptions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptions-get.php)

### subscriptions.getPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```text
getPaymentRetry(string|
  Model $subscription_id,
 string|
  Model $subscription_payment_retry_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_payment_retry_id` | Required | string |  |

#### Response

Returned payload: [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->subscriptions->getPaymentRetry('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptions-getPaymentRetry.php)

### subscriptions.list

Returns a paginated list of subscriptions for the authenticated merchant. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction. Default order: created_at descending, then subscription_id descending.

`GET /v1/subscriptions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `terms_type` | Optional | Array of string | minItems: `1`. Items values: `"subscription_plan"`, `"subscription_offer"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string | minItems: `1`. Items values: `"flint"`, `"external"`. |
| `awaiting_billing_schedule` | Optional | boolean |  |
| `cancel_at_period_end` | Optional | boolean |  |
| `customer_id` | Optional | string |  |
| `delivery_method_id` | Optional | string |  |
| `hold_reason` | Optional | Array of string | minItems: `1`. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `subscription_offer_id` | Optional | string |  |
| `subscription_plan_id` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"next_billing_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `next_billing_after` | Optional | string | Format: `date-time`. |
| `next_billing_before` | Optional | string | Format: `date-time`. |
| `needs_attention` | Optional | boolean |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |

#### Response

Returned payload: [SubscriptionsListResponse200](../models/SubscriptionsListResponse200.md#subscriptionslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptions->list([], new RequestOptions());
```

[Complete runnable example](../examples/subscriptions-list.php)

### subscriptions.listPaymentRetries

Returns a subscription's manual payment retries, newest first. Default order: created_at descending, then subscription_payment_retry_id descending.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Signature: `listPaymentRetries(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-51).

#### Response

Returned payload: [SubscriptionsListPaymentRetriesResponse200](../models/SubscriptionsListPaymentRetriesResponse200.md#subscriptionslistpaymentretriesresponse200).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPaymentRetriesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentRetriesItems`, `listPaymentRetriesPages`, `listPaymentRetriesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->subscriptions->listPaymentRetries('example', [], new RequestOptions());
```

[Complete runnable example](../examples/subscriptions-listPaymentRetries.php)

### subscriptions.pause

Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/pause`

Signature: `pause(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-53). Models: [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequestInput.md#pausesubscriptionrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `pauseWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->pause('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-pause.php)

### subscriptions.renew

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires Idempotency-Key; retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt with status 200, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/subscriptions/{subscription_id}/renew`

Signature: `renew(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-56). Models: [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### Response

Returned payload: [SubscriptionRenewalResult](../models/SubscriptionRenewalResult.md#subscriptionrenewalresult).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `renewWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->renew('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-renew.php)

### subscriptions.resume

Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused, with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with cancel_at_period_end set to false.

`POST /v1/subscriptions/{subscription_id}/resume`

Signature: `resume(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-57). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `resumeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->resume('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-resume.php)

### subscriptions.skipCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its billing_anchor_day, including when the skipped date falls in a shorter month. Available while the subscription is active, is not set to cancel at the end of its period, and has a next billing date.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Signature: `skipCycle(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequestInput.md#skipsubscriptioncyclerequestinput) | The request body for: Skip subscription cycle. |

Body model: [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequestInput.md#skipsubscriptioncyclerequestinput).

#### subscriptions.skipCycle body fields

Field definitions: [shared fields](../models/SkipSubscriptionCycleRequestInput.md#skipsubscriptioncyclerequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `skipCycleWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->skipCycle('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-skipCycle.php)

### subscriptions.update

Updates metadata, external_reference_id, payment_method_id, delivery, billing interval, quantity, or cancel_at_period_end: false to undo a scheduled cancellation. Send billing_interval and billing_interval_count together. A billing_schedule update must be the only mutable field. Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to reject concurrent changes. Schedule a cancellation with POST /v1/subscriptions/{subscription_id}/cancel, change the plan with /change-plan, and manage lines through the line-items collection. A card whose setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached. Once setup finishes, send a new request with a new Idempotency-Key.

`PATCH /v1/subscriptions/{subscription_id}`

Signature: `update(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionRequestInput](../models/UpdateSubscriptionRequestInput.md#updatesubscriptionrequestinput) | The request body for: Update subscription. |

Body model: [UpdateSubscriptionRequestInput](../models/UpdateSubscriptionRequestInput.md#updatesubscriptionrequestinput).

#### subscriptions.update body fields

Field definitions: [shared fields](../models/UpdateSubscriptionRequestInput.md#updatesubscriptionrequestinput). Models: [SubscriptionBillingScheduleUpdateRequestInput](../models/SubscriptionBillingScheduleUpdateRequestInput.md#subscriptionbillingscheduleupdaterequestinput), [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-update.php)

### subscriptions.updateLineItem

Updates a subscription line for future renewals. Send expected_version to reject a concurrent change. Already-created orders keep their lines.

`PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature: `updateLineItem(string|Model $subscription_id, string|Model $subscription_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequestInput.md#updatesubscriptionlineitemrequestinput) | The request body for: Update subscription line item. |

Body model: [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequestInput.md#updatesubscriptionlineitemrequestinput).

#### subscriptions.updateLineItem body fields

Field definitions: [shared fields](../models/UpdateSubscriptionLineItemRequestInput.md#updatesubscriptionlineitemrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->subscriptions->updateLineItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/subscriptions-updateLineItem.php)

