[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# subscriptions

### subscriptions.applyPromotion

Attaches a promotion to a subscription for future charged cycles. Send exactly one of promotion.promotion_id or promotion.promotion_code. first_cycle defaults to completed_cycles + 1, or completed_cycles + 2 while past_due, and cannot exceed completed_cycles + 120. Use replace_promotion_id to replace an active or scheduled promotion from first_cycle forward. The unpaid past_due order keeps its price. Promotion terms are frozen when attached; reattachment keeps consumed cycles. Offer promotions cannot be replaced. Requires commerce.subscriptions.write.

`POST /v1/subscriptions/{subscription_id}/promotions`

Signature: `applyPromotion(subscription_id: InputValue<string>, params: SubscriptionsApplyPromotionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ApplySubscriptionPromotionRequestInput](../models/ApplySubscriptionPromotionRequest.md#applysubscriptionpromotionrequest) | The request body for: Apply subscription promotion. |

Body model: [ApplySubscriptionPromotionRequestInput](../models/ApplySubscriptionPromotionRequest.md#applysubscriptionpromotionrequest).

#### subscriptions.applyPromotion body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Apply only if this matches the subscription's current version. Format: `uint64`. minimum: `1`. |
| `first_cycle` | Optional | integer | First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: `uint64`. minimum: `1`. |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequest.md#promotionrefrequest) | Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID. |
| `replace_promotion_id` | Optional | string | Active or scheduled promotion to replace. It stops applying from first_cycle and continues to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion cannot be replaced. minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

const result = await client.subscriptions.applyPromotion("sub_01KEZF7C00BVRE8YDBXQB74BBM", {promotion: {promotion_code: "RETENTION20"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-applyPromotion.mjs)

### subscriptions.cancel

Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or fail with `ACTION_NOT_ALLOWED` and reason `period_end_unavailable`. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/cancel`

Signature: `cancel(subscription_id: InputValue<string>, params?: SubscriptionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest) | Cancellation timing and the optional reason and comment recorded with the request. |

Body model: [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest).

#### subscriptions.cancel body fields

Field definitions: [shared fields](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest).

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

const result = await client.subscriptions.cancel("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-cancel.mjs)

### subscriptions.changePlan

Replaces the subscription's lines and recurring options with the active target plan's current terms. Paired lines keep their quantities unless line_items overrides them. Pair by the same plan line on the same plan, then variant or bundle, then the only line on each side. Unpaired target lines use their plan quantity. If an adjusted current line cannot be paired, send quantities for every target line; otherwise the request fails with quantity_not_carried before any change. With billing_starts next_renewal, changes terms now without charging and keeps the current period and next billing date. With billing_starts prorated_now, charges the new terms for the rest of the current period, less unused paid item credit, while keeping the billing period and anchor; the resulting interval must stay unchanged. With billing_starts now, charges a new period and credits unused paid item time after promotions; the plan changes only when payment succeeds. If the credit exceeds the new item charge, choose next_renewal. Omit interval and quantity to keep their current values; the target plan must offer them. Contract terms and existing recurring promotions are preserved. Requires Idempotency-Key; retry with the same key to recover the same result. Returns status 200 for a decline, with a closed unpaid order, failed order_payment_attempt, and unchanged subscription. Inspect order_payment_attempt.last_payment_error and update the subscription payment method before trying again. Send expected_version to reject a concurrent change. After a confirmed CONCURRENT_MODIFICATION with billing_starts now, refresh the subscription and send a new Idempotency-Key.

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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest) | The request body for: Change subscription plan. |

Body model: [ChangeSubscriptionPlanRequestInput](../models/ChangeSubscriptionPlanRequest.md#changesubscriptionplanrequest).

#### subscriptions.changePlan body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Required | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. period_end keeps the current plan until the next charged renewal, then applies and bills the scheduled terms. prorated_now charges the new terms for the rest of the current period, less unused paid item credit, and keeps the billing period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequest.md#subscriptionplanchangelineitemrequest) | Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. |
| `quantity` | Optional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Required | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

### subscriptions.changeQuantity

Changes the subscription quantity multiplier, existing line quantities, or both, with the chosen billing timing. billing_starts is required: prorated_now charges now, next_renewal changes quantities immediately without charging, and period_end schedules them for the next billing boundary in scheduled_plan_change. Cancel pending quantities with PATCH scheduled_plan_change: null. A pending change locks quantity edits with plan_change_scheduled. Keeps the current billing period, next billing date, anchor and completed cycles. Omitted quantities stay unchanged. Send quantity or 1 to 50 distinct line_items. With prorated_now, a shipping line cannot be changed, and quantity cannot be supplied when any subscription line ships. Physical quantities can use next_renewal or period_end. Digital line quantities can be changed on a subscription with other lines that ship; its shipping lines stay unchanged and this charge creates no shipment or shipping charge. Quantities that do not charge can still be updated with subscription PATCH or the line-item routes. Requires Idempotency-Key; retry with the same key to recover the original outcome. Returns 200 on decline with a closed unpaid order, failed order_payment_attempt, and unchanged subscription. Inspect order_payment_attempt.last_payment_error before trying again. The order and order_payment_attempt are null when the net charge is zero. Send expected_version to reject a concurrent change. If the outcome remains uncertain, retrieve the subscription and its orders; contact Flint support with the original key and request ID when those reads cannot establish the result.

`POST /v1/subscriptions/{subscription_id}/change-quantity`

Signature:

```typescript
changeQuantity(subscription_id: InputValue<string>,
 params: SubscriptionsChangeQuantityParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ChangeSubscriptionQuantityRequestInput](../models/ChangeSubscriptionQuantityRequest.md#changesubscriptionquantityrequest) | The request body for: Change subscription quantity. |

Body model: [ChangeSubscriptionQuantityRequestInput](../models/ChangeSubscriptionQuantityRequest.md#changesubscriptionquantityrequest).

#### subscriptions.changeQuantity body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Optional | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`. |
| `quantity` | Optional | integer | The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: `1`. maximum: `100`. |

#### subscriptions.changeQuantity: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Optional | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`. |
| `quantity` | Required | integer | The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: `1`. maximum: `100`. |

#### subscriptions.changeQuantity: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | prorated_now charges the prorated difference now and keeps the current period and anchor; next_renewal changes quantities now without charging; period_end schedules them for the next billing boundary. Values: `"prorated_now"`, `"next_renewal"`, `"period_end"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Required | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`. |
| `quantity` | Optional | integer | The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items. minimum: `1`. maximum: `100`. |

#### Response

Returned payload: [SubscriptionQuantityChangeResult](../models/SubscriptionQuantityChangeResult.md#subscriptionquantitychangeresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

const result = await client.subscriptions.changeQuantity("sub_01KEZF7C00BVRE8YDBXQB74BBM", {billing_starts: "prorated_now", expected_version: 1, quantity: 2}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-changeQuantity.mjs)

### subscriptions.create

Creates a subscription for a customer outside checkout. Send `customer_id`, the `terms` (a subscription plan or subscription offers), and `billing_start`, which says whether billing begins now, on a later date, or continues a period the buyer already paid elsewhere. Renewals charge `payment_method_id`, or the customer's default payment method when you omit it. Free trials without an upfront charge and `imported` starts can begin without a card when the customer has no default payment method; other starts fail with `INVALID_REQUEST` naming `payment_method_id`. A setup fee or other creation-time charge requires a card; scheduled starts also require one. Bind a card before `payment_method_due_at`: a trial without one cancels at that boundary without an attempted charge, while an imported subscription follows its normal dunning schedule. Flint requests the card three days before the boundary, or when a shorter trial begins. A default payment method that can't be used fails the request on every start. The payment method must belong to the customer, be active, and allow charges without the buyer present. A plan that is not active fails with `ACTION_NOT_ALLOWED`. Subscriptions require a customer with an email address in both customer account modes; otherwise creation returns 409 CUSTOMER_EMAIL_REQUIRED. Optional promotions (up to five) freeze current terms and qualify against the projected order for first_cycle. Imports alone accept consumed_cycles to carry over the buyer's used allowance. Attaching counts one promotion use and, when sent by code, one code use.

`POST /v1/subscriptions`

Signature: `create(params: SubscriptionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequest.md#createsubscriptionrequest) | The request body for: Create subscription. |

Body model: [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequest.md#createsubscriptionrequest).

#### subscriptions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Optional | integer | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: `int32`. minimum: `1`. maximum: `31`. |
| `billing_schedule` | Optional | [SubscriptionBillingScheduleRequestInput](../models/SubscriptionBillingScheduleRequest.md#subscriptionbillingschedulerequest) | Who sets billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Omit it to use your subscription settings' `default_billing_schedule_owner`. Who owns the billing schedule when creating a subscription: Flint or an external system. |
| `billing_start` | Required | [SubscriptionBillingStartRequestInput](../models/SubscriptionBillingStartRequest.md#subscriptionbillingstartrequest) | When billing begins. `immediate` starts now; `scheduled` starts at `starts_at` and charges nothing before then; `imported` continues a period the buyer already paid elsewhere, from `period_started_at`, without charging. Each type takes only its own fields. How billing begins. Send exactly one closed tagged-union branch. |
| `customer_id` | Required | string | The customer to bill. The payment method must belong to this customer. minLength: `1`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `end_after` | Optional | [SubscriptionEndAfterRequestInput](../models/SubscriptionEndAfterRequest.md#subscriptionendafterrequest) or null | Automatic end condition. Omit it to inherit the plan default; send null for no automatic end. Imported subscriptions accept the same condition. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_method_id` | Optional | string | Saved payment method for renewals. Omit it to use the customer's default. A free trial without an upfront charge or an imported paid period may start without either; other starts require a card. An explicit method must belong to the customer, be active, and allow charges without the buyer present. minLength: `1`. |
| `promotions` | Optional | Array of [SubscriptionPromotionRequestInput](../models/SubscriptionPromotionRequest.md#subscriptionpromotionrequest) | Promotions to attach with their current terms frozen. Duplicate promotions are invalid. An offer's own promotion attaches automatically; listing it again returns already_applied. maxItems: `5`. uniqueItems: `true`. |
| `prorate_first_period` | Optional | boolean | Prorate the first paid period to the next billing anchor. Requires `billing_anchor_day`, a monthly or yearly interval, `billing_schedule.owner: flint`, and no shipping. Imported billing starts are not allowed. Trials and scheduled starts prorate from their first paid start; setup fees remain full. Default: `false`. |
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

Creates a link to one subscription in your Flint-hosted customer account, to put in buyer email or messages you send yourself. Omit purpose or send subscription_view for read-only access without a sign-in. Send subscription_manage to also let the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state. subscription_manage requires commerce.subscriptions.write; subscription_view requires commerce.subscriptions.read. Neither purpose permits other subscription changes or access to another subscription. Both work for 14 days or 5 opens, whichever comes first; after that the buyer signs in. The url is a bearer credential. Flint returns it only in this response and in a retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it fails with `ACTION_NOT_ALLOWED` and reason `merchant_hosted_customer_accounts`. Send no request body, an empty object ({}), or an optional purpose and return_url. Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an idempotency key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with the request ID before sending a new request.

`POST /v1/subscriptions/{subscription_id}/access-links`

Signature: `createAccessLink(subscription_id: InputValue<string>, params?: SubscriptionsCreateAccessLinkParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest) | The access a subscription link gives its buyer. Omit the body or purpose for read-only access. |

Body model: [CreateSubscriptionAccessLinkRequestInput](../models/CreateSubscriptionAccessLinkRequest.md#createsubscriptionaccesslinkrequest).

#### subscriptions.createAccessLink body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purpose` | Optional | string | subscription_view opens the subscription read-only. subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5 opens. Default: `"subscription_view"`. Values: `"subscription_view"`, `"subscription_manage"`. |
| `return_url` | Optional | string | Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: `uri`. minLength: `1`. maxLength: `2048`. |

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

const result = await client.subscriptions.createAccessLink("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest) | The request body for: Add subscription line item. |

Body model: [CreateSubscriptionLineItemRequestInput](../models/CreateSubscriptionLineItemRequest.md#createsubscriptionlineitemrequest).

#### subscriptions.createLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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

const result = await client.subscriptions.createPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

const result = await client.subscriptions.deleteLineItem("sub_01KEZF7C00BVRE8YDBXQB74BBM", "sli_01KEZF7C00PPWVJ2N321V84ASA", {}, { idempotencyKey: idempotencyKey });
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
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, payment_method, subscription_plan. Expansion requires commerce.subscriptions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. Values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
const result = await client.subscriptions.get("sub_01KEZF7C00BVRE8YDBXQB74BBM", {}, {  });
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionPaymentRetry](../models/SubscriptionPaymentRetry.md#subscriptionpaymentretry).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.subscriptions.getPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM", "spr_01KEZF7C00YXMSBXGYEMYDD0AA", {}, {  });
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
| `terms_type` | Optional | Array of string or string | Filter by where the subscription terms come from: a subscription plan or subscription offers. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"subscription_plan"`, `"subscription_offer"`. Values: `"subscription_plan"`, `"subscription_offer"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by subscription status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string or string | Filter by the system that supplies billing dates. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"flint"`, `"external"`. Values: `"flint"`, `"external"`. |
| `is_awaiting_billing_schedule` | Optional | boolean | Filter external schedules by whether they need another billing date. |
| `cancel_at_period_end` | Optional | boolean | When true, returns subscriptions scheduled to cancel at the end of the current period that are not yet canceled. When false, returns every other subscription. |
| `customer_id` | Optional | string | Filter by Flint customer ID. |
| `delivery_method_id` | Optional | string | Filter by the subscription's selected delivery method. |
| `hold_reason` | Optional | Array of string or string | Filter by the reason of the current delivery_hold. Does not match upcoming delivery issues. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
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
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, payment_method, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"payment_method"`, `"subscription_plan"`. Values: `"customer"`, `"payment_method"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionListResponse](../models/SubscriptionListResponse.md#subscriptionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [SubscriptionPaymentRetryListResponse](../models/SubscriptionPaymentRetryListResponse.md#subscriptionpaymentretrylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.subscriptions.listPaymentRetries("sub_01KEZF7C00BVRE8YDBXQB74BBM", {}, {  });
```

[Complete runnable example](../examples/subscriptions-listPaymentRetries.mjs)

### subscriptions.pause

Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/subscriptions/{subscription_id}/pause`

Signature: `pause(subscription_id: InputValue<string>, params?: SubscriptionsPauseParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequest.md#pausesubscriptionrequest) | The request body for: Pause one of the current buyer's subscriptions; Pause subscription. |

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

const result = await client.subscriptions.pause("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-pause.mjs)

### subscriptions.removePromotions

Removes 1 to 5 unique active or scheduled promotions from a subscription. Future renewal orders omit them; paid orders and the unpaid past_due order keep their discounts. Removal keeps consumed cycles for reattachment and does not return a promotion use. Offer promotions cannot be removed. Requires commerce.subscriptions.write.

`POST /v1/subscriptions/{subscription_id}/promotions/remove`

Signature: `removePromotions(subscription_id: InputValue<string>, params: SubscriptionsRemovePromotionsParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [RemoveSubscriptionPromotionsRequestInput](../models/RemoveSubscriptionPromotionsRequest.md#removesubscriptionpromotionsrequest) | The request body for: Remove subscription promotions. |

Body model: [RemoveSubscriptionPromotionsRequestInput](../models/RemoveSubscriptionPromotionsRequest.md#removesubscriptionpromotionsrequest).

#### subscriptions.removePromotions body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Remove only if this matches the subscription's current version. Format: `uint64`. minimum: `1`. |
| `promotion_ids` | Required | Array of string | Active or scheduled promotions to remove. Renewal orders created after removal omit them; paid orders and the unpaid past_due order keep their discounts. Consumed cycles are kept for reattachment. minItems: `1`. maxItems: `5`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

const result = await client.subscriptions.removePromotions("sub_01KEZF7C00BVRE8YDBXQB74BBM", {promotion_ids: ["promo_01ARZ3NDEKTSV4RRFFQ69G5FAV"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-removePromotions.mjs)

### subscriptions.renew

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires an idempotency key; retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/subscriptions/{subscription_id}/renew`

Signature:

```typescript
renew(subscription_id: InputValue<string>,
 params: SubscriptionsRenewParams |
  undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Renew subscription now. |

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

const result = await client.subscriptions.renew("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-renew.mjs)

### subscriptions.resume

Asks Flint to resume a paused subscription. The request is accepted while the subscription is still paused, with `resume_requested_at` set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with `ACTION_NOT_ALLOWED`. To undo a scheduled cancellation, PATCH the subscription with cancel_at_period_end set to false.

`POST /v1/subscriptions/{subscription_id}/resume`

Signature: `resume(subscription_id: InputValue<string>, params?: SubscriptionsResumeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

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

const result = await client.subscriptions.resume("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-resume.mjs)

### subscriptions.skipCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals. A Flint-owned schedule keeps its billing_anchor_day, including when the skipped date falls in a shorter month. Available while the subscription is active, is not set to cancel at the end of its period, and has a next billing date.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Signature: `skipCycle(subscription_id: InputValue<string>, params?: SubscriptionsSkipCycleParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [SkipSubscriptionCycleRequestInput](../models/SkipSubscriptionCycleRequest.md#skipsubscriptioncyclerequest) | The request body for: Skip subscription cycle. |

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

const result = await client.subscriptions.skipCycle("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/subscriptions-skipCycle.mjs)

### subscriptions.update

Updates metadata, external_reference_id, payment_method_id, delivery, billing interval, quantity, cancel_at_period_end: false to undo a scheduled cancellation, or scheduled_plan_change: null to keep the current plan. Send billing_interval and billing_interval_count together. A billing_schedule update must be the only mutable field. Delivery, cadence and quantity changes apply to future unpaid renewals. Send expected_version to reject concurrent changes. Schedule a cancellation with POST /v1/subscriptions/{subscription_id}/cancel, change the plan with /change-plan, and manage lines through the line-items collection. A card whose setup hasn't finished fails with `ACTION_NOT_ALLOWED` and reason `status_not_reached`. Once setup finishes, send a new request with a new idempotency key.

`PATCH /v1/subscriptions/{subscription_id}`

Signature: `update(subscription_id: InputValue<string>, params: SubscriptionsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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
| `end_after` | Optional | [SubscriptionEndAfterRequestInput](../models/SubscriptionEndAfterRequest.md#subscriptionendafterrequest) or null | Replace the complete automatic end condition, or send null to clear it. Requires expected_version. Buyers cannot change this field. |
| `expected_version` | Optional | integer | The current subscription version. Required when end_after is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `scheduled_plan_change` | Optional | null | Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan. |

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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest) | The request body for: Update subscription line item. |

Body model: [UpdateSubscriptionLineItemRequestInput](../models/UpdateSubscriptionLineItemRequest.md#updatesubscriptionlineitemrequest).

#### subscriptions.updateLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

