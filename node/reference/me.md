[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# me

### me.cancelReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Signature:

```typescript
cancelReturn(return_id: InputValue<string>,
 params: (InputValue<CancelReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CancelReturnRequestInput](../models/CancelReturnRequest.md#cancelreturnrequest) | The request body for: Cancel one of the current buyer's Returns; Cancel return. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `cancelReturnWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.cancelReturn("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-cancelReturn.mjs)

### me.cancelSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Signature:

```typescript
cancelSubscription(subscription_id: InputValue<string>,
 params: (InputValue<CancelSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequest.md#cancelsubscriptionrequest) | The request body for: Cancel one of the current buyer's subscriptions; Cancel subscription. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Complete body and metadata: `cancelSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.cancelSubscription("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-cancelSubscription.mjs)

### me.changeSubscriptionBillingInterval

Changes future renewals to an interval currently offered by the subscription plan or frozen offer. Requires a full buyer session, billing_interval, and billing_interval_count. Send expected_version to reject concurrent changes.

`POST /v1/me/subscriptions/{subscription_id}/billing-interval`

Signature:

```typescript
changeSubscriptionBillingInterval(subscription_id: InputValue<string>,
 params: (InputValue<ChangeMeSubscriptionBillingIntervalRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeMeSubscriptionBillingIntervalRequestInput](../models/ChangeMeSubscriptionBillingIntervalRequest.md#changemesubscriptionbillingintervalrequest) | The request body for: Change subscription billing interval. |

Body model: [ChangeMeSubscriptionBillingIntervalRequestInput](../models/ChangeMeSubscriptionBillingIntervalRequest.md#changemesubscriptionbillingintervalrequest).

#### me.changeSubscriptionBillingInterval body fields

Field definitions: [shared fields](../models/ChangeMeSubscriptionBillingIntervalRequest.md#changemesubscriptionbillingintervalrequest).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `changeSubscriptionBillingIntervalWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionBillingInterval("example", {billing_interval: "daily", billing_interval_count: 1}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionBillingInterval.mjs)

### me.changeSubscriptionDelivery

Saves an offered delivery method and destination for future renewals when buyer delivery changes are enabled. Requires a full buyer session. Send expected_version to reject concurrent changes. A paid shipment already in progress keeps its destination.

`POST /v1/me/subscriptions/{subscription_id}/delivery`

Signature:

```typescript
changeSubscriptionDelivery(subscription_id: InputValue<string>,
 params: (InputValue<ChangeMeSubscriptionDeliveryRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeMeSubscriptionDeliveryRequestInput](../models/ChangeMeSubscriptionDeliveryRequest.md#changemesubscriptiondeliveryrequest) | The request body for: Update subscription delivery. |

Body model: [ChangeMeSubscriptionDeliveryRequestInput](../models/ChangeMeSubscriptionDeliveryRequest.md#changemesubscriptiondeliveryrequest).

#### me.changeSubscriptionDelivery body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery` | Required | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `changeSubscriptionDeliveryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionDelivery("example", {delivery: {delivery_method_id: "dmet_00000000000000000000000000", destination: {customer_address_id: "caddr_00000000000000000000000000", type: "customer_address"}, type: "shipment"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionDelivery.mjs)

### me.changeSubscriptionPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the subscription to an active payment method owned by the same customer. The payment method's usage must be off_session. Send expected_version to reject a concurrent change. A card whose setup hasn't finished returns 409 PAYMENT_METHOD_NOT_READY. Retry the same request with the same Idempotency-Key once setup finishes.

`POST /v1/me/subscriptions/{subscription_id}/payment-method`

Signature:

```typescript
changeSubscriptionPaymentMethod(subscription_id: InputValue<string>,
 params: (InputValue<ChangeSubscriptionPaymentMethodRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeSubscriptionPaymentMethodRequestInput](../models/ChangeSubscriptionPaymentMethodRequest.md#changesubscriptionpaymentmethodrequest) | The request body for: Change a subscription payment method; Change the payment method for one of the current buyer's subscriptions. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `changeSubscriptionPaymentMethodWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionPaymentMethod("example", {payment_method_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionPaymentMethod.mjs)

### me.changeSubscriptionQuantity

Changes future renewals to a quantity currently offered by the subscription plan or frozen offer. Requires a full buyer session. Send expected_version to reject concurrent changes. Delivery eligibility is checked for the new quantity.

`POST /v1/me/subscriptions/{subscription_id}/quantity`

Signature:

```typescript
changeSubscriptionQuantity(subscription_id: InputValue<string>,
 params: (InputValue<ChangeMeSubscriptionQuantityRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ChangeMeSubscriptionQuantityRequestInput](../models/ChangeMeSubscriptionQuantityRequest.md#changemesubscriptionquantityrequest) | The request body for: Change subscription quantity. |

Body model: [ChangeMeSubscriptionQuantityRequestInput](../models/ChangeMeSubscriptionQuantityRequest.md#changemesubscriptionquantityrequest).

#### me.changeSubscriptionQuantity body fields

Field definitions: [shared fields](../models/ChangeMeSubscriptionQuantityRequest.md#changemesubscriptionquantityrequest).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `changeSubscriptionQuantityWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionQuantity("example", {quantity: 1}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-changeSubscriptionQuantity.mjs)

### me.confirmEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false. A successful confirmation signs the buyer out everywhere at this store: it revokes every customer session, buyer access grant, and Flint-hosted account session for the customer, including the session that made this request. Sign the buyer in again with the new email.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Signature:

```typescript
confirmEmailChangeRequest(email_change_request_id: InputValue<string>,
 params: (InputValue<ConfirmEmailChangeRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_change_request_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequest.md#confirmemailchangerequest) | The request body for: Confirm an email change. |

Body model: [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequest.md#confirmemailchangerequest).

#### me.confirmEmailChangeRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | minLength: `1`. pattern: `^[0-9]{6}$`. |
| `new_email_code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest).

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

Complete body and metadata: `confirmEmailChangeRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.confirmEmailChangeRequest("example", {new_email_code: "123456"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-confirmEmailChangeRequest.mjs)

### me.createAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Saves an address for the buyer. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later through set-default, including the buyer's first address. A default address is also the billing or shipping address on the buyer's customer profile.

`POST /v1/me/addresses`

Signature:

```typescript
createAddress(params: (InputValue<CreateCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequest) | The request body for: Create a customer address; Create an address for the current buyer. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Complete body and metadata: `createAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createAddress({address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}, recipient_name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createAddress.mjs)

### me.createDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks the store to delete the buyer's account, or returns the request already pending. The store approves or rejects it. Deletion anonymizes the customer: orders, payments, and refunds stay without the buyer's identity.

`POST /v1/me/deletion-requests`

Signature: `createDeletionRequest(params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createDeletionRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createDeletionRequest({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createDeletionRequest.mjs)

### me.createEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds. Limited to three attempts per 15 minutes, including attempts rejected because the email is already used. A rejected attempt keeps any pending email change request. Over the limit, the request returns 429 RATE_LIMIT_EXCEEDED with Retry-After set to the whole seconds until the oldest counted attempt leaves the window, at least 1.

`POST /v1/me/email-change-requests`

Signature:

```typescript
createEmailChangeRequest(params: (InputValue<CreateEmailChangeRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequest.md#createemailchangerequest) | The request body for: Request an email change. |

Body model: [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequest.md#createemailchangerequest).

#### me.createEmailChangeRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `new_email` | Required | string | Format: `email`. minLength: `1`. maxLength: `320`. |

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequest.md#emailchangerequest).

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

Complete body and metadata: `createEmailChangeRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createEmailChangeRequest({new_email: "example@example.invalid"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createEmailChangeRequest.mjs)

### me.createFlintWalletStoreSetup

Records the buyer's consent to save an independent store copy for off-session payments, including subscriptions. Call only after the buyer agrees. Requires a live email-code buyer login and an enabled Flint wallet at a Flint-hosted store account. Supply an id from listMeFlintWalletPaymentMethods. Confirm client_setup with Stripe.js confirmSetup, then poll GET /v1/me/payment-methods/{payment_method_id} until active before changing a subscription through /v1/me/subscriptions/{subscription_id}/payment-method. Setup may request authentication. Removing the platform card or revoking store consent blocks the copy immediately. Idempotency-Key is optional and scoped to the store, customer, card handle, and key. Responses are retained for 24 hours. After a copy is revoked, retries with any key bound to that copy are refused. Get new consent and use a new key to create another copy. Retry a lost response with the same key. Concurrent requests for the same card at this store share one copy and setup. A failed off-session charge can still require the buyer to return through the existing card-update link. Accept an empty body or {}.

`POST /v1/me/flint-wallet/payment-methods/{id}/store-setups`

Signature:

```typescript
createFlintWalletStoreSetup(id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [MeFlintWalletStoreSetup](../models/MeFlintWalletStoreSetup.md#meflintwalletstoresetup).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createFlintWalletStoreSetupWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createFlintWalletStoreSetup("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createFlintWalletStoreSetup.mjs)

### me.createInvoiceCheckoutSession

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request fails with a validation error when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.

`POST /v1/me/invoices/{invoice_id}/checkout-session`

Signature:

```typescript
createInvoiceCheckoutSession(invoice_id: InputValue<string>,
 params?: (InputValue<InvoiceCheckoutSessionRequestInput> |
  {
  "invoice_schedule_entry_id"?: never;
  "page_origin"?: never;
  "payment_return_url"?: never;
  "redirects"?: never;
  "return_url"?: never;
  "surface"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer" | "invoice">)
```

#### Request fields

Field definitions: [shared fields](invoices.md#request-fields-6). Models: [InvoiceCheckoutSessionRequestInput](../models/InvoiceCheckoutSessionRequest.md#invoicecheckoutsessionrequest).

#### Response

Returned payload: [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult) | [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult).

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

Complete body and metadata: `createInvoiceCheckoutSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createInvoiceCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createInvoiceCheckoutSession.mjs)

### me.createReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Requests a Return for one of the buyer's orders. An active return policy must cover each line and leave the requested quantity eligible, or the request fails with 409 RETURN_SELF_SERVICE_NOT_ALLOWED. Check can_buyer_request with POST /v1/me/return-previews first. The buyer's reason must be active and apply to the line, and a policy that sends the request to review leaves the Return waiting for the store's decision.

`POST /v1/me/returns`

Signature:

```typescript
createReturn(params: (InputValue<BuyerCreateReturnRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequest.md#buyercreatereturnrequest) | The request body for: Create a Return for the current buyer. |

Body model: [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequest.md#buyercreatereturnrequest).

#### me.createReturn body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequest.md#returnlineitemrequest) | minItems: `1`. maxItems: `100`. |
| `order_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `createReturnWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createReturn({line_items: [{order_line_item_id: "example", requested_quantity: "100", return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createReturn.mjs)

### me.createReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Signature:

```typescript
createReturnPreview(params: (InputValue<BuyerCreateReturnPreviewRequestInput>),
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequest.md#buyercreatereturnpreviewrequest) | The request body for: Preview Return eligibility or resolution amounts for the current buyer. |

Body model: [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequest.md#buyercreatereturnpreviewrequest).

#### me.createReturnPreview body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

#### me.createReturnPreview body oneOf variant 1



#### me.createReturnPreview body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

#### me.createReturnPreview body oneOf variant 2



#### me.createReturnPreview body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

#### Response

Returned payload: [BuyerReturnPreview](../models/BuyerReturnPreview.md#buyerreturnpreview).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `createReturnPreviewWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.createReturnPreview({mode: "eligibility", eligibility: {order_id: "example", selection: {selection_type: "all_remaining_fulfilled"}}}, {  });
```

[Complete runnable example](../examples/me-createReturnPreview.mjs)

### me.createReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement order linked to this return resolution. Returns 200 when reusing an existing session and 201 when creating one. Omit surface to use hosted. The same surface reuses the open session; changing surface replaces an idle session and is refused while a payment is in progress. Use redirects to set where the buyer goes after paying or canceling. The return_url field is an alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout and must be an address of the merchant's customer account. A reused session takes a new success destination only until a payment starts, then keeps its existing destination.

`POST /v1/me/return-resolutions/{return_resolution_id}/checkout-session`

Signature:

```typescript
createReturnResolutionCheckoutSession(return_resolution_id: InputValue<string>,
 params?: (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput> |
  {
  "page_origin"?: never;
  "payment_return_url"?: never;
  "redirects"?: never;
  "return_url"?: never;
  "surface"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [GetOrCreateReturnResolutionCheckoutSessionRequestInput](../models/GetOrCreateReturnResolutionCheckoutSessionRequest.md#getorcreatereturnresolutioncheckoutsessionrequest) | The request body for: Create a Return resolution checkout session for the current buyer; Get or create return resolution checkout session. |

#### Response

Returned payload: [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret) | [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `createReturnResolutionCheckoutSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createReturnResolutionCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createReturnResolutionCheckoutSession.mjs)

### me.createSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome. While cancellation is scheduled, a new buyer retry returns 409 ACTION_NOT_ALLOWED with reason cancellation_scheduled and current_status past_due. First use POST /v1/me/subscriptions/{subscription_id}/reactivate to keep the subscription; retry_payment becomes available again if the other retry conditions allow it. Only one retry may be in progress at a time. Buyers can start a retry while fewer than 3 retries have been created for the current billing period, counting the store's retries too. subscription_card_update email-link sessions can start retries.

`POST /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
createSubscriptionPaymentRetry(subscription_id: InputValue<string>,
 params: (InputValue<{
}> | {
}) & {
  "Idempotency-Key"?: InputValue<string>
} | undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createSubscriptionPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createSubscriptionPaymentRetry("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-createSubscriptionPaymentRetry.mjs)

### me.createSubscriptionPreview

Estimates a buyer's next subscription renewal, or lists delivery methods and rates for a proposed destination, without changing the subscription. next_renewal includes recurring promotions, shipping, and tax for the next charged cycle. Tax is null when no tax address is available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Requires a full buyer session. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/me/subscription-previews`

Signature: `createSubscriptionPreview(input: MeCreateSubscriptionPreviewInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest) | The request body for: Preview subscription. |

Body model: [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest).

#### me.createSubscriptionPreview body oneOf variant 1



#### me.createSubscriptionPreview body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequest.md#subscriptiondeliverydestinationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### me.createSubscriptionPreview body oneOf variant 2



#### me.createSubscriptionPreview body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: (([BuyerSubscriptionPreview](../models/BuyerSubscriptionPreview.md#buyersubscriptionpreview)) | ([SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview)) | (Record&lt;string, unknown&gt;)).

##### Response variant 1

Available subscription delivery methods shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Optional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `mode` | Required | string | Always delivery_options for buyer previews. Values: `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

##### Response variant 2

A preview of a subscription's next renewal and its estimated pricing.

Field definitions: [shared fields](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview). Models: [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createSubscriptionPreviewWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.createSubscriptionPreview({body: {mode: "next_renewal", subscription_id: "sub_00000000000000000000000000"}}, {  });
```

[Complete runnable example](../examples/me-createSubscriptionPreview.mjs)

### me.deleteAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes one of the buyer's saved addresses. A default it held moves to the newest remaining address.

`DELETE /v1/me/addresses/{customer_address_id}`

Signature:

```typescript
deleteAddress(customer_address_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.deleteAddress("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-deleteAddress.mjs)

### me.get

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the buyer's customer profile.

`GET /v1/me`

Signature: `get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerCustomer](../models/BuyerCustomer.md#buyercustomer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.get({}, {  });
```

[Complete runnable example](../examples/me-get.mjs)

### me.getAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved addresses.

`GET /v1/me/addresses/{customer_address_id}`

Signature: `getAddress(customer_address_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getAddress("example", {}, {  });
```

[Complete runnable example](../examples/me-getAddress.mjs)

### me.getCreditNote

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Signature:

```typescript
getCreditNote(invoice_id: InputValue<string>,
 credit_note_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `credit_note_id` | Required | string |  |

#### Response

Returned payload: [BuyerCreditNote](../models/BuyerCreditNote.md#buyercreditnote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getCreditNoteWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getCreditNote("example", "example", {}, {  });
```

[Complete runnable example](../examples/me-getCreditNote.mjs)

### me.getCreditNotePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Signature:

```typescript
getCreditNotePDF(invoice_id: InputValue<string>,
 credit_note_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `credit_note_id` | Required | string |  |

#### Response

Response body (inside Result.data): Uint8Array.

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getCreditNotePDF("example", "example", {}, {  });
```

[Complete runnable example](../examples/me-getCreditNotePDF.mjs)

### me.getDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the status of one of the buyer's deletion requests.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Signature:

```typescript
getDeletionRequest(customer_deletion_request_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getDeletionRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getDeletionRequest("example", {}, {  });
```

[Complete runnable example](../examples/me-getDeletionRequest.mjs)

### me.getEmailPreferences

Uses the customer identity fixed by the customer session. Returns which of the merchant's optional email categories the customer's current email receives in the selected merchant environment. A category the buyer never changed is on. Email preferences exist only for a customer with an email: without one, the read answers 404 with CUSTOMER_EMAIL_REQUIRED. Receipts and other transactional email always send.

`GET /v1/me/email-preferences`

Signature: `getEmailPreferences(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getEmailPreferencesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getEmailPreferences({}, {  });
```

[Complete runnable example](../examples/me-getEmailPreferences.mjs)

### me.getFulfillment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's fulfillments.

`GET /v1/me/fulfillments/{fulfillment_id}`

Signature: `getFulfillment(fulfillment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Required | string |  |

#### Response

Returned payload: [BuyerFulfillment](../models/BuyerFulfillment.md#buyerfulfillment).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getFulfillmentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getFulfillment("example", {}, {  });
```

[Complete runnable example](../examples/me-getFulfillment.mjs)

### me.getGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code.

`GET /v1/me/gift-cards/{gift_card_id}`

Signature: `getGiftCard(gift_card_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getGiftCardWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getGiftCard("example", {}, {  });
```

[Complete runnable example](../examples/me-getGiftCard.mjs)

### me.getInvoice

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one of the buyer's invoices. A draft invoice returns 404.

`GET /v1/me/invoices/{invoice_id}`

Signature: `getInvoice(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |

#### Response

Returned payload: [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getInvoiceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getInvoice("example", {}, {  });
```

[Complete runnable example](../examples/me-getInvoice.mjs)

### me.getInvoicePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the invoice document as application/pdf rather than a JSON envelope.

`GET /v1/me/invoices/{invoice_id}/pdf`

Signature: `getInvoicePDF(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getInvoicePDF("example", {}, {  });
```

[Complete runnable example](../examples/me-getInvoicePDF.mjs)

### me.getOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's orders.

`GET /v1/me/orders/{order_id}`

Signature: `getOrder(order_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |

#### Response

Returned payload: [BuyerOrder](../models/BuyerOrder.md#buyerorder).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getOrderWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getOrder("example", {}, {  });
```

[Complete runnable example](../examples/me-getOrder.mjs)

### me.getPackage

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's packages.

`GET /v1/me/packages/{package_id}`

Signature: `getPackage(package_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `package_id` | Required | string |  |

#### Response

Returned payload: [BuyerPackage](../models/BuyerPackage.md#buyerpackage).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPackageWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPackage("example", {}, {  });
```

[Complete runnable example](../examples/me-getPackage.mjs)

### me.getPayment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's payments.

`GET /v1/me/payments/{payment_intent_id}`

Signature: `getPayment(payment_intent_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |

#### Response

Returned payload: [BuyerPaymentIntent](../models/BuyerPaymentIntent.md#buyerpaymentintent).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPaymentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPayment("example", {}, {  });
```

[Complete runnable example](../examples/me-getPayment.mjs)

### me.getPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved payment methods.

`GET /v1/me/payment-methods/{payment_method_id}`

Signature: `getPaymentMethod(payment_method_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |

#### Response

Returned payload: [BuyerPaymentMethod](../models/BuyerPaymentMethod.md#buyerpaymentmethod).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPaymentMethodWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getPaymentMethod("example", {}, {  });
```

[Complete runnable example](../examples/me-getPaymentMethod.mjs)

### me.getRefund

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's refunds.

`GET /v1/me/refunds/{refund_id}`

Signature: `getRefund(refund_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `refund_id` | Required | string |  |

#### Response

Returned payload: [BuyerRefund](../models/BuyerRefund.md#buyerrefund).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getRefundWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getRefund("example", {}, {  });
```

[Complete runnable example](../examples/me-getRefund.mjs)

### me.getReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's Returns.

`GET /v1/me/returns/{return_id}`

Signature: `getReturn(return_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string |  |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getReturnWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getReturn("example", {}, {  });
```

[Complete runnable example](../examples/me-getReturn.mjs)

### me.getReturnResolution

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a buyer-visible Return resolution, including the amount the buyer needs to pay. Use the checkout_session action to pay its balance.

`GET /v1/me/return-resolutions/{return_resolution_id}`

Signature: `getReturnResolution(return_resolution_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |

#### Response

Returned payload: [BuyerReturnResolution](../models/BuyerReturnResolution.md#buyerreturnresolution).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getReturnResolutionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getReturnResolution("example", {}, {  });
```

[Complete runnable example](../examples/me-getReturnResolution.mjs)

### me.getShipment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's shipments.

`GET /v1/me/shipments/{shipment_id}`

Signature: `getShipment(shipment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Required | string |  |

#### Response

Returned payload: [BuyerShipment](../models/BuyerShipment.md#buyershipment).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getShipmentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getShipment("example", {}, {  });
```

[Complete runnable example](../examples/me-getShipment.mjs)

### me.getSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's subscriptions. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.

`GET /v1/me/subscriptions/{subscription_id}`

Signature: `getSubscription(subscription_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getSubscription("example", {}, {  });
```

[Complete runnable example](../examples/me-getSubscription.mjs)

### me.getSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Returns one durable manual subscription payment retry.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```typescript
getSubscriptionPaymentRetry(subscription_id: InputValue<string>,
 subscription_payment_retry_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_payment_retry_id` | Required | string |  |

#### Response

Returned payload: [BuyerSubscriptionPaymentRetry](../models/BuyerSubscriptionPaymentRetry.md#buyersubscriptionpaymentretry).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getSubscriptionPaymentRetryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.getSubscriptionPaymentRetry("example", "example", {}, {  });
```

[Complete runnable example](../examples/me-getSubscriptionPaymentRetry.mjs)

### me.listAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's saved addresses with their billing and shipping default flags.

`GET /v1/me/addresses`

Signature:

```typescript
listAddresses(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomerAddressListResponse](../models/CustomerAddressListResponse.md#customeraddresslistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listAddressesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAddressesItems`, `listAddressesPages`, `listAddressesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listAddresses({}, {  });
```

[Complete runnable example](../examples/me-listAddresses.mjs)

### me.listCreditNotes

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Lists the credit notes issued against this invoice, newest first.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Signature:

```typescript
listCreditNotes(invoice_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [BuyerCreditNoteListResponse](../models/BuyerCreditNoteListResponse.md#buyercreditnotelistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listCreditNotesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCreditNotesItems`, `listCreditNotesPages`, `listCreditNotesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listCreditNotes("example", {}, {  });
```

[Complete runnable example](../examples/me-listCreditNotes.mjs)

### me.listDeletionRequests

Uses the customer identity fixed by the customer session. Lists the current buyer's deletion requests in the selected merchant environment, newest first by requested_at.

`GET /v1/me/deletion-requests`

Signature:

```typescript
listDeletionRequests(params?: {
  "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomerDeletionRequestListResponse](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listDeletionRequestsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listDeletionRequestsItems`, `listDeletionRequestsPages`, `listDeletionRequestsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listDeletionRequests({}, {  });
```

[Complete runnable example](../examples/me-listDeletionRequests.mjs)

### me.listFlintWalletPaymentMethods

Returns the current buyer's usable wallet cards in newest-first order. Each id is an opaque per-store handle. store_payment_method_id is null until this store holds a copy. Requires a customer session minted from a live email-code buyer login at a Flint-hosted store account, including a login narrowed to a custom domain. Email links, checkout sessions, grants, merchant-created sessions, and API keys receive 404. Live and sandbox wallets are isolated. The full card collection is returned in one page. Flint wallet support must be enabled.

`GET /v1/me/flint-wallet/payment-methods`

Signature: `listFlintWalletPaymentMethods(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [MeFlintWalletCardListResponse](../models/MeFlintWalletCardListResponse.md#meflintwalletcardlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listFlintWalletPaymentMethodsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.me.listFlintWalletPaymentMethods({}, {  });
```

[Complete runnable example](../examples/me-listFlintWalletPaymentMethods.mjs)

### me.listFulfillmentEvents

Lists fulfillment events for an order owned by the current buyer, ordered by occurred_at descending. Internal merchant fields are omitted. order_id is required.

`GET /v1/me/fulfillment-events`

Signature:

```typescript
listFulfillmentEvents(params: {
  "order_id": InputValue<string>;
  "fulfillment_id"?: InputValue<string>;
  "shipment_id"?: InputValue<string>;
  "package_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `fulfillment_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |
| `package_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [BuyerFulfillmentEventListResponse](../models/BuyerFulfillmentEventListResponse.md#buyerfulfillmenteventlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listFulfillmentEventsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFulfillmentEventsItems`, `listFulfillmentEventsPages`, `listFulfillmentEventsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listFulfillmentEvents({order_id: "example"}, {  });
```

[Complete runnable example](../examples/me-listFulfillmentEvents.mjs)

### me.listFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists fulfillments for the buyer's orders, newest created first.

`GET /v1/me/fulfillments`

Signature:

```typescript
listFulfillments(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending" |
    "in_progress" |
    "ready" |
    "completed" |
    "canceled" |
    "failed" |
    "scheduled" |
    "accepted" |
    "preparing" |
    "picked" |
    "packed" |
    "dispatched" |
    "no_show">>;
  "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "sort_direction"?: InputValue<"asc" | "desc">
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: [13 declared values](#melistfulfillments-input-status--values). |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

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

#### Response

Returned payload: [BuyerFulfillmentListResponse](../models/BuyerFulfillmentListResponse.md#buyerfulfillmentlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listFulfillmentsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listFulfillmentsItems`, `listFulfillmentsPages`, `listFulfillmentsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listFulfillments({}, {  });
```

[Complete runnable example](../examples/me-listFulfillments.mjs)

### me.listGiftCards

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending.

`GET /v1/me/gift-cards`

Signature:

```typescript
listGiftCards(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [BuyerGiftCardListResponse](../models/BuyerGiftCardListResponse.md#buyergiftcardlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listGiftCardsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listGiftCardsItems`, `listGiftCardsPages`, `listGiftCardsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listGiftCards({}, {  });
```

[Complete runnable example](../examples/me-listGiftCards.mjs)

### me.listGiftCardTransactions

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists the full anonymous balance-change history by per-card sequence, descending. Other holders' identities and order references are omitted.

`GET /v1/me/gift-cards/{gift_card_id}/transactions`

Signature:

```typescript
listGiftCardTransactions(gift_card_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [BuyerGiftCardTransactionListResponse](../models/BuyerGiftCardTransactionListResponse.md#buyergiftcardtransactionlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listGiftCardTransactionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listGiftCardTransactionsItems`, `listGiftCardTransactionsPages`, `listGiftCardTransactionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listGiftCardTransactions("example", {}, {  });
```

[Complete runnable example](../examples/me-listGiftCardTransactions.mjs)

### me.listInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's invoices. Draft invoices are never returned.

`GET /v1/me/invoices`

Signature:

```typescript
listInvoices(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"open" |
    "partially_paid" |
    "paid" |
    "void" |
    "uncollectible" |
    "credited">>;
  "order_id"?: InputValue<string>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "due_after"?: InputValue<string | globalThis.Date>;
  "due_before"?: InputValue<string | globalThis.Date>;
  "is_overdue"?: InputValue<boolean>;
  "has_outstanding_balance"?: InputValue<boolean>;
  "sort_by"?: InputValue<"created_at" |
    "updated_at" |
    "due_at" |
    "invoice_number" |
    "outstanding_money">;
  "sort_direction"?: InputValue<"asc" | "desc">
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. |
| `order_id` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `due_after` | Optional | string | Format: `date-time`. |
| `due_before` | Optional | string | Format: `date-time`. |
| `is_overdue` | Optional | boolean |  |
| `has_outstanding_balance` | Optional | boolean |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"due_at"`, `"invoice_number"`, `"outstanding_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |

#### Response

Returned payload: [BuyerInvoiceListResponse](../models/BuyerInvoiceListResponse.md#buyerinvoicelistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listInvoicesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listInvoicesItems`, `listInvoicesPages`, `listInvoicesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listInvoices({}, {  });
```

[Complete runnable example](../examples/me-listInvoices.mjs)

### me.listOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/me/orders/{order_id}/activities`

Signature:

```typescript
listOrderActivities(order_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "activity_type"?: InputValue<Array<"created" |
    "line_item_added" |
    "line_item_updated" |
    "line_item_removed" |
    "discount_applied" |
    "discount_removed" |
    "tax_updated" |
    "requested_tip_added" |
    "requested_tip_updated" |
    "requested_tip_removed" |
    "charge_added" |
    "charge_updated" |
    "charge_removed" |
    "charge_fulfillment_updated" |
    "order_updated" |
    "adjustment" |
    "closed" |
    "payment" |
    "payment_failed" |
    "refund" |
    "refund_failed" |
    "checkout_session_created" |
    "checkout_session_expired" |
    "checkout_session_invalidated" |
    "fulfillment_created" |
    "fulfillment_updated" |
    "fulfillment_state_changed">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string | minItems: `1`. Items values: [27 declared values](../models/OrderActivity.md#orderactivity-activity_type-values). |

#### Response

Returned payload: [OrderActivityListResponse](../models/OrderActivityListResponse.md#orderactivitylistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listOrderActivitiesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listOrderActivitiesItems`, `listOrderActivitiesPages`, `listOrderActivitiesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listOrderActivities("example", {}, {  });
```

[Complete runnable example](../examples/me-listOrderActivities.mjs)

### me.listOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's orders.

`GET /v1/me/orders`

Signature:

```typescript
listOrders(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "closed_reason"?: InputValue<Array<"paid" |
    "closed_by_merchant" |
    "checkout_expired" |
    "written_off" |
    "superseded" |
    "return_resolution_canceled" |
    "other">>;
  "status"?: InputValue<Array<"open" | "closed">>;
  "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
  "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
  "fulfillment_status"?: InputValue<Array<"not_fulfilled" |
    "partially_fulfilled" |
    "fulfilled" |
    "canceled" |
    "not_applicable" |
    "closed">>;
  "order_number"?: InputValue<string>;
  "origin"?: InputValue<Array<"virtual_terminal" |
    "payment_link" |
    "checkout" |
    "api" |
    "subscription">>;
  "query"?: InputValue<string>;
  "subscription_id"?: InputValue<string>;
  "subscription_delivery_changed"?: InputValue<boolean>;
  "min_amount"?: InputValue<`${bigint}` | bigint>;
  "max_amount"?: InputValue<`${bigint}` | bigint>;
  "currency"?: InputValue<string>;
  "sort_by"?: InputValue<"created_at" |
    "updated_at" |
    "settlement_amounts.outstanding_money" |
    "pricing_amounts.total_money">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `closed_reason` | Optional | Array of string | minItems: `1`. Items values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string | minItems: `1`. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string | minItems: `1`. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string | minItems: `1`. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string |  |
| `origin` | Optional | Array of string | minItems: `1`. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `query` | Optional | string |  |
| `subscription_id` | Optional | string |  |
| `subscription_delivery_changed` | Optional | boolean |  |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"settlement_amounts.outstanding_money"`, `"pricing_amounts.total_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerOrderListResponse](../models/BuyerOrderListResponse.md#buyerorderlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listOrdersWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listOrdersItems`, `listOrdersPages`, `listOrdersPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listOrders({}, {  });
```

[Complete runnable example](../examples/me-listOrders.mjs)

### me.listPackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists packages in the buyer's shipments, newest created first.

`GET /v1/me/packages`

Signature:

```typescript
listPackages(params?: {
  "shipment_id"?: InputValue<string>;
  "fulfillment_id"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerPackageListResponse](../models/BuyerPackageListResponse.md#buyerpackagelistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPackagesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPackagesItems`, `listPackagesPages`, `listPackagesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPackages({}, {  });
```

[Complete runnable example](../examples/me-listPackages.mjs)

### me.listPaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use.

`GET /v1/me/payment-methods`

Signature:

```typescript
listPaymentMethods(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "type"?: InputValue<Array<"card">>;
  "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
  "usage"?: InputValue<Array<"on_session" | "off_session">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"card"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string | minItems: `1`. Items values: `"on_session"`, `"off_session"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerPaymentMethodListResponse](../models/BuyerPaymentMethodListResponse.md#buyerpaymentmethodlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPaymentMethodsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentMethodsItems`, `listPaymentMethodsPages`, `listPaymentMethodsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPaymentMethods({}, {  });
```

[Complete runnable example](../examples/me-listPaymentMethods.mjs)

### me.listPayments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's payments.

`GET /v1/me/payments`

Signature:

```typescript
listPayments(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "invoice_id"?: InputValue<string>;
  "status"?: InputValue<Array<"requires_payment_method" |
    "requires_confirmation" |
    "requires_action" |
    "processing" |
    "requires_capture" |
    "canceled" |
    "succeeded" |
    "expired">>;
  "payment_flow"?: InputValue<Array<"checkout" |
    "payment_link" |
    "invoice" |
    "subscription_initial" |
    "subscription_renewal" |
    "virtual_terminal" |
    "api">>;
  "min_amount"?: InputValue<`${bigint}` | bigint>;
  "max_amount"?: InputValue<`${bigint}` | bigint>;
  "currency"?: InputValue<string>;
  "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `invoice_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `payment_flow` | Optional | Array of string | minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `refund_status` | Optional | Array of string | minItems: `1`. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerPaymentIntentListResponse](../models/BuyerPaymentIntentListResponse.md#buyerpaymentintentlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPaymentsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentsItems`, `listPaymentsPages`, `listPaymentsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listPayments({}, {  });
```

[Complete runnable example](../examples/me-listPayments.mjs)

### me.listRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's refunds.

`GET /v1/me/refunds`

Signature:

```typescript
listRefunds(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
  "min_amount"?: InputValue<`${bigint}` | bigint>;
  "max_amount"?: InputValue<`${bigint}` | bigint>;
  "currency"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `return_id` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerRefundListResponse](../models/BuyerRefundListResponse.md#buyerrefundlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listRefundsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRefundsItems`, `listRefundsPages`, `listRefundsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listRefunds({}, {  });
```

[Complete runnable example](../examples/me-listRefunds.mjs)

### me.listReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's Returns. Filter by order, return number, reason, status, decision, merchandise, resolution, or creation and update time. Newest first: created_at descending, with return_id descending as the tiebreak. Use sort_direction to reverse the order.

`GET /v1/me/returns`

Signature:

```typescript
listReturns(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
  "idempotency_key"?: InputValue<string>;
  "merchandise_status"?: InputValue<Array<"not_required" |
    "awaiting_handoff" |
    "in_transit" |
    "partially_received" |
    "inspection_required" |
    "partially_inspected" |
    "inspection_review_required" |
    "disposition_required" |
    "resolved" |
    "exception">>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "resolution_status"?: InputValue<Array<"not_selected" |
    "pending" |
    "partially_fulfilled" |
    "requires_action" |
    "fulfilled" |
    "failed">>;
  "return_number"?: InputValue<string>;
  "return_reason_id"?: InputValue<string>;
  "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `decision_status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `merchandise_status` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](#melistreturns-input-merchandise_status--values). |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `resolution_status` | Optional | Array of string | minItems: `1`. Items values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_number` | Optional | string |  |
| `return_reason_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

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

#### Response

Returned payload: [BuyerReturnListResponse](../models/BuyerReturnListResponse.md#buyerreturnlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listReturnsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listReturnsItems`, `listReturnsPages`, `listReturnsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listReturns({}, {  });
```

[Complete runnable example](../examples/me-listReturns.mjs)

### me.listShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipments for the buyer's orders and Returns, newest created first.

`GET /v1/me/shipments`

Signature:

```typescript
listShipments(params?: {
  "order_id"?: InputValue<string>;
  "fulfillment_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "handed_off_after"?: InputValue<string | globalThis.Date>;
  "handed_off_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string |  |
| `fulfillment_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `return_id` | Optional | string |  |
| `handed_off_after` | Optional | string | Format: `date-time`. |
| `handed_off_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [BuyerShipmentListResponse](../models/BuyerShipmentListResponse.md#buyershipmentlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listShipmentsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listShipmentsItems`, `listShipmentsPages`, `listShipmentsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listShipments({}, {  });
```

[Complete runnable example](../examples/me-listShipments.mjs)

### me.listSubscriptionPaymentRetries

Returns a subscription's manual payment retries, newest first.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature:

```typescript
listSubscriptionPaymentRetries(subscription_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [BuyerSubscriptionPaymentRetryListResponse](../models/BuyerSubscriptionPaymentRetryListResponse.md#buyersubscriptionpaymentretrylistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listSubscriptionPaymentRetriesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listSubscriptionPaymentRetriesItems`, `listSubscriptionPaymentRetriesPages`, `listSubscriptionPaymentRetriesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listSubscriptionPaymentRetries("example", {}, {  });
```

[Complete runnable example](../examples/me-listSubscriptionPaymentRetries.mjs)

### me.listSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's subscriptions. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.

`GET /v1/me/subscriptions`

Signature:

```typescript
listSubscriptions(params?: {
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
  "cancel_at_period_end"?: InputValue<boolean>;
  "delivery_method_id"?: InputValue<string>;
  "hold_reason"?: InputValue<Array<"method_unavailable" |
    "destination_not_served" |
    "rate_unavailable">>;
  "subscription_plan_id"?: InputValue<string>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "next_billing_after"?: InputValue<string | globalThis.Date>;
  "next_billing_before"?: InputValue<string | globalThis.Date>;
  "needs_attention"?: InputValue<boolean>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string | minItems: `1`. Items values: `"flint"`, `"external"`. |
| `cancel_at_period_end` | Optional | boolean |  |
| `delivery_method_id` | Optional | string |  |
| `hold_reason` | Optional | Array of string | minItems: `1`. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
| `subscription_plan_id` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"next_billing_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `next_billing_after` | Optional | string | Format: `date-time`. |
| `next_billing_before` | Optional | string | Format: `date-time`. |
| `needs_attention` | Optional | boolean |  |

#### Response

Returned payload: [BuyerSubscriptionListResponse](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listSubscriptionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listSubscriptionsItems`, `listSubscriptionsPages`, `listSubscriptionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.me.listSubscriptions({}, {  });
```

[Complete runnable example](../examples/me-listSubscriptions.mjs)

### me.pauseSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Signature:

```typescript
pauseSubscription(subscription_id: InputValue<string>,
 params: (InputValue<PauseSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequest.md#pausesubscriptionrequest) | The request body for: Pause one of the current buyer's subscriptions; Pause subscription. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Complete body and metadata: `pauseSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.pauseSubscription("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-pauseSubscription.mjs)

### me.reactivateSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Clears a pending cancellation without changing the current billing period. Alternatively, PATCH the subscription with cancel_at_period_end set to false. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/reactivate`

Signature:

```typescript
reactivateSubscription(subscription_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> |
  {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `reactivateSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.reactivateSubscription("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-reactivateSubscription.mjs)

### me.removeGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Removes only this buyer's saved access without changing funds or other holders' access. A repeated removal without an idempotency key returns 404 because saved access is already absent. Reusing the same idempotency key replays the original removal snapshot without restoring saved access. Idempotency keys are scoped to the buyer, merchant, environment, and operation. A replay cannot restore removed or revoked saved access.

`DELETE /v1/me/gift-cards/{gift_card_id}`

Signature: `removeGiftCard(gift_card_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeGiftCardWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.removeGiftCard("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-removeGiftCard.mjs)

### me.removePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Signature:

```typescript
removePaymentMethod(payment_method_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [BuyerPaymentMethod](../models/BuyerPaymentMethod.md#buyerpaymentmethod).

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
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removePaymentMethodWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.removePaymentMethod("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-removePaymentMethod.mjs)

### me.renewSubscription

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires a full buyer session and Idempotency-Key. Send expected_version to reject concurrent changes. Retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt with status 200, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/me/subscriptions/{subscription_id}/renew`

Signature:

```typescript
renewSubscription(subscription_id: InputValue<string>,
 params: (InputValue<RenewSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"customer">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Renew subscription now. |

#### Response

Returned payload: [BuyerSubscriptionRenewalResult](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresult).

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

Complete body and metadata: `renewSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.renewSubscription("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-renewSubscription.mjs)

### me.resumeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused, with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, use reactivate.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Signature:

```typescript
resumeSubscription(subscription_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> |
  {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

Field definitions: [shared fields](#request-fields-58). Models: [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Complete body and metadata: `resumeSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.resumeSubscription("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-resumeSubscription.mjs)

### me.revokeSession

Signs out the current customer session using its current server-held secret, including after expiry, after revocation, or after its parent buyer session or grant ended. Repeating the call preserves revoked_at. A secret rotated away by refresh is invalid. Flint Account buyer sessions remain independent.

`POST /v1/me/session/revoke`

Signature: `revokeSession(params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerSession](../models/CustomerSession.md#customersession).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `revokeSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

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

Signature:

```typescript
saveGiftCard(params: (InputValue<SaveMeGiftCardRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequest.md#savemegiftcardrequest) | The request body for: Save a gift card to your account. |

Body model: [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequest.md#savemegiftcardrequest).

#### me.saveGiftCard body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | minLength: `1`. |
| `credential_type` | Required | string | Values: `"code"`, `"recipient_access"`. |
| `grant_id` | Optional | string | minLength: `1`. |
| `recipient_access_token` | Optional | string | minLength: `1`. |

#### me.saveGiftCard body oneOf variant 1

The `code` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestCodeInput](../models/SaveMeGiftCardRequestCode.md#savemegiftcardrequestcode).

#### me.saveGiftCard body oneOf variant 1 fields

Field definitions: [shared fields](../models/SaveMeGiftCardRequestCode.md#savemegiftcardrequestcode).

#### me.saveGiftCard body oneOf variant 2

The `recipient_access` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestRecipientAccessInput](../models/SaveMeGiftCardRequestRecipientAccess.md#savemegiftcardrequestrecipientaccess).

#### me.saveGiftCard body oneOf variant 2 fields

Field definitions: [shared fields](../models/SaveMeGiftCardRequestRecipientAccess.md#savemegiftcardrequestrecipientaccess).

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `saveGiftCardWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.saveGiftCard({credential_type: "code", code: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-saveGiftCard.mjs)

### me.savePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Starts saving a payment method for the buyer and returns the client setup to confirm in the browser. The payment method is pending until setup succeeds.

`POST /v1/me/payment-methods`

Signature:

```typescript
savePaymentMethod(params: (InputValue<SaveMePaymentMethodRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequest.md#savemepaymentmethodrequest) | The request body for: Create a payment method for the current buyer. |

Body model: [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequest.md#savemepaymentmethodrequest).

#### me.savePaymentMethod body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string | Values: `"card"`. |

#### Response

Returned payload: [BuyerPaymentMethodWithSetup](../models/BuyerPaymentMethodWithSetup.md#buyerpaymentmethodwithsetup).

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

Complete body and metadata: `savePaymentMethodWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.savePaymentMethod({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-savePaymentMethod.mjs)

### me.sendOrderReceipt

Queues a receipt email for one of your paid orders to the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient.

`POST /v1/me/orders/{order_id}/send-receipt`

Signature: `sendOrderReceipt(order_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [BuyerOrder](../models/BuyerOrder.md#buyerorder).

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

Complete body and metadata: `sendOrderReceiptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.sendOrderReceipt("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-sendOrderReceipt.mjs)

### me.setDefaultAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Makes one of the buyer's saved addresses the billing default, the shipping default, or both, and the matching address on the buyer's customer profile.

`POST /v1/me/addresses/{customer_address_id}/set-default`

Signature:

```typescript
setDefaultAddress(customer_address_id: InputValue<string>,
 params: (InputValue<SetDefaultCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SetDefaultCustomerAddressRequestInput](../models/SetDefaultCustomerAddressRequest.md#setdefaultcustomeraddressrequest) | The request body for: Set a default address for the current buyer; Set a default customer address. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Complete body and metadata: `setDefaultAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.setDefaultAddress("example", {default_for: "billing"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-setDefaultAddress.mjs)

### me.skipSubscriptionCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals while preserving billing_anchor_day, including in shorter months. Available when buyer skipping is enabled and the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, and is under the store's consecutive skip limit. Requires a full buyer session. Send expected_version to reject concurrent changes.

`POST /v1/me/subscriptions/{subscription_id}/skip-cycle`

Signature:

```typescript
skipSubscriptionCycle(subscription_id: InputValue<string>,
 params: (InputValue<SkipMeSubscriptionCycleRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Skip subscription cycle. |

Body model: [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### me.skipSubscriptionCycle body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Complete body and metadata: `skipSubscriptionCycleWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.skipSubscriptionCycle("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-skipSubscriptionCycle.mjs)

### me.update

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Signature: `update(params: (InputValue<UpdateMeRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"customer">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateMeRequestInput](../models/UpdateMeRequest.md#updatemerequest) | The request body for: Update the current buyer profile. minProperties: `1`. |

Body model: [UpdateMeRequestInput](../models/UpdateMeRequest.md#updatemerequest).

#### me.update body fields

Field definitions: [shared fields](../models/UpdateMeRequest.md#updatemerequest).

#### Response

Returned payload: [BuyerCustomer](../models/BuyerCustomer.md#buyercustomer).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.update({default_payment_method_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-update.mjs)

### me.updateAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the fields you send on one of the buyer's saved addresses. The address field replaces the whole postal address. Send null for phone or label to remove it. Changing a default address also changes the matching address on the buyer's customer profile.

`PATCH /v1/me/addresses/{customer_address_id}`

Signature:

```typescript
updateAddress(customer_address_id: InputValue<string>,
 params: (InputValue<UpdateCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequest.md#updatecustomeraddressrequest) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Complete body and metadata: `updateAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateAddress("example", {address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateAddress.mjs)

### me.updateEmailPreferences

Uses the customer identity fixed by the customer session. Turns the optional email categories in the body on or off for the customer's current email at this merchant in the selected merchant environment, and leaves the others as they are. The setting follows the email address, so it also covers guest checkouts with the same email. A customer without an email has no email preferences, and the change answers 404 with CUSTOMER_EMAIL_REQUIRED.

`PATCH /v1/me/email-preferences`

Signature:

```typescript
updateEmailPreferences(params: (InputValue<UpdateCustomerEmailPreferencesRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest) | The request body for: Update the current buyer's email preferences. minProperties: `1`. |

Body model: [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest).

#### me.updateEmailPreferences body fields

Field definitions: [shared fields](../models/UpdateCustomerEmailPreferencesRequest.md#updatecustomeremailpreferencesrequest).

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences).

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

Complete body and metadata: `updateEmailPreferencesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateEmailPreferences({checkout_reminders: true}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateEmailPreferences.mjs)

### me.updateSubscription

Updates payment_method_id, cancel_at_period_end: false, delivery, billing interval and quantity when the matching buyer action is available. Send billing_interval and billing_interval_count together. Mixed changes commit atomically. A scoped card-update session may send only payment_method_id and expected_version. Send expected_version to reject concurrent changes.

`PATCH /v1/me/subscriptions/{subscription_id}`

Signature:

```typescript
updateSubscription(subscription_id: InputValue<string>,
 params: (InputValue<UpdateMeSubscriptionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequest.md#updatemesubscriptionrequest) | The request body for: Update subscription. |

Body model: [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequest.md#updatemesubscriptionrequest).

#### me.updateSubscription body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | minimum: `1`. maximum: `365`. |
| `cancel_at_period_end` | Optional | boolean | Values: `false`. |
| `delivery` | Optional | [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `payment_method_id` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
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

Complete body and metadata: `updateSubscriptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateSubscription("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateSubscription.mjs)

### me.updateSubscriptionLineItem

Swaps a subscription line to an offered variant for future renewals. Requires a full buyer session. Send expected_version to reject concurrent changes. The replacement must remain deliverable to the subscription destination.

`PATCH /v1/me/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```typescript
updateSubscriptionLineItem(subscription_id: InputValue<string>,
 subscription_line_item_id: InputValue<string>,
 params: (InputValue<UpdateMeSubscriptionLineItemRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"customer">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string |  |
| `subscription_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequest.md#updatemesubscriptionlineitemrequest) | The request body for: Swap subscription variant. |

Body model: [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequest.md#updatemesubscriptionlineitemrequest).

#### me.updateSubscriptionLineItem body fields

Field definitions: [shared fields](../models/UpdateMeSubscriptionLineItemRequest.md#updatemesubscriptionlineitemrequest).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

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

Complete body and metadata: `updateSubscriptionLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.updateSubscriptionLineItem("example", "example", {variant_id: "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/me-updateSubscriptionLineItem.mjs)

