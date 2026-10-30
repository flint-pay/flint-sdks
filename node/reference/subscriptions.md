[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptions

### subscriptions.cancel

Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/cancel`

Signature: `cancel(subscription_id: InputValue<string>, params: SubscriptionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-1). Models: [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.cancel("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {cancel_immediately: false, cancellation_reason_code: "too_expensive"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-cancel.mjs)

### subscriptions.changePlan

Replaces the subscription's lines and recurring options with the active target plan's current terms. Paired lines keep their quantities unless line_items overrides them. Pair by the same plan line on the same plan, then variant or bundle, then the only line on each side. Unpaired target lines use their plan quantity. If an adjusted current line cannot be paired, send quantities for every target line; otherwise the request fails with quantity_not_carried before any change. With billing_starts next_renewal, changes terms now without charging and keeps the current period and next billing date. With billing_starts now, charges a new period and credits unused paid item time after promotions; the plan changes only when payment succeeds. If the credit exceeds the new item charge, choose next_renewal. Omit interval and quantity to keep their current values; the target plan must offer them. Contract terms and existing recurring promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same result. Returns status 200 for a decline, with a closed unpaid order, failed order_payment_attempt, and unchanged subscription. Inspect order_payment_attempt.last_payment_error and update the subscription payment method before trying again. Send expected_version to reject a concurrent change. After a confirmed CONCURRENT_MODIFICATION with billing_starts now, refresh the subscription and send a new Idempotency-Key. The buyer account cannot change plans.

`POST /v1/subscriptions/{subscription_id}/change-plan`

Signature:

```typescript
changePlan(subscription_id: InputValue<string>,
 params: SubscriptionsChangePlanParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest) | The request body for: Change subscription plan. |

Body model: [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest).

#### subscriptions.changePlan body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Required | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. Values: `"now"`, `"next_renewal"`. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequest.md#subscriptionplanchangelineitemrequest) | Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. Items: Quantity override for a line in the target subscription plan. |
| `quantity` | Optional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Required | string | minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionPlanChangeResult](../models/SubscriptionPlanChangeResult.md#subscriptionplanchangeresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changePlan("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {billing_starts: "now", subscription_plan_id: "plan_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-changePlan.mjs)

### subscriptions.create

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Signature: `create(params: SubscriptionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequest.md#createsubscriptionrequest) | The request body for: Create subscription. |

Body model: [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequest.md#createsubscriptionrequest).

#### subscriptions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequestInput](../models/SubscriptionBillingScheduleRequest.md#subscriptionbillingschedulerequest) | Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequestInput](../models/SubscriptionBillingStartRequest.md#subscriptionbillingstartrequest) | How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | minLength: `1`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequestInput](../models/SubscriptionServiceLocationRequestInput.md#subscriptionservicelocationrequestinput) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. |
| `terms` | Required | [SubscriptionTermsRequestInput](../models/SubscriptionTermsRequest.md#subscriptiontermsrequest) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create({billing_anchor_day: 15, billing_schedule: {owner: "flint"}, billing_start: {type: "immediate"}, customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE", metadata: {source: "api"}, payment_method_id: "pm_01KEZF7C00WX8CKEVFDMRMYMBM", terms: {subscription_plan_id: "plan_01KEZF7C00S177Q3KK6BKXGXV7", type: "subscription_plan"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-create.mjs)

### subscriptions.createAccessLink

Creates a link to one subscription in your Flint-hosted customer account, to put in buyer email or messages you send yourself. Omit purpose or send subscription_view for read-only access without a sign-in. Send subscription_manage to also let the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state. subscription_manage requires commerce.subscriptions.write; subscription_view requires commerce.subscriptions.read. Neither purpose permits other subscription changes or access to another subscription. Both work for 14 days or 5 opens, whichever comes first; after that the buyer signs in. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason merchant_hosted_customer_accounts. Send no request body, an empty object ({}), or an optional purpose. Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/subscriptions/{subscription_id}/access-links`

Signature: `createAccessLink(subscription_id: InputValue<string>, params?: SubscriptionsCreateAccessLinkParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest) | The access a subscription link gives its buyer. Omit the body or purpose for read-only access. |

Body model: [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest).

#### subscriptions.createAccessLink body fields

Field definitions: [shared fields](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest).

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createAccessLink("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createAccessLink.mjs)

### subscriptions.createLineItem

Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery eligibility are checked before the line is saved. Already-created orders keep their lines.

`POST /v1/subscriptions/{subscription_id}/line-items`

Signature: `createLineItem(subscription_id: InputValue<string>, params: SubscriptionsCreateLineItemParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest) | The request body for: Add subscription line item. |

Body model: [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest).

#### subscriptions.createLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `type` | Required | string | The catalog source of the new line: variant or bundle. Values: `"variant"`, `"bundle"`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### subscriptions.createLineItem with `type: "variant"`

The `variant` variant of `CreateSubscriptionLineItemRequest`.

Body model: [CreateSubscriptionLineItemRequestVariantInput](../models/CreateSubscriptionLineItemRequestVariant.md#createsubscriptionlineitemrequestvariant).

#### subscriptions.createLineItem with `type: "bundle"`

The `bundle` variant of `CreateSubscriptionLineItemRequest`.

Body model: [CreateSubscriptionLineItemRequestBundleInput](../models/CreateSubscriptionLineItemRequestBundle.md#createsubscriptionlineitemrequestbundle).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 1, type: "variant", variant_id: "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createLineItem.mjs)

### subscriptions.createPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
createPaymentRetry(subscription_id: InputValue<string>,
 params: SubscriptionsCreatePaymentRetryParams |
  undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createPaymentRetry.mjs)

### subscriptions.deleteLineItem

Removes a line from future subscription renewals. The final line cannot be removed. Send expected_version as a query parameter to reject a concurrent change.

`DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
deleteLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params?: SubscriptionsDeleteLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `subscription_line_item_id` | Required | string | Subscription line item ID. |
| `expected_version` | Optional | integer | Reject the deletion if the subscription version has changed. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.deleteLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-deleteLineItem.mjs)

### subscriptions.get

Returns a single subscription by ID. A paid checkout session's credential can retrieve only the subscription created by its source order. Checkout credentials cannot expand related resources.

`GET /v1/subscriptions/{subscription_id}`

Signature:

```typescript
get(subscription_id: InputValue<string>,
 params?: SubscriptionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, payment_method, subscription_plan. Expansion requires commerce.subscriptions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=payment_method, or pass one comma-separated value. Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. Values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptions.get("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptions-get.mjs)

### subscriptions.getPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```typescript
getPaymentRetry(subscription_id: InputValue<string>,
 subscription_payment_retry_id: InputValue<string>,
 params?: SubscriptionsGetPaymentRetryParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `subscription_payment_retry_id` | Required | string | Flint subscription payment retry ID. |

#### Response

Returned payload: [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry).

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

```typescript
const result = await client.subscriptions.getPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", "spr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptions-getPaymentRetry.mjs)

### subscriptions.list

Returns a paginated list of subscriptions for the authenticated merchant. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction. Default order: created_at descending, then subscription_id descending.

`GET /v1/subscriptions`

Signature: `list(params?: SubscriptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `terms_type` | Optional | Array of string or string | Filter by where the subscription terms come from. Repeat the parameter or pass comma-separated values to match either type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"subscription_plan"`, `"subscription_offer"`. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by subscription status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string or string | Filter by the system that supplies billing dates. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"flint"`, `"external"`. Values: `"flint"`, `"external"`. |
| `awaiting_billing_schedule` | Optional | boolean | Filter external schedules by whether they need another billing date. |
| `cancel_at_period_end` | Optional | boolean | When true, returns subscriptions scheduled to cancel at the end of the current period that are not yet canceled. When false, returns every other subscription. |
| `customer_id` | Optional | string | Filter by Flint customer ID. |
| `delivery_method_id` | Optional | string | Filter by the subscription's selected delivery method. |
| `hold_reason` | Optional | Array of string or string | Filter by the reason of the current delivery_hold. Does not match upcoming delivery issues. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `subscription_offer_id` | Optional | string | Filter by Flint subscription offer ID. |
| `subscription_plan_id` | Optional | string | Filter by Flint subscription plan ID. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `test_clock_id` | Optional | string | Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: `1`. pattern: `^tclk_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string | Search across subscription ID, external reference ID, customer, and plan. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as sub_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"next_billing_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `next_billing_after` | Optional | string | Inclusive lower bound on next_billing_at. Format: `date-time`. |
| `next_billing_before` | Optional | string | Exclusive upper bound on next_billing_at. Format: `date-time`. |
| `needs_attention` | Optional | boolean | True matches subscriptions with a delivery hold, an upcoming delivery hold, an inventory wait, or a delivery-action-required pause, plus past_due subscriptions and active or incomplete subscriptions whose billing date passed more than 24 hours ago without payment. False is the exact complement. Other filters still apply. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, payment_method, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=payment_method, or pass one comma-separated value. Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. Values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |

#### Response

Returned payload: [SubscriptionListResponse](../models/SubscriptionListResponse.md#subscriptionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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

```typescript
const result = await client.subscriptions.list({}, {  });
```

[Complete runnable example](../examples/subscriptions-list.mjs)

### subscriptions.listPaymentRetries

Returns a subscription's manual payment retries, newest first. Default order: created_at descending, then subscription_payment_retry_id descending.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
listPaymentRetries(subscription_id: InputValue<string>,
 params?: SubscriptionsListPaymentRetriesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-53).

#### Response

Returned payload: [SubscriptionPaymentRetryListResponse](../models/SubscriptionPaymentRetryListResponse.md#subscriptionpaymentretrylistresponse).

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

Pagination: `listPaymentRetriesItems`, `listPaymentRetriesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptions.listPaymentRetries("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/subscriptions-listPaymentRetries.mjs)

### subscriptions.pause

Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/pause`

Signature: `pause(subscription_id: InputValue<string>, params: SubscriptionsPauseParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-55). Models: [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequest.md#pausesubscriptionrequest).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.pause("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {pause_duration_cycles: 2}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-pause.mjs)

### subscriptions.renew

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires Idempotency-Key; retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt with status 200, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/subscriptions/{subscription_id}/renew`

Signature: `renew(subscription_id: InputValue<string>, params: SubscriptionsRenewParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-57). Models: [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### Response

Returned payload: [SubscriptionRenewalResult](../models/SubscriptionRenewalResult.md#subscriptionrenewalresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.renew("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-renew.mjs)

### subscriptions.resume

Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused, with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with cancel_at_period_end set to false.

`POST /v1/subscriptions/{subscription_id}/resume`

Signature: `resume(subscription_id: InputValue<string>, params?: SubscriptionsResumeParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-58). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.resume("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-resume.mjs)

### subscriptions.skipCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its billing_anchor_day, including when the skipped date falls in a shorter month. Available while the subscription is active, is not set to cancel at the end of its period, and has a next billing date.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Signature: `skipCycle(subscription_id: InputValue<string>, params: SubscriptionsSkipCycleParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest) | The request body for: Skip subscription cycle. |

Body model: [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest).

#### subscriptions.skipCycle body fields

Field definitions: [shared fields](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.skipCycle("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {initiated_by: "merchant"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-skipCycle.mjs)

### subscriptions.update

Updates metadata, external_reference_id, payment_method_id, delivery, billing interval, quantity, or cancel_at_period_end: false to undo a scheduled cancellation. Send billing_interval and billing_interval_count together. A billing_schedule update must be the only mutable field. Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to reject concurrent changes. Schedule a cancellation with POST /v1/subscriptions/{subscription_id}/cancel, change the plan with /change-plan, and manage lines through the line-items collection. A card whose setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached. Once setup finishes, send a new request with a new Idempotency-Key.

`PATCH /v1/subscriptions/{subscription_id}`

Signature: `update(subscription_id: InputValue<string>, params: SubscriptionsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [UpdateSubscriptionRequestInput](../models/UpdateSubscriptionRequest.md#updatesubscriptionrequest) | The request body for: Update subscription. |

Body model: [UpdateSubscriptionRequestInput](../models/UpdateSubscriptionRequest.md#updatesubscriptionrequest).

#### subscriptions.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleUpdateRequestInput](../models/SubscriptionBillingScheduleUpdateRequest.md#subscriptionbillingscheduleupdaterequest) | A closed owner-specific billing schedule update. |
| `cancel_at_period_end` | Optional | boolean | Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.update("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-update.mjs)

### subscriptions.updateLineItem

Updates a subscription line for future renewals. Send expected_version to reject a concurrent change. Already-created orders keep their lines.

`PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
updateLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params: SubscriptionsUpdateLineItemParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `subscription_line_item_id` | Required | string | Subscription line item ID. |
| `body` | Required | [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest) | The request body for: Update subscription line item. |

Body model: [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest).

#### subscriptions.updateLineItem body fields

Field definitions: [shared fields](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest).

#### Response

Returned payload: [Subscription](../models/Subscription.md#subscription).

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
| 502 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.updateLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-updateLineItem.mjs)

