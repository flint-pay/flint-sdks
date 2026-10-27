[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptions

### subscriptions.cancel

Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/cancel`

Signature:

```typescript
cancel(subscription_id: InputValue<string>,
 params: (InputValue<CancelSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-1). Models: [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.cancel("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-cancel.mjs)

### subscriptions.changePaymentMethod

Changes the subscription to an active payment method owned by the same customer. The payment method's usage must be off_session. Send expected_version to reject a concurrent change. A card whose setup hasn't finished returns 409 PAYMENT_METHOD_NOT_READY. Retry the same request with the same Idempotency-Key once setup finishes.

`POST /v1/subscriptions/{subscription_id}/payment-method`

Signature:

```typescript
changePaymentMethod(subscription_id: InputValue<string>,
 params: (InputValue<ChangeSubscriptionPaymentMethodRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-4). Models: [ChangeSubscriptionPaymentMethodRequestInput](../models/ChangeSubscriptionPaymentMethodRequest.md#changesubscriptionpaymentmethodrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `changePaymentMethodWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changePaymentMethod("example", {payment_method_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-changePaymentMethod.mjs)

### subscriptions.changePlan

Replaces the subscription's lines and recurring options with the active target plan's current terms. With billing_starts next_renewal, changes terms now without charging and keeps the current period and next billing date. With billing_starts now, charges a new period and credits unused paid item time after promotions; the plan changes only when payment succeeds. If the credit exceeds the new item charge, choose next_renewal. Omit interval and quantity to keep their current values; the target plan must offer them. Contract terms and existing recurring promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same result. Returns status 200 for a decline, with a closed unpaid order, failed order_payment_attempt, and unchanged subscription. Inspect order_payment_attempt.last_payment_error and update the subscription payment method before trying again. Send expected_version to reject a concurrent change. After a confirmed CONCURRENT_MODIFICATION with billing_starts now, refresh the subscription and send a new Idempotency-Key. The buyer account cannot change plans.

`POST /v1/subscriptions/{subscription_id}/change-plan`

Signature:

```typescript
changePlan(subscription_id: InputValue<string>,
 params: (InputValue<ChangeSubscriptionPlanRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest) | The request body for: Change subscription plan. |

Body model: [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest).

#### subscriptions.changePlan body fields

Field definitions: [shared fields](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `changePlanWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.changePlan("example", {billing_starts: "now", subscription_plan_id: "plan_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-changePlan.mjs)

### subscriptions.create

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Signature:

```typescript
create(params: (InputValue<CreateSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `service_location` | Optional | [SubscriptionServiceLocationRequestInput](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where a subscription's service is delivered: a saved customer address by ID, or a new address. |
| `terms` | Required | [SubscriptionTermsRequestInput](../models/SubscriptionTermsRequest.md#subscriptiontermsrequest) | Subscription terms from either a subscription plan or subscription offers, selected by `type`. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.create({billing_start: {type: "immediate"}, customer_id: "example", terms: {subscription_plan_id: "example", type: "subscription_plan"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-create.mjs)

### subscriptions.createAccessLink

Creates a link to one subscription in your Flint-hosted customer account, to put in buyer email or messages you send yourself. Omit purpose or send subscription_view for read-only access without a sign-in. Send subscription_manage to also let the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state. subscription_manage requires commerce.subscriptions.write; subscription_view requires commerce.subscriptions.read. Neither purpose permits other subscription changes or access to another subscription. Both work for 14 days or 5 opens, whichever comes first; after that the buyer signs in. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED. Send no request body, an empty object ({}), or an optional purpose. Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/subscriptions/{subscription_id}/access-links`

Signature:

```typescript
createAccessLink(subscription_id: InputValue<string>,
 params?: (InputValue<CreateSubscriptionAccessLinkRequestInput> |
  {
  "purpose"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest) | The access a subscription link gives its buyer. Omit the body or purpose for read-only access. |

Body model: [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest).

#### subscriptions.createAccessLink body fields

Field definitions: [shared fields](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest).

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

Complete body and metadata: `createAccessLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createAccessLink.mjs)

### subscriptions.createLineItem

Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery eligibility are checked before the line is saved. Already-created orders keep their lines.

`POST /v1/subscriptions/{subscription_id}/line-items`

Signature:

```typescript
createLineItem(subscription_id: InputValue<string>,
 params: (InputValue<CreateSubscriptionLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest) | The request body for: Add subscription line item. |

Body model: [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest).

#### subscriptions.createLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### subscriptions.createLineItem body oneOf variant 1



#### subscriptions.createLineItem body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Required | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### subscriptions.createLineItem body oneOf variant 2



#### subscriptions.createLineItem body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createLineItem("example", {quantity: 1, variant_id: "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createLineItem.mjs)

### subscriptions.createPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
createPaymentRetry(subscription_id: InputValue<string>,
 params: (InputValue<{
}> | {
}) & {
  "Idempotency-Key"?: InputValue<string>
} | undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.createPaymentRetry("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-createPaymentRetry.mjs)

### subscriptions.deleteLineItem

Removes a line from future subscription renewals. The final line cannot be removed. Send expected_version as a query parameter to reject a concurrent change.

`DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
deleteLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
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
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-deleteLineItem.mjs)

### subscriptions.get

Returns a single subscription by ID. A paid checkout session's credential can retrieve only the subscription created by its source order. Checkout credentials cannot expand related resources.

`GET /v1/subscriptions/{subscription_id}`

Signature:

```typescript
get(subscription_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>)
```

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptions.get("example", {}, {  });
```

[Complete runnable example](../examples/subscriptions-get.mjs)

### subscriptions.getPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```typescript
getPaymentRetry(subscription_id: InputValue<string>,
 subscription_payment_retry_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.subscriptions.getPaymentRetry("example", "example", {}, {  });
```

[Complete runnable example](../examples/subscriptions-getPaymentRetry.mjs)

### subscriptions.list

Returns a paginated list of subscriptions for the authenticated merchant. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction.

`GET /v1/subscriptions`

Signature:

```typescript
list(params?: {
  "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"trialing" |
    "active" |
    "paused" |
    "past_due" |
    "canceled" |
    "incomplete" |
    "scheduled">>;
  "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
  "awaiting_billing_schedule"?: InputValue<boolean>;
  "cancel_at_period_end"?: InputValue<boolean>;
  "customer_id"?: InputValue<string>;
  "delivery_method_id"?: InputValue<string>;
  "hold_reason"?: InputValue<Array<"method_unavailable" |
    "destination_not_served" |
    "rate_unavailable">>;
  "subscription_offer_id"?: InputValue<string>;
  "subscription_plan_id"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "next_billing_after"?: InputValue<string | globalThis.Date>;
  "next_billing_before"?: InputValue<string | globalThis.Date>;
  "needs_attention"?: InputValue<boolean>;
  "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
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

Returned payload: [SubscriptionListResponse](../models/SubscriptionListResponse.md#subscriptionlistresponse).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptions.list({}, {  });
```

[Complete runnable example](../examples/subscriptions-list.mjs)

### subscriptions.listPaymentRetries

Returns a subscription's manual payment retries, newest first.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
listPaymentRetries(subscription_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string |  |

#### Response

Returned payload: [SubscriptionPaymentRetryListResponse](../models/SubscriptionPaymentRetryListResponse.md#subscriptionpaymentretrylistresponse).

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

Complete body and metadata: `listPaymentRetriesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentRetriesItems`, `listPaymentRetriesPages`, `listPaymentRetriesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.subscriptions.listPaymentRetries("example", {}, {  });
```

[Complete runnable example](../examples/subscriptions-listPaymentRetries.mjs)

### subscriptions.pause

Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/pause`

Signature:

```typescript
pause(subscription_id: InputValue<string>,
 params: (InputValue<PauseSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-56). Models: [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequest.md#pausesubscriptionrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `pauseWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.pause("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-pause.mjs)

### subscriptions.reactivate

Clears a pending cancellation without changing the current billing period. Alternatively, PATCH the subscription with cancel_at_period_end set to false. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/reactivate`

Signature:

```typescript
reactivate(subscription_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> | {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

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
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `reactivateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.reactivate("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-reactivate.mjs)

### subscriptions.renew

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires Idempotency-Key; retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt with status 200, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/subscriptions/{subscription_id}/renew`

Signature:

```typescript
renew(subscription_id: InputValue<string>,
 params: (InputValue<RenewSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

Field definitions: [shared fields](me.md#request-fields-60). Models: [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `renewWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.renew("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-renew.mjs)

### subscriptions.resume

Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused, with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, use reactivate.

`POST /v1/subscriptions/{subscription_id}/resume`

Signature:

```typescript
resume(subscription_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> | {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

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
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `resumeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.resume("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-resume.mjs)

### subscriptions.skipCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its billing_anchor_day, including when the skipped date falls in a shorter month. Available while the subscription is active, is not set to cancel at the end of its period, and has a next billing date.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Signature:

```typescript
skipCycle(subscription_id: InputValue<string>,
 params: (InputValue<SkipSubscriptionCycleRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest) | The request body for: Skip subscription cycle. |

Body model: [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest).

#### subscriptions.skipCycle body fields

Field definitions: [shared fields](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `skipCycleWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.skipCycle("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-skipCycle.mjs)

### subscriptions.update

Updates metadata, external_reference_id, payment_method_id, delivery, billing interval, quantity, or cancel_at_period_end: false to undo a scheduled cancellation. Send billing_interval and billing_interval_count together. A billing_schedule update must be the only mutable field. Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to reject concurrent changes. Schedule a cancellation with POST /v1/subscriptions/{subscription_id}/cancel, change the plan with /change-plan, and manage lines through the line-items collection.

`PATCH /v1/subscriptions/{subscription_id}`

Signature:

```typescript
update(subscription_id: InputValue<string>,
 params: (InputValue<UpdateSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-update.mjs)

### subscriptions.updateBillingSchedule

Sets the next billing date, clears an external schedule while it awaits a date, or transfers schedule ownership. Moving a Flint-owned next_billing_at sets billing_anchor_day to its UTC day unless you send an explicit anchor. Transferring an external schedule to Flint with a next billing date follows the same rule. An unchanged date and owner preserve the anchor. The response carries the updated subscription. Send expected_version to reject a concurrent change.

`PATCH /v1/subscriptions/{subscription_id}/billing-schedule`

Signature: `updateBillingSchedule(input: SubscriptionsUpdateBillingScheduleInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionBillingScheduleRequestInput](../models/UpdateSubscriptionBillingScheduleRequest.md#updatesubscriptionbillingschedulerequest) | A closed owner-specific billing schedule update. |

Body model: [UpdateSubscriptionBillingScheduleRequestInput](../models/UpdateSubscriptionBillingScheduleRequest.md#updatesubscriptionbillingschedulerequest).

#### subscriptions.updateBillingSchedule body oneOf variant 1

The `flint` variant of `UpdateSubscriptionBillingScheduleRequest`.

Body model: [UpdateSubscriptionBillingScheduleRequestFlintInput](../models/UpdateSubscriptionBillingScheduleRequestFlint.md#updatesubscriptionbillingschedulerequestflint).

#### subscriptions.updateBillingSchedule body oneOf variant 1 fields

Field definitions: [shared fields](../models/UpdateSubscriptionBillingScheduleRequestFlint.md#updatesubscriptionbillingschedulerequestflint).

#### subscriptions.updateBillingSchedule body oneOf variant 2

The `external` variant of `UpdateSubscriptionBillingScheduleRequest`.

Body model: [UpdateSubscriptionBillingScheduleRequestExternalInput](../models/UpdateSubscriptionBillingScheduleRequestExternal.md#updatesubscriptionbillingschedulerequestexternal).

#### subscriptions.updateBillingSchedule body oneOf variant 2 fields

Field definitions: [shared fields](../models/UpdateSubscriptionBillingScheduleRequestExternal.md#updatesubscriptionbillingschedulerequestexternal).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateBillingScheduleWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.updateBillingSchedule({subscription_id: "example", body: {owner: "flint", next_billing_at: "2026-01-01T00:00:00Z"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-updateBillingSchedule.mjs)

### subscriptions.updateLineItem

Updates a subscription line for future renewals. Send expected_version to reject a concurrent change. Already-created orders keep their lines.

`PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
updateLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params: (InputValue<UpdateSubscriptionLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest) | The request body for: Update subscription line item. |

Body model: [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest).

#### subscriptions.updateLineItem body fields

Field definitions: [shared fields](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptions.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-updateLineItem.mjs)

