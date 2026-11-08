[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# me

### me.cancelReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Signature: `cancelReturn(return_id: InputValue<string>, params?: MeCancelReturnParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Optional | [BuyerCancelReturnRequestInput](../models/BuyerCancelReturnRequest.md#buyercancelreturnrequest) | Withdraw a requested Return belonging to the current buyer. An omitted reason defaults to buyer_request. |

Body model: [BuyerCancelReturnRequestInput](../models/BuyerCancelReturnRequest.md#buyercancelreturnrequest).

#### me.cancelReturn body fields

Field definitions: [shared fields](../models/BuyerCancelReturnRequest.md#buyercancelreturnrequest).

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.cancelReturn("ret_01KEZF7C00PG93650ZKVQNGF7X", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-cancelReturn.mjs)

### me.cancelSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or fail with `ACTION_NOT_ALLOWED` and reason `period_end_unavailable`. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Signature: `cancelSubscription(subscription_id: InputValue<string>, params?: MeCancelSubscriptionParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | [CancelMeSubscriptionRequestInput](../models/CancelMeSubscriptionRequest.md#cancelmesubscriptionrequest) | Cancellation timing and the optional reason and comment recorded with the request. |

Body model: [CancelMeSubscriptionRequestInput](../models/CancelMeSubscriptionRequest.md#cancelmesubscriptionrequest).

#### me.cancelSubscription body fields

Field definitions: [shared fields](../models/CancelMeSubscriptionRequest.md#cancelmesubscriptionrequest).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.cancelSubscription("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-cancelSubscription.mjs)

### me.changeSubscriptionPlan

Changes to a plan in the subscription's plan_change_options. Flint uses that option's billing_starts: now charges a new period with credit for unused paid item time and changes the plan only when payment succeeds; prorated_now charges the difference for the rest of the current period, keeps the period and anchor, and requires an unchanged interval; next_renewal changes the plan immediately without charging and keeps the current period and next billing date. Omit interval and quantity to keep their current values; the target plan must offer them. Requires a full buyer session and Idempotency-Key. Send expected_version to reject a concurrent change. Retry with the same key to recover the same result. Returns 200 including on decline, with the unchanged subscription, a closed unpaid order, and a failed order_payment_attempt. Inspect order_payment_attempt.last_payment_error before trying again. The order and order_payment_attempt are null when billing starts at the next renewal.

`POST /v1/me/subscriptions/{subscription_id}/change-plan`

Signature:

```typescript
changeSubscriptionPlan(subscription_id: InputValue<string>,
 params: MeChangeSubscriptionPlanParams,
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [ChangeMeSubscriptionPlanRequestInput](../models/ChangeMeSubscriptionPlanRequest.md#changemesubscriptionplanrequest) | The request body for: Change subscription plan. |

Body model: [ChangeMeSubscriptionPlanRequestInput](../models/ChangeMeSubscriptionPlanRequest.md#changemesubscriptionplanrequest).

#### me.changeSubscriptionPlan body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `quantity` | Optional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Required | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [BuyerSubscriptionPlanChangeResult](../models/BuyerSubscriptionPlanChangeResult.md#buyersubscriptionplanchangeresult).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionPlan("sub_01KEZF7C00BVRE8YDBXQB74BBM", {billing_interval: "monthly", billing_interval_count: 1, expected_version: 1, subscription_plan_id: "plan_01KEZF7C00H4XP3KVYSYYWA181"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionPlan.mjs)

### me.changeSubscriptionQuantity

Changes the frozen adjustable subscription line within its min_quantity and max_quantity. Requires a full buyer session and Idempotency-Key. period_end schedules quantities for the next billing boundary using scheduled_plan_change; PATCH scheduled_plan_change to null to cancel. prorated_now charges the difference now for an eligible digital line and keeps the period and billing anchor. Physical quantities require period_end. Refuses with plan_change_scheduled while another change is pending. Retry with the same key to recover the original result. Returns 200 on decline with unchanged subscription; inspect order_payment_attempt.last_payment_error. The order and order_payment_attempt are null for period_end or zero net charge. Send expected_version to reject concurrent changes.

`POST /v1/me/subscriptions/{subscription_id}/change-quantity`

Signature:

```typescript
changeSubscriptionQuantity(subscription_id: InputValue<string>,
 params: MeChangeSubscriptionQuantityParams,
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [ChangeMeSubscriptionQuantityRequestInput](../models/ChangeMeSubscriptionQuantityRequest.md#changemesubscriptionquantityrequest) | The request body for: Change subscription quantity. |

Body model: [ChangeMeSubscriptionQuantityRequestInput](../models/ChangeMeSubscriptionQuantityRequest.md#changemesubscriptionquantityrequest).

#### me.changeSubscriptionQuantity body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | period_end schedules the new quantities for the next billing boundary; prorated_now charges the difference now for an eligible digital line. Values: `"period_end"`, `"prorated_now"`. |
| `expected_version` | Optional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `line_items` | Required | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |

#### Response

Returned payload: [BuyerSubscriptionQuantityChangeResult](../models/BuyerSubscriptionQuantityChangeResult.md#buyersubscriptionquantitychangeresult).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionQuantity("sub_01KEZF7C00BVRE8YDBXQB74BBM", {billing_starts: "period_end", expected_version: 1, line_items: [{quantity: 2, subscription_line_item_id: "sli_01KEZF7C00VQ081BX7W2T96R71"}]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionQuantity.mjs)

### me.confirmEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false. A successful confirmation signs the buyer out everywhere at this store: it revokes every customer session, buyer access grant, and Flint-hosted account session for the customer, including the session that made this request. Sign the buyer in again with the new email.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Signature:

```typescript
confirmEmailChangeRequest(email_change_request_id: InputValue<string>,
 params: MeConfirmEmailChangeRequestParams,
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_change_request_id` | Required | string | Flint email change request ID. |
| `body` | Required | [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequest.md#confirmemailchangerequest) | The request body for: Confirm an email change. |

Body model: [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequest.md#confirmemailchangerequest).

#### me.confirmEmailChangeRequest body fields

Field definitions: [shared fields](../models/ConfirmEmailChangeRequest.md#confirmemailchangerequest).

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.confirmEmailChangeRequest("cecr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {new_email_code: "123456"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-confirmEmailChangeRequest.mjs)

### me.createAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Saves an address for the buyer. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later by setting those flags with PATCH, including the buyer's first address. A default address is also the billing or shipping address on the buyer's customer profile.

`POST /v1/me/addresses`

Signature: `createAddress(params: MeCreateAddressParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequest) | The request body for: Create a customer address; Create an address for the current buyer. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createAddress({address: {city: "Springfield", country: "US", line1: "100 Example Street", postal_code: "62701", state: "IL"}, recipient_name: "Jordan Example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createAddress.mjs)

### me.createDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks the store to delete the buyer's account, or returns the request already pending. The store approves or rejects it. Deletion anonymizes the customer: orders, payments, and refunds stay without the buyer's identity.

`POST /v1/me/deletion-requests`

Signature: `createDeletionRequest(params?: MeCreateDeletionRequestParams, options?: RequestOptions<"customer">)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest) | [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createDeletionRequest({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createDeletionRequest.mjs)

### me.createEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds. Limited to three attempts per 15 minutes, including attempts rejected because the email is already used. A rejected attempt keeps any pending email change request. Over the limit, the request fails with `RATE_LIMIT_EXCEEDED`; wait the whole seconds until the oldest counted attempt leaves the window, at least 1, before trying again.

`POST /v1/me/email-change-requests`

Signature: `createEmailChangeRequest(params: MeCreateEmailChangeRequestParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequest.md#createemailchangerequest) | The request body for: Request an email change. |

Body model: [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequest.md#createemailchangerequest).

#### me.createEmailChangeRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `new_email` | Required | string | The address to change the email to. Flint emails a six-digit code to it. Format: `email`. minLength: `1`. maxLength: `320`. |

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createEmailChangeRequest({new_email: "alex.new@example.com"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createEmailChangeRequest.mjs)

### me.createFlintWalletStoreSetup

Records the buyer's consent to save an independent store copy for off-session payments, including subscriptions. Call only after the buyer agrees. Requires a live email-code buyer login and an enabled Flint wallet at a Flint-hosted store account. Supply a flint_wallet_card_id from listMeFlintWalletCards. Confirm client_setup with Stripe.js confirmSetup, then poll GET /v1/me/payment-methods/{payment_method_id} until active before changing a subscription through PATCH /v1/me/subscriptions/{subscription_id} with payment_method_id. Setup may request authentication. Removing the platform card or revoking store consent blocks the copy immediately. An idempotency key is optional and scoped to the store, customer, card handle, and key. Responses are retained for 24 hours. After a copy is revoked, retries with any key bound to that copy are refused. Get new consent and use a new key to create another copy. Retry a lost response with the same key. Concurrent requests for the same card at this store share one copy and setup. A failed off-session charge can still require the buyer to return through the existing card-update link. Accept an empty body or {}.

`POST /v1/me/flint-wallet/cards/{flint_wallet_card_id}/store-setups`

Signature:

```typescript
createFlintWalletStoreSetup(flint_wallet_card_id: InputValue<string>,
 params?: MeCreateFlintWalletStoreSetupParams,
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `flint_wallet_card_id` | Required | string | The card's handle at this store. |

#### Response

Returned payload: [BuyerFlintWalletStoreSetup](../models/BuyerFlintWalletStoreSetup.md#buyerflintwalletstoresetup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createFlintWalletStoreSetup("fwc_EKAB7CMBXELKYMJUU2LYLJP5J25FESR6YR5WENVFIUZHTTG3BZWA", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createFlintWalletStoreSetup.mjs)

### me.createInvoiceCheckoutSession

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request fails with `ACTION_NOT_ALLOWED` and reason `configuration_required` when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.

`POST /v1/me/invoices/{invoice_id}/checkout-sessions`

Signature:

```typescript
createInvoiceCheckoutSession(invoice_id: InputValue<string>,
 params?: MeCreateInvoiceCheckoutSessionParams,
 options?: RequestOptions<"customer" |
  "invoice">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `body` | Optional | [InvoiceCheckoutSessionRequestInput](../models/InvoiceCheckoutSessionRequest.md#invoicecheckoutsessionrequest) | The request body for: Create an invoice checkout session for the current buyer; Get or create invoice checkout collection. |

#### Response

Returned payload: [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult) | [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult).

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

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createInvoiceCheckoutSession("inv_01KEZF7C00A5GEBMWHEAJFSAR4", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createInvoiceCheckoutSession.mjs)

### me.createPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Starts saving a payment method for the buyer and returns the client setup to confirm in the browser. The payment method is pending until setup succeeds.

`POST /v1/me/payment-methods`

Signature: `createPaymentMethod(params?: MeCreatePaymentMethodParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Optional | [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequest.md#savemepaymentmethodrequest) | The request body for: Create a payment method for the current buyer. |

Body model: [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequest.md#savemepaymentmethodrequest).

#### me.createPaymentMethod body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string | Kind of payment method to save. card is the only value and the default. Values: `"card"`. |

#### Response

Returned payload: [BuyerPaymentMethodWithSetup](../models/BuyerPaymentMethodWithSetup.md#buyerpaymentmethodwithsetup).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createPaymentMethod(undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createPaymentMethod.mjs)

### me.createReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Requests a Return for one of the buyer's orders. An active return policy must cover each line and leave the requested quantity eligible, or the request fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Check can_buyer_request with POST /v1/me/return-previews first. The buyer's reason must be active and apply to the line, and a policy that sends the request to review leaves the Return waiting for the store's decision.

`POST /v1/me/returns`

Signature: `createReturn(params: MeCreateReturnParams, options: _SdkRequiredIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequest.md#buyercreatereturnrequest) | The request body for: Create a Return for the current buyer. |

Body model: [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequest.md#buyercreatereturnrequest).

#### me.createReturn body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | The lines to check or return, each naming an order line item. minItems: `1`. maxItems: `100`. |
| `order_id` | Required | string | ID of the Order to return items from. minLength: `1`. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createReturn({line_items: [{buyer_note: "I changed my mind.", order_line_item_id: "li_01KEZF7C00XM6VK5KNWVC3T907", requested_quantity: 1, requested_resolution_type: "refund", return_reason_id: "rrsn_01KEZF7C005274REWXTZRJ4BM0"}], order_id: "ord_01KEZF7C00RWKW7JDYTZ5A6ET0"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createReturn.mjs)

### me.createReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Signature: `createReturnPreview(params: MeCreateReturnPreviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequest.md#buyercreatereturnpreviewrequest) | The request body for: Preview Return eligibility or resolution amounts for the current buyer. |

Body model: [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequest.md#buyercreatereturnpreviewrequest).

#### me.createReturnPreview body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

#### me.createReturnPreview with `mode: "eligibility"`

The `eligibility` variant of `BuyerCreateReturnPreviewRequest`.

Body model: [BuyerCreateReturnPreviewRequestEligibilityInput](../models/BuyerCreateReturnPreviewRequestEligibility.md#buyercreatereturnpreviewrequesteligibility).

#### me.createReturnPreview with `mode: "resolution"`

The `resolution` variant of `BuyerCreateReturnPreviewRequest`.

Body model: [BuyerCreateReturnPreviewRequestResolutionInput](../models/BuyerCreateReturnPreviewRequestResolution.md#buyercreatereturnpreviewrequestresolution).

#### Response

Returned payload: [BuyerReturnPreview](../models/BuyerReturnPreview.md#buyerreturnpreview).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.createReturnPreview({eligibility: {order_id: "ord_01KEZF7C00RWKW7JDYTZ5A6ET0", selection: {line_items: [{order_line_item_id: "li_01KEZF7C00XM6VK5KNWVC3T907", requested_quantity: 1, return_reason_id: "rrsn_01KEZF7C005274REWXTZRJ4BM0"}], selection_type: "line_items"}}, mode: "eligibility"}, {  });
```

[Complete runnable example](../examples/me-createReturnPreview.mjs)

### me.createReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement order linked to this return resolution. The response is `200` when it reuses an existing session and `201` when it creates one. Omit surface to use hosted. The same surface reuses the open session; changing surface replaces an idle session and is refused while a payment is in progress. Use redirects to set where the buyer goes after paying or canceling. The return_url field is an alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout and must be an address of the merchant's customer account. A reused session takes a new success destination only until a payment starts, then keeps its existing destination.

`POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions`

Signature:

```typescript
createReturnResolutionCheckoutSession(return_resolution_id: InputValue<string>,
 params?: MeCreateReturnResolutionCheckoutSessionParams,
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Optional | [GetOrCreateReturnResolutionCheckoutSessionRequestInput](../models/GetOrCreateReturnResolutionCheckoutSessionRequest.md#getorcreatereturnresolutioncheckoutsessionrequest) | The request body for: Create a Return resolution checkout session for the current buyer; Get or create return resolution checkout session. |

#### Response

Returned payload: [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret) | [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createReturnResolutionCheckoutSession("retres_01KEZF7C00C7RZJN31W9SGMEQ3", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createReturnResolutionCheckoutSession.mjs)

### me.createSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome. While cancellation is scheduled, a new buyer retry fails with `ACTION_NOT_ALLOWED` and reason `cancellation_scheduled`, with `current_status` `past_due`. First use PATCH /v1/me/subscriptions/{subscription_id} with cancel_at_period_end false to keep the subscription; retry_payment becomes available again if the other retry conditions allow it. Only one retry may be in progress at a time. Buyers can start a retry while fewer than 3 retries have been created for the current billing period, counting the store's retries too. subscription_card_update email-link sessions can start retries.

`POST /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
createSubscriptionPaymentRetry(subscription_id: InputValue<string>,
 params: MeCreateSubscriptionPaymentRetryParams |
  undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createSubscriptionPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createSubscriptionPaymentRetry.mjs)

### me.createSubscriptionPreview

Estimates a buyer's next subscription renewal, an offered plan change, or a quantity change, or lists delivery methods and rates for a proposed destination, without changing the subscription. plan_change uses the selected plan_change_options entry's billing_starts and the same checks and pricing as change-plan, including unused paid item credit when billing starts now or prorated_now. quantity_change accepts the change-quantity inputs with billing_starts prorated_now and returns the charge change-quantity would collect now, with the same refusals: only adjustable lines within min_quantity and max_quantity, and only eligible digital lines. next_renewal includes recurring promotions, shipping, and tax for the next charged cycle. Tax is null when tax can't be calculated yet; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Requires a full buyer session. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/me/subscription-previews`

Signature: `createSubscriptionPreview(params: MeCreateSubscriptionPreviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest) | The request body for: Preview subscription. |

Body model: [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest).

#### me.createSubscriptionPreview with `mode: "delivery_options"`

The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestDeliveryOptionsInput](../models/CreateMeSubscriptionPreviewRequestDeliveryOptionsInput.md#createmesubscriptionpreviewrequestdeliveryoptionsinput).

#### me.createSubscriptionPreview with `mode: "next_renewal"`

The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestNextRenewalInput](../models/CreateSubscriptionPreviewRequestNextRenewal.md#createsubscriptionpreviewrequestnextrenewal).

#### me.createSubscriptionPreview with `mode: "plan_change"`

The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestPlanChangeInput](../models/CreateMeSubscriptionPreviewRequestPlanChange.md#createmesubscriptionpreviewrequestplanchange).

#### me.createSubscriptionPreview with `mode: "quantity_change"`

The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestQuantityChangeInput](../models/CreateMeSubscriptionPreviewRequestQuantityChange.md#createmesubscriptionpreviewrequestquantitychange).

#### Response

Returned payload: (([SubscriptionPreview](../models/SubscriptionPreview.md#subscriptionpreview)) | ([SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview)) | ([SubscriptionPlanChangePreview](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreview)) | ([SubscriptionQuantityChangePreview](../models/SubscriptionQuantityChangePreview.md#subscriptionquantitychangepreview)) | (Record&lt;string, unknown&gt;)).

##### Response variant 1

Available subscription delivery methods shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Required | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string | Always delivery_options for buyer previews. Values: `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

##### Response variant 2

A preview of a subscription's next renewal and its estimated pricing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |

##### Response variant 3

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end. |
| `effective_at` | Required | string or null | When the plan is expected to take effect. Null when no billing time is scheduled. Format: `date-time`. |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |

##### Response variant 4

Estimated pricing for a quantity change that keeps the billing period and anchor.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | When this quantity change is billed. Values: `"prorated_now"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credit for unused paid subscription time. Null when there is no paid period to credit. |
| `effective_at` | Required | string or null | When the quantities are expected to take effect. Null when no billing time is available. Format: `date-time`. |
| `interval` | Required | string | The subscription billing interval after the quantity change. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `interval_count` | Required | integer | The number of interval units in each billing period. Format: `int32`. |
| `mode` | Required | string | The kind of subscription pricing estimate. Values: `"quantity_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string | The subscription whose quantities were estimated. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.createSubscriptionPreview({mode: "next_renewal", subscription_id: "sub_00000000000000000000000000"}, {  });
```

[Complete runnable example](../examples/me-createSubscriptionPreview.mjs)

### me.deleteAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes one of the buyer's saved addresses. Deleting the billing or shipping default leaves the customer with none; Flint doesn't pick another address.

`DELETE /v1/me/addresses/{customer_address_id}`

Signature: `deleteAddress(customer_address_id: InputValue<string>, params?: MeDeleteAddressParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | Flint customer address ID. |
| `expected_version` | Optional | integer | Optional address version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.deleteAddress("caddr_01KEZF7C00K2Q127FBJAXWB0FP", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-deleteAddress.mjs)

### me.deletePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Signature: `deletePaymentMethod(payment_method_id: InputValue<string>, params?: MeDeletePaymentMethodParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | Flint payment method ID. |

#### Response

Returned payload: [BuyerPaymentMethod](../models/BuyerPaymentMethod.md#buyerpaymentmethod).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.deletePaymentMethod("pm_01KEZF7C0034B248TXXE4NXYFZ", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-deletePaymentMethod.mjs)

### me.get

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the buyer's customer profile.

`GET /v1/me`

Signature: `get(params?: MeGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerCustomer](../models/BuyerCustomer.md#buyercustomer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.get({}, {  });
```

[Complete runnable example](../examples/me-get.mjs)

### me.getAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved addresses.

`GET /v1/me/addresses/{customer_address_id}`

Signature:

```typescript
getAddress(customer_address_id: InputValue<string>,
 params?: MeGetAddressParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | Flint customer address ID. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getAddress("caddr_01KEZF7C00K2Q127FBJAXWB0FP", {}, {  });
```

[Complete runnable example](../examples/me-getAddress.mjs)

### me.getCreditNote

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Signature:

```typescript
getCreditNote(invoice_id: InputValue<string>,
 credit_note_id: InputValue<string>,
 params?: MeGetCreditNoteParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" |
  "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `credit_note_id` | Required | string | Flint credit note ID. |

#### Response

Returned payload: [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getCreditNote("inv_01KEZF7C00A5GEBMWHEAJFSAR4", "cn_01KEZF7C00N1TRRCVDNY8S471H", {}, {  });
```

[Complete runnable example](../examples/me-getCreditNote.mjs)

### me.getCreditNotePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and shows the credited lines, totals, and the invoice it corrects. It uses your current branding, so a later download can differ in logo or colors, but not in content.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Signature:

```typescript
getCreditNotePDF(invoice_id: InputValue<string>,
 credit_note_id: InputValue<string>,
 params?: MeGetCreditNotePDFParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" |
  "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `credit_note_id` | Required | string | Flint credit note ID. |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getCreditNotePDF("inv_01KEZF7C00A5GEBMWHEAJFSAR4", "cn_01KEZF7C00N1TRRCVDNY8S471H", {}, {  });
```

[Complete runnable example](../examples/me-getCreditNotePDF.mjs)

### me.getDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the status of one of the buyer's deletion requests.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Signature:

```typescript
getDeletionRequest(customer_deletion_request_id: InputValue<string>,
 params?: MeGetDeletionRequestParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string | Flint customer deletion request ID. |

#### Response

Returned payload: [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getDeletionRequest("cdel_01KEZF7C009P94WEXW5RMRFXAY", {}, {  });
```

[Complete runnable example](../examples/me-getDeletionRequest.mjs)

### me.getEmailPreferences

Uses the customer identity fixed by the customer session. Returns which of the merchant's optional email categories the customer's current email receives in the selected merchant environment. A category the buyer never changed is on. Email preferences exist only for a customer with an email: without one, the read fails with `RESOURCE_NOT_FOUND`. Receipts and other transactional email always send.

`GET /v1/me/email-preferences`

Signature: `getEmailPreferences(params?: MeGetEmailPreferencesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getEmailPreferences({}, {  });
```

[Complete runnable example](../examples/me-getEmailPreferences.mjs)

### me.getFulfillment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's fulfillments.

`GET /v1/me/fulfillments/{fulfillment_id}`

Signature:

```typescript
getFulfillment(fulfillment_id: InputValue<string>,
 params?: MeGetFulfillmentParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string | Flint fulfillment ID. |

#### Response

Returned payload: [BuyerFulfillment](../models/BuyerFulfillment.md#buyerfulfillment).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getFulfillment("ful_01KEZF7C00F24WVSTTWR1FQX5T", {}, {  });
```

[Complete runnable example](../examples/me-getFulfillment.mjs)

### me.getGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code.

`GET /v1/me/gift-cards/{gift_card_id}`

Signature: `getGiftCard(gift_card_id: InputValue<string>, params?: MeGetGiftCardParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint gift card ID. |

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getGiftCard("gc_01KEZF7C00RT1618WYBM1Y94CG", {}, {  });
```

[Complete runnable example](../examples/me-getGiftCard.mjs)

### me.getInvoice

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one of the buyer's invoices. A draft invoice fails with `RESOURCE_NOT_FOUND`.

`GET /v1/me/invoices/{invoice_id}`

Signature:

```typescript
getInvoice(invoice_id: InputValue<string>,
 params?: MeGetInvoiceParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" |
  "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |

#### Response

Returned payload: [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getInvoice("inv_01KEZF7C00A5GEBMWHEAJFSAR4", {}, {  });
```

[Complete runnable example](../examples/me-getInvoice.mjs)

### me.getInvoicePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the invoice document as application/pdf rather than a JSON envelope.

`GET /v1/me/invoices/{invoice_id}/pdf`

Signature:

```typescript
getInvoicePDF(invoice_id: InputValue<string>,
 params?: MeGetInvoicePDFParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" |
  "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getInvoicePDF("inv_01KEZF7C00A5GEBMWHEAJFSAR4", {}, {  });
```

[Complete runnable example](../examples/me-getInvoicePDF.mjs)

### me.getOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's orders.

`GET /v1/me/orders/{order_id}`

Signature: `getOrder(order_id: InputValue<string>, params?: MeGetOrderParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |

#### Response

Returned payload: [BuyerOrder](../models/BuyerOrder.md#buyerorder).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getOrder("ord_01KEZF7C0054GQKJ142A8X367A", {}, {  });
```

[Complete runnable example](../examples/me-getOrder.mjs)

### me.getOrderReceiptPDF

Downloads a numbered receipt for an order with collected money, covering successful payment intents and gift card redemptions, including payments and refunds. Orders paid only by manual cash, check, or wire invoice payments return 409 ACTION_NOT_ALLOWED with reason unsupported_state; download the invoice PDF instead. Mixed orders list only successful payment intents and gift card redemptions. Available under either order_receipts email delivery mode. Buyer and seller identity is frozen on the first snapshot write; payments, refunds, and branding are current.

`GET /v1/me/orders/{order_id}/receipt-pdf`

Signature:

```typescript
getOrderReceiptPDF(order_id: InputValue<string>,
 params?: MeGetOrderReceiptPDFParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getOrderReceiptPDF("ord_01KEZF7C0054GQKJ142A8X367A", {}, {  });
```

[Complete runnable example](../examples/me-getOrderReceiptPDF.mjs)

### me.getPackage

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's packages.

`GET /v1/me/packages/{package_id}`

Signature: `getPackage(package_id: InputValue<string>, params?: MeGetPackageParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string | Flint package ID. |

#### Response

Returned payload: [BuyerPackage](../models/BuyerPackage.md#buyerpackage).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPackage("pkg_01KEZF7C00ZZA16BJCEJBWKJ5R", {}, {  });
```

[Complete runnable example](../examples/me-getPackage.mjs)

### me.getPaymentIntent

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's payments.

`GET /v1/me/payment-intents/{payment_intent_id}`

Signature:

```typescript
getPaymentIntent(payment_intent_id: InputValue<string>,
 params?: MeGetPaymentIntentParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |

#### Response

Returned payload: [BuyerPaymentIntent](../models/BuyerPaymentIntent.md#buyerpaymentintent).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPaymentIntent("pi_01KEZF7C00G8H9D509YEV22P7R", {}, {  });
```

[Complete runnable example](../examples/me-getPaymentIntent.mjs)

### me.getPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved payment methods.

`GET /v1/me/payment-methods/{payment_method_id}`

Signature:

```typescript
getPaymentMethod(payment_method_id: InputValue<string>,
 params?: MeGetPaymentMethodParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | Flint payment method ID. |

#### Response

Returned payload: [BuyerPaymentMethod](../models/BuyerPaymentMethod.md#buyerpaymentmethod).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPaymentMethod("pm_01KEZF7C0034B248TXXE4NXYFZ", {}, {  });
```

[Complete runnable example](../examples/me-getPaymentMethod.mjs)

### me.getRefund

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's refunds.

`GET /v1/me/refunds/{refund_id}`

Signature: `getRefund(refund_id: InputValue<string>, params?: MeGetRefundParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string | Flint refund ID. |

#### Response

Returned payload: [BuyerRefund](../models/BuyerRefund.md#buyerrefund).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getRefund("ref_01KEZF7C003DTD59WKYHEXYQ1K", {}, {  });
```

[Complete runnable example](../examples/me-getRefund.mjs)

### me.getReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's Returns.

`GET /v1/me/returns/{return_id}`

Signature: `getReturn(return_id: InputValue<string>, params?: MeGetReturnParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getReturn("ret_01KEZF7C00PG93650ZKVQNGF7X", {}, {  });
```

[Complete runnable example](../examples/me-getReturn.mjs)

### me.getReturnResolution

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a buyer-visible Return resolution, including the amount the buyer needs to pay. Use the checkout_session action to pay its balance.

`GET /v1/me/return-resolutions/{return_resolution_id}`

Signature:

```typescript
getReturnResolution(return_resolution_id: InputValue<string>,
 params?: MeGetReturnResolutionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |

#### Response

Returned payload: [BuyerReturnResolution](../models/BuyerReturnResolution.md#buyerreturnresolution).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getReturnResolution("retres_01KEZF7C00C7RZJN31W9SGMEQ3", {}, {  });
```

[Complete runnable example](../examples/me-getReturnResolution.mjs)

### me.getShipment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's shipments.

`GET /v1/me/shipments/{shipment_id}`

Signature: `getShipment(shipment_id: InputValue<string>, params?: MeGetShipmentParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string | Flint shipment ID. |

#### Response

Returned payload: [BuyerShipment](../models/BuyerShipment.md#buyershipment).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getShipment("shp_01KEZF7C00Q2AFXWXHMCDR3F68", {}, {  });
```

[Complete runnable example](../examples/me-getShipment.mjs)

### me.getSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's subscriptions. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.

`GET /v1/me/subscriptions/{subscription_id}`

Signature:

```typescript
getSubscription(subscription_id: InputValue<string>,
 params?: MeGetSubscriptionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getSubscription("sub_01KEZF7C00BVRE8YDBXQB74BBM", {}, {  });
```

[Complete runnable example](../examples/me-getSubscription.mjs)

### me.getSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Returns one durable manual subscription payment retry.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```typescript
getSubscriptionPaymentRetry(subscription_id: InputValue<string>,
 subscription_payment_retry_id: InputValue<string>,
 params?: MeGetSubscriptionPaymentRetryParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `subscription_payment_retry_id` | Required | string | Flint subscription payment retry ID. |

#### Response

Returned payload: [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getSubscriptionPaymentRetry("sub_01KEZF7C00BVRE8YDBXQB74BBM", "spr_01KEZF7C00YXMSBXGYEMYDD0AA", {}, {  });
```

[Complete runnable example](../examples/me-getSubscriptionPaymentRetry.mjs)

### me.listAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's saved addresses with their billing and shipping default flags. Default order: created_at descending, then customer_address_id descending.

`GET /v1/me/addresses`

Signature: `listAddresses(params?: MeListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

Field definitions: [shared fields](feedbackReports.md#request-fields-2).

#### Response

Returned payload: [CustomerAddressListResponse](../models/CustomerAddressListResponse.md#customeraddresslistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAddressesItems`, `listAddressesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listAddresses({}, {  });
```

[Complete runnable example](../examples/me-listAddresses.mjs)

### me.listCreditNotes

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Lists the credit notes issued against this invoice, newest first. Default order: issued_at descending, then credit_note_id descending.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Signature:

```typescript
listCreditNotes(invoice_id: InputValue<string>,
 params?: MeListCreditNotesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" |
  "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"issued"`, `"voided"`. Values: `"issued"`, `"voided"`. |

#### Response

Returned payload: [BuyerCreditNoteListResponse](../models/BuyerCreditNoteListResponse.md#buyercreditnotelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCreditNotesItems`, `listCreditNotesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listCreditNotes("inv_01KEZF7C00A5GEBMWHEAJFSAR4", {}, {  });
```

[Complete runnable example](../examples/me-listCreditNotes.mjs)

### me.listDeletionRequests

Uses the customer identity fixed by the customer session. Lists the current buyer's deletion requests in the selected merchant environment, newest first by requested_at. Default order: requested_at descending, then customer_deletion_request_id descending.

`GET /v1/me/deletion-requests`

Signature: `listDeletionRequests(params?: MeListDeletionRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Only return requests in this lifecycle state. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerCustomerDeletionRequestListResponse](../models/BuyerCustomerDeletionRequestListResponse.md#buyercustomerdeletionrequestlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listDeletionRequestsItems`, `listDeletionRequestsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listDeletionRequests({}, {  });
```

[Complete runnable example](../examples/me-listDeletionRequests.mjs)

### me.listFlintWalletCards

Returns the current buyer's usable wallet cards in newest-first order. Each flint_wallet_card_id is an opaque per-store handle. store_payment_method_id is null until this store holds a copy. Requires a customer session minted from a live email-code buyer login at a Flint-hosted store account, including a login narrowed to a custom domain. Email links, checkout sessions, grants, merchant-created sessions, and API keys can't see the wallet and get a not-found response. Live and sandbox wallets are isolated. The full card collection is returned in one page. Flint wallet support must be enabled. Default order: most recently added card first.

`GET /v1/me/flint-wallet/cards`

Signature: `listFlintWalletCards(params?: MeListFlintWalletCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerFlintWalletCardListResponse](../models/BuyerFlintWalletCardListResponse.md#buyerflintwalletcardlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.listFlintWalletCards({}, {  });
```

[Complete runnable example](../examples/me-listFlintWalletCards.mjs)

### me.listFulfillmentEvents

Lists fulfillment events for an order owned by the current buyer, ordered by occurred_at descending. Internal merchant fields are omitted. order_id is required. Default order: occurred_at descending, then fulfillment_event_id descending.

`GET /v1/me/fulfillment-events`

Signature: `listFulfillmentEvents(params: MeListFulfillmentEventsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Required buyer-owned order ID. |
| `fulfillment_id` | Optional | string | Filter by fulfillment ID. |
| `shipment_id` | Optional | string | Filter by shipment ID. |
| `package_id` | Optional | string | Filter by package ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerFulfillmentEventListResponse](../models/BuyerFulfillmentEventListResponse.md#buyerfulfillmenteventlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFulfillmentEventsItems`, `listFulfillmentEventsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listFulfillmentEvents({order_id: "ord_01KEZF7C0054GQKJ142A8X367A"}, {  });
```

[Complete runnable example](../examples/me-listFulfillmentEvents.mjs)

### me.listFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists fulfillments for the buyer's orders, newest created first. Default order: created_at descending, then fulfillment_id descending.

`GET /v1/me/fulfillments`

Signature: `listFulfillments(params?: MeListFulfillmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `status` | Optional | Array of string or string | Filter by buyer-visible status. Held fulfillments match their pre-hold status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [13 declared values](#melistfulfillments-input-status--values). Values: [13 declared values](#melistfulfillments-input-status-values). |
| `type` | Optional | Array of string or string | Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### me.listFulfillments input status [] values

- `"pending"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### me.listFulfillments input status values

- `"pending"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### Response

Returned payload: [BuyerFulfillmentListResponse](../models/BuyerFulfillmentListResponse.md#buyerfulfillmentlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFulfillmentsItems`, `listFulfillmentsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listFulfillments({}, {  });
```

[Complete runnable example](../examples/me-listFulfillments.mjs)

### me.listGiftCards

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending. Default order: time the buyer saved the card (descending), then gift_card_id descending.

`GET /v1/me/gift-cards`

Signature: `listGiftCards(params?: MeListGiftCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerGiftCardListResponse](../models/BuyerGiftCardListResponse.md#buyergiftcardlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listGiftCardsItems`, `listGiftCardsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listGiftCards({}, {  });
```

[Complete runnable example](../examples/me-listGiftCards.mjs)

### me.listGiftCardTransactions

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists the full anonymous balance-change history by per-card sequence, descending. Other holders' identities and order references are omitted. Default order: sequence descending; this key uniquely orders the results.

`GET /v1/me/gift-card-transactions`

Signature: `listGiftCardTransactions(params: MeListGiftCardTransactionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Exact gift card ID. Requires current saved access to this card. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerGiftCardTransactionListResponse](../models/BuyerGiftCardTransactionListResponse.md#buyergiftcardtransactionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listGiftCardTransactionsItems`, `listGiftCardTransactionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listGiftCardTransactions({gift_card_id: "gc_01KEZF7C00RT1618WYBM1Y94CG"}, {  });
```

[Complete runnable example](../examples/me-listGiftCardTransactions.mjs)

### me.listInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's invoices. Draft invoices are never returned. Default order: created_at descending, then invoice_id descending.

`GET /v1/me/invoices`

Signature: `listInvoices(params?: MeListInvoicesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by invoice status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. Values: `"open"`, `"partially_paid"`, `"paid"`, `"voided"`, `"uncollectible"`, `"credited"`. |
| `order_id` | Optional | string | Filter by Flint order ID. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `due_date_from` | Optional | string | Inclusive lower bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date in its timezone (UTC when absent). Format: `date`. |
| `due_date_to` | Optional | string | Exclusive upper bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date in its timezone (UTC when absent). Format: `date`. |
| `is_overdue` | Optional | boolean | Filter by whether an open or partially_paid invoice has an outstanding balance after its due date ends in its timezone (UTC when absent). With a schedule, matches when any entry is overdue. |
| `has_outstanding_balance` | Optional | boolean | Filter by whether outstanding_money is greater than zero. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"due_date"`, `"invoice_number"`, `"outstanding_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [BuyerInvoiceListResponse](../models/BuyerInvoiceListResponse.md#buyerinvoicelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listInvoicesItems`, `listInvoicesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listInvoices({}, {  });
```

[Complete runnable example](../examples/me-listInvoices.mjs)

### me.listOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource. Default order: created_at descending, then order_activity_id descending.

`GET /v1/me/orders/{order_id}/activities`

Signature:

```typescript
listOrderActivities(order_id: InputValue<string>,
 params?: MeListOrderActivitiesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string or string | Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [28 declared values](../models/OrderActivity.md#orderactivity-activity_type-values). Values: [28 declared values](../models/OrderActivity.md#orderactivity-activity_type-values). |

#### Response

Returned payload: [OrderActivityListResponse](../models/OrderActivityListResponse.md#orderactivitylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listOrderActivitiesItems`, `listOrderActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listOrderActivities("ord_01KEZF7C0054GQKJ142A8X367A", {}, {  });
```

[Complete runnable example](../examples/me-listOrderActivities.mjs)

### me.listOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's orders. Default order: created_at descending, then order_id descending.

`GET /v1/me/orders`

Signature: `listOrders(params?: MeListOrdersParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `closed_reason` | Optional | Array of string or string | Why a closed order closed. Matches orders closed for any reason given. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string or string | Order status: open or closed. Selecting open and closed includes both statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"closed"`. Values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string or string | Filter by settled collection status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string or string | Filter by refund progress. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string or string | Filter by aggregate order fulfillment status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string | Filter by merchant-visible order number. |
| `origin` | Optional | Array of string or string | Separate subscription renewal purchases (subscription) from orders placed through other channels. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `query` | Optional | string | Search across order_id, order number, buyer note, and line item names. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `subscription_id` | Optional | string | Filter by subscription ID. |
| `subscription_delivery_changed` | Optional | boolean | Filter by whether the subscriber changed delivery after this order was paid. |
| `min_amount` | Optional | integer | Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by order_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"settlement_amounts.outstanding_money"`, `"pricing_amounts.total_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [BuyerOrderListResponse](../models/BuyerOrderListResponse.md#buyerorderlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listOrdersItems`, `listOrdersPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listOrders({}, {  });
```

[Complete runnable example](../examples/me-listOrders.mjs)

### me.listPackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists packages in the buyer's shipments, newest created first. Default order: created_at descending, then package_id descending.

`GET /v1/me/packages`

Signature: `listPackages(params?: MeListPackagesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string | Optional shipment ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `order_id` | Optional | string | Optional order ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package status. Values within this filter are combined with OR. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |

#### Response

Returned payload: [BuyerPackageListResponse](../models/BuyerPackageListResponse.md#buyerpackagelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPackagesItems`, `listPackagesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPackages({}, {  });
```

[Complete runnable example](../examples/me-listPackages.mjs)

### me.listPaymentIntents

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's payments. Default order: created_at descending, then payment_intent_id descending.

`GET /v1/me/payment-intents`

Signature: `listPaymentIntents(params?: MeListPaymentIntentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `invoice_id` | Optional | string | Filter by invoice ID. |
| `status` | Optional | Array of string or string | Filter by payment intent status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `payment_flow` | Optional | Array of string or string | Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `refund_status` | Optional | Array of string or string | Exact match on refund_status. Repeat keys or comma-separate values to match any selected status. Combined with dispute_status, both filters must match. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [BuyerPaymentIntentListResponse](../models/BuyerPaymentIntentListResponse.md#buyerpaymentintentlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentIntentsItems`, `listPaymentIntentsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPaymentIntents({}, {  });
```

[Complete runnable example](../examples/me-listPaymentIntents.mjs)

### me.listPaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use. Default order: created_at descending, then payment_method_id descending.

`GET /v1/me/payment-methods`

Signature: `listPaymentMethods(params?: MeListPaymentMethodsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `type` | Optional | Array of string or string | Filter by payment method type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"card"`. Values: `"card"`. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. Values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string or string | Filter by usage: off_session payment methods can be charged without the buyer; on_session ones were saved by buyers for faster checkout. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"on_session"`, `"off_session"`. Values: `"on_session"`, `"off_session"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |

#### Response

Returned payload: [BuyerPaymentMethodListResponse](../models/BuyerPaymentMethodListResponse.md#buyerpaymentmethodlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentMethodsItems`, `listPaymentMethodsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPaymentMethods({}, {  });
```

[Complete runnable example](../examples/me-listPaymentMethods.mjs)

### me.listRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's refunds. Default order: created_at descending, then refund_id descending.

`GET /v1/me/refunds`

Signature: `listRefunds(params?: MeListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `status` | Optional | Array of string or string | Filter by refund status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `return_id` | Optional | string | Filter by linked Return ID. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by refund_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [BuyerRefundListResponse](../models/BuyerRefundListResponse.md#buyerrefundlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRefundsItems`, `listRefundsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listRefunds({}, {  });
```

[Complete runnable example](../examples/me-listRefunds.mjs)

### me.listReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's Returns. Filter by order, return number, reason, status, decision, merchandise, resolution, or creation and update time. Default order: created_at descending, then return_id descending.

`GET /v1/me/returns`

Signature: `listReturns(params?: MeListReturnsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `decision_status` | Optional | Array of string or string | Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#melistreturns-input-merchandise_status--values). Values: [10 declared values](#melistreturns-input-merchandise_status-values). |
| `order_id` | Optional | string | Filter by order id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_number` | Optional | string | Filter by return number. |
| `return_reason_id` | Optional | string | Filter by return reason id. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### me.listReturns input merchandise_status [] values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### me.listReturns input merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### Response

Returned payload: [BuyerReturnListResponse](../models/BuyerReturnListResponse.md#buyerreturnlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listReturnsItems`, `listReturnsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listReturns({}, {  });
```

[Complete runnable example](../examples/me-listReturns.mjs)

### me.listShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipments for the buyer's orders and Returns, newest created first. Default order: created_at descending, then shipment_id descending.

`GET /v1/me/shipments`

Signature: `listShipments(params?: MeListShipmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | Optional order ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `return_id` | Optional | string | Filter by linked Return ID. |
| `handed_off_after` | Optional | string | Inclusive lower bound on handed_off_at. Format: `date-time`. |
| `handed_off_before` | Optional | string | Exclusive upper bound on handed_off_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package-derived shipment status. Values within this filter are combined with OR. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |

#### Response

Returned payload: [BuyerShipmentListResponse](../models/BuyerShipmentListResponse.md#buyershipmentlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listShipmentsItems`, `listShipmentsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listShipments({}, {  });
```

[Complete runnable example](../examples/me-listShipments.mjs)

### me.listSubscriptionPaymentRetries

Returns a subscription's manual payment retries, newest first. Default order: created_at descending, then subscription_payment_retry_id descending.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
listSubscriptionPaymentRetries(subscription_id: InputValue<string>,
 params?: MeListSubscriptionPaymentRetriesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [BuyerSubscriptionPaymentRetryListResponse](../models/BuyerSubscriptionPaymentRetryListResponse.md#buyersubscriptionpaymentretrylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listSubscriptionPaymentRetriesItems`, `listSubscriptionPaymentRetriesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listSubscriptionPaymentRetries("sub_01KEZF7C00BVRE8YDBXQB74BBM", {}, {  });
```

[Complete runnable example](../examples/me-listSubscriptionPaymentRetries.mjs)

### me.listSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's subscriptions. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan. Default order: created_at descending, then subscription_id descending.

`GET /v1/me/subscriptions`

Signature: `listSubscriptions(params?: MeListSubscriptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by subscription status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string or string | Separate subscriptions scheduled by Flint (flint) from those whose billing dates the store supplies (external). Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"flint"`, `"external"`. Values: `"flint"`, `"external"`. |
| `cancel_at_period_end` | Optional | boolean | When true, returns subscriptions scheduled to cancel at the end of the current period that are not yet canceled. When false, returns every other subscription. |
| `delivery_method_id` | Optional | string | Filter by the subscription's selected delivery method. |
| `hold_reason` | Optional | Array of string or string | Find subscriptions needing a new delivery method, address, or rate by the current delivery_hold reason. Does not match upcoming delivery issues. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `subscription_plan_id` | Optional | string | Filter by Flint subscription plan ID. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by subscription_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"next_billing_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `next_billing_after` | Optional | string | Inclusive lower bound on next_billing_at. Format: `date-time`. |
| `next_billing_before` | Optional | string | Exclusive upper bound on next_billing_at. Format: `date-time`. |
| `needs_attention` | Optional | boolean | Load subscriptions needing your attention. True matches subscriptions with a delivery hold, an upcoming delivery hold, or a delivery-action-required pause, plus past_due subscriptions and active or incomplete subscriptions whose billing date passed more than 24 hours ago without payment. False is the exact complement. Other filters still apply. |

#### Response

Returned payload: [BuyerSubscriptionListResponse](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listSubscriptionsItems`, `listSubscriptionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listSubscriptions({}, {  });
```

[Complete runnable example](../examples/me-listSubscriptions.mjs)

### me.listTickets

Lists the event tickets on the buyer's orders, newest first, with each ticket's admission code for showing its QR code. Voided tickets are listed without an admission code. Admission codes go only to buyers Flint verified: a buyer session whose email Flint confirmed (hosted sign-in or the paid checkout's sign-in), on orders whose buyer_email is that email, or an order link from the paying checkout or emailed to the order's buyer_email. Merchant access links, customer sessions created with an API key, and checkout links a merchant reads or requests after payment list the tickets without admission codes; use rotate-code to deliver tickets yourself. Default order: created_at descending, then ticket_id descending.

`GET /v1/me/tickets`

Signature: `listTickets(params?: MeListTicketsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | Only tickets belonging to this order. Another buyer's order returns no tickets. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerTicketListResponse](../models/BuyerTicketListResponse.md#buyerticketlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listTicketsItems`, `listTicketsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listTickets({}, {  });
```

[Complete runnable example](../examples/me-listTickets.mjs)

### me.pauseSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Signature: `pauseSubscription(subscription_id: InputValue<string>, params?: MePauseSubscriptionParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequest.md#pausesubscriptionrequest) | The request body for: Pause one of the current buyer's subscriptions; Pause subscription. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.pauseSubscription("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-pauseSubscription.mjs)

### me.removeGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Removes only this buyer's saved access without changing funds or other holders' access. A repeated removal without an idempotency key fails with `RESOURCE_NOT_FOUND` because saved access is already absent. Reusing the same idempotency key replays the original removal snapshot without restoring saved access. Idempotency keys are scoped to the buyer, merchant, environment, and operation. A replay cannot restore removed or revoked saved access.

`DELETE /v1/me/gift-cards/{gift_card_id}`

Signature: `removeGiftCard(gift_card_id: InputValue<string>, params?: MeRemoveGiftCardParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint gift card ID. |

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.removeGiftCard("gc_01KEZF7C00RT1618WYBM1Y94CG", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-removeGiftCard.mjs)

### me.renewSubscription

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires a full buyer session and an idempotency key. Send expected_version to reject concurrent changes. Retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/me/subscriptions/{subscription_id}/renew`

Signature:

```typescript
renewSubscription(subscription_id: InputValue<string>,
 params: MeRenewSubscriptionParams |
  undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Optional | [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Renew subscription now. |

#### Response

Returned payload: [BuyerSubscriptionRenewalResult](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresult).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.renewSubscription("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-renewSubscription.mjs)

### me.resumeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks Flint to resume a paused subscription. The request is accepted while the subscription is still paused, with `resume_requested_at` set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with `ACTION_NOT_ALLOWED`. To undo a scheduled cancellation, PATCH the subscription with cancel_at_period_end set to false.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Signature: `resumeSubscription(subscription_id: InputValue<string>, params?: MeResumeSubscriptionParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.resumeSubscription("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-resumeSubscription.mjs)

### me.revokeSession

Signs out the current customer session using its current server-held secret, including after expiry, after revocation, or after its parent buyer session or grant ended. Repeating the call preserves revoked_at. A secret rotated away by refresh is invalid. Flint Account buyer sessions remain independent.

`POST /v1/me/session/revoke`

Signature: `revokeSession(params?: MeRevokeSessionParams, options?: RequestOptions<"customer">)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerCustomerSession](../models/BuyerCustomerSession.md#buyercustomersession).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.revokeSession({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-revokeSession.mjs)

### me.saveGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Idempotency keys are scoped to the buyer, merchant, environment, and operation. A replay cannot restore removed or revoked saved access.

`POST /v1/me/gift-cards`

Signature: `saveGiftCard(params: MeSaveGiftCardParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequest.md#savemegiftcardrequest) | The request body for: Save a gift card to your account. |

Body model: [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequest.md#savemegiftcardrequest).

#### me.saveGiftCard body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The gift card's code. Spaces and hyphens are ignored. minLength: `1`. |
| `credential_type` | Required | string | The proof that the buyer can use the card: its code, or the private recipient link they received. Values: `"code"`, `"recipient_access"`. |
| `grant_id` | Optional | string | ID of the recipient access grant, from the path of the private recipient link. minLength: `1`. |
| `recipient_access_token` | Optional | string | Token from the fragment of the private recipient link. minLength: `1`. |

#### me.saveGiftCard with `credential_type: "code"`

The `code` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestCodeInput](../models/SaveMeGiftCardRequestCode.md#savemegiftcardrequestcode).

#### me.saveGiftCard with `credential_type: "recipient_access"`

The `recipient_access` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestRecipientAccessInput](../models/SaveMeGiftCardRequestRecipientAccess.md#savemegiftcardrequestrecipientaccess).

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.saveGiftCard({code: "0123456789AB1234", credential_type: "code"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-saveGiftCard.mjs)

### me.sendOrderReceipt

Queues a receipt email for one of your paid orders to the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient.

`POST /v1/me/orders/{order_id}/send-receipt`

Signature: `sendOrderReceipt(order_id: InputValue<string>, params?: MeSendOrderReceiptParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |

#### Response

Returned payload: [BuyerOrder](../models/BuyerOrder.md#buyerorder).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.sendOrderReceipt("ord_01KEZF7C0054GQKJ142A8X367A", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-sendOrderReceipt.mjs)

### me.skipSubscriptionCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals while preserving billing_anchor_day, including in shorter months. Available when buyer skipping is enabled and the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, and is under the store's consecutive skip limit. Requires a full buyer session. Send expected_version to reject concurrent changes.

`POST /v1/me/subscriptions/{subscription_id}/skip-cycle`

Signature: `skipSubscriptionCycle(subscription_id: InputValue<string>, params?: MeSkipSubscriptionCycleParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Optional | [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Skip subscription cycle. |

Body model: [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### me.skipSubscriptionCycle body fields

Field definitions: [shared fields](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.skipSubscriptionCycle("sub_01KEZF7C00BVRE8YDBXQB74BBM", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-skipSubscriptionCycle.mjs)

### me.update

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Signature: `update(params: MeUpdateParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateMeRequestInput](../models/UpdateMeRequest.md#updatemerequest) | The request body for: Update the current buyer profile. minProperties: `1`. |

Body model: [UpdateMeRequestInput](../models/UpdateMeRequest.md#updatemerequest).

#### me.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. minLength: `1`. |
| `expected_version` | Optional | integer | The customer version you read. A different version refuses the update. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `phone` | Optional | string or null | E.164 phone number. Send null to remove it. minLength: `1`. |

#### Response

Returned payload: [BuyerCustomer](../models/BuyerCustomer.md#buyercustomer).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.update({name: "Jordan Example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-update.mjs)

### me.updateAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the fields you send on one of the buyer's saved addresses. The address field replaces the whole postal address. Send null for phone or label to remove it. Set is_default_billing or is_default_shipping to true to make this address the default, or false to clear a default it holds. Changing a default address also changes the matching address on the buyer's customer profile.

`PATCH /v1/me/addresses/{customer_address_id}`

Signature: `updateAddress(customer_address_id: InputValue<string>, params: MeUpdateAddressParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | Flint customer address ID. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequest.md#updatecustomeraddressrequest) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateAddress("caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {label: "Home"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateAddress.mjs)

### me.updateEmailPreferences

Uses the customer identity fixed by the customer session. Turns the optional email categories in the body on or off for the customer's current email at this merchant in the selected merchant environment, and leaves the others as they are. The setting follows the email address, so it also covers guest checkouts with the same email. A customer without an email has no email preferences, and the change fails with `RESOURCE_NOT_FOUND`.

`PATCH /v1/me/email-preferences`

Signature: `updateEmailPreferences(params: MeUpdateEmailPreferencesParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest) | The request body for: Update the current buyer's email preferences. minProperties: `1`. |

Body model: [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest).

#### me.updateEmailPreferences body fields

Field definitions: [shared fields](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest).

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateEmailPreferences({checkout_reminders: false}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateEmailPreferences.mjs)

### me.updateSubscription

Updates payment_method_id, cancel_at_period_end: false, scheduled_plan_change: null, delivery, billing interval and quantity when the matching buyer action is available. Send billing_interval and billing_interval_count together. Mixed changes commit atomically. A scoped card-update session may send only payment_method_id and expected_version. Send expected_version to reject concurrent changes. A card whose setup hasn't finished fails with `ACTION_NOT_ALLOWED` and reason `status_not_reached`. Once setup finishes, send a new request with a new idempotency key.

`PATCH /v1/me/subscriptions/{subscription_id}`

Signature: `updateSubscription(subscription_id: InputValue<string>, params: MeUpdateSubscriptionParams, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequest.md#updatemesubscriptionrequest) | The request body for: Update subscription. |

Body model: [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequest.md#updatemesubscriptionrequest).

#### me.updateSubscription body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `cancel_at_period_end` | Optional | boolean | Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `scheduled_plan_change` | Optional | null | Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it unchanged. Schedule or replace through change-plan. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateSubscription.mjs)

### me.updateSubscriptionLineItem

Swaps a subscription line to an offered variant for future renewals. Requires a full buyer session. Send expected_version to reject concurrent changes. The replacement must remain deliverable to the subscription destination.

`PATCH /v1/me/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
updateSubscriptionLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params: MeUpdateSubscriptionLineItemParams,
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `subscription_line_item_id` | Required | string | Subscription line item ID. |
| `body` | Required | [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequest.md#updatemesubscriptionlineitemrequest) | The request body for: Swap subscription variant. |

Body model: [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequest.md#updatemesubscriptionlineitemrequest).

#### me.updateSubscriptionLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `variant_id` | Required | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateSubscriptionLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {variant_id: "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateSubscriptionLineItem.mjs)

