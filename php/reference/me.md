[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# me

### me.cancelReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Signature: `cancelReturn(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `body` | Required | [CancelReturnRequestInput](../models/CancelReturnRequestInput.md#cancelreturnrequestinput) | The request body for: Cancel one of the current buyer's Returns; Cancel return. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->cancelReturn('ret_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'reason' => 'buyer_request',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-cancelReturn.php)

### me.cancelSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription and records who asked, why, and when in cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired), and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Signature: `cancelSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [CancelSubscriptionRequestInput](../models/CancelSubscriptionRequestInput.md#cancelsubscriptionrequestinput) | The request body for: Cancel one of the current buyer's subscriptions; Cancel subscription. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->cancelSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'cancel_immediately' => false,
  'cancellation_reason_code' => 'too_expensive',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-cancelSubscription.php)

### me.confirmEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false. A successful confirmation signs the buyer out everywhere at this store: it revokes every customer session, buyer access grant, and Flint-hosted account session for the customer, including the session that made this request. Sign the buyer in again with the new email.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Signature: `confirmEmailChangeRequest(string|Model $email_change_request_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_change_request_id` | Required | string | Flint email change request ID. |
| `body` | Required | [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequestInput.md#confirmemailchangerequestinput) | The request body for: Confirm an email change. |

Body model: [ConfirmEmailChangeRequestInput](../models/ConfirmEmailChangeRequestInput.md#confirmemailchangerequestinput).

#### me.confirmEmailChangeRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | minLength: `1`. pattern: `^[0-9]{6}$`. |
| `new_email_code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequestInput.md#emailchangerequestinput).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->confirmEmailChangeRequest('cecr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'new_email_code' => '123456',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-confirmEmailChangeRequest.php)

### me.createAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Saves an address for the buyer. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later by setting those flags with PATCH, including the buyer's first address. A default address is also the billing or shipping address on the buyer's customer profile.

`POST /v1/me/addresses`

Signature: `createAddress(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequestInput.md#createcustomeraddressrequestinput) | The request body for: Create a customer address; Create an address for the current buyer. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createAddress([
  'address' => (object) [
    'city' => 'Springfield',
    'country' => 'US',
    'line1' => '100 Example Street',
    'postal_code' => '62701',
    'state' => 'IL',
  ],
  'recipient_name' => 'Jordan Example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createAddress.php)

### me.createDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks the store to delete the buyer's account, or returns the request already pending. The store approves or rejects it. Deletion anonymizes the customer: orders, payments, and refunds stay without the buyer's identity.

`POST /v1/me/deletion-requests`

Signature: `createDeletionRequest(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createDeletionRequest([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createDeletionRequest.php)

### me.createEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds. Limited to three attempts per 15 minutes, including attempts rejected because the email is already used. A rejected attempt keeps any pending email change request. Over the limit, the request returns 429 RATE_LIMIT_EXCEEDED with Retry-After set to the whole seconds until the oldest counted attempt leaves the window, at least 1.

`POST /v1/me/email-change-requests`

Signature: `createEmailChangeRequest(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequestInput.md#createemailchangerequestinput) | The request body for: Request an email change. |

Body model: [CreateEmailChangeRequestInput](../models/CreateEmailChangeRequestInput.md#createemailchangerequestinput).

#### me.createEmailChangeRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `new_email` | Required | string | Format: `email`. minLength: `1`. maxLength: `320`. |

#### Response

Returned payload: [EmailChangeRequest](../models/EmailChangeRequestInput.md#emailchangerequestinput).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createEmailChangeRequest([
  'new_email' => 'example@example.invalid',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createEmailChangeRequest.php)

### me.createFlintWalletStoreSetup

Records the buyer's consent to save an independent store copy for off-session payments, including subscriptions. Call only after the buyer agrees. Requires a live email-code buyer login and an enabled Flint wallet at a Flint-hosted store account. Supply a flint_wallet_card_id from listMeFlintWalletCards. Confirm client_setup with Stripe.js confirmSetup, then poll GET /v1/me/payment-methods/{payment_method_id} until active before changing a subscription through PATCH /v1/me/subscriptions/{subscription_id} with payment_method_id. Setup may request authentication. Removing the platform card or revoking store consent blocks the copy immediately. Idempotency-Key is optional and scoped to the store, customer, card handle, and key. Responses are retained for 24 hours. After a copy is revoked, retries with any key bound to that copy are refused. Get new consent and use a new key to create another copy. Retry a lost response with the same key. Concurrent requests for the same card at this store share one copy and setup. A failed off-session charge can still require the buyer to return through the existing card-update link. Accept an empty body or {}.

`POST /v1/me/flint-wallet/cards/{flint_wallet_card_id}/store-setups`

Signature: `createFlintWalletStoreSetup(string|Model $flint_wallet_card_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createFlintWalletStoreSetup('fwc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createFlintWalletStoreSetup.php)

### me.createInvoiceCheckoutSession

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection. When the invoice's order has items to deliver, a new session offers the delivery methods in settings.checkout.default_delivery_method_ids, and the request returns 409 ACTION_NOT_ALLOWED with reason configuration_required when those methods cannot deliver every item. return_url sets where the checkout sends the buyer after paying. A reused session takes a new return_url only until a payment starts on it, and keeps the one it has after that.

`POST /v1/me/invoices/{invoice_id}/checkout-sessions`

Signature: `createInvoiceCheckoutSession(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](invoices.md#request-fields-3). Models: [InvoiceCheckoutSessionRequestInput](../models/InvoiceCheckoutSessionRequestInput.md#invoicecheckoutsessionrequestinput).

#### Response

Returned payload: [BuyerInvoiceCheckoutSessionResult](../models/BuyerInvoiceCheckoutSessionResult.md#buyerinvoicecheckoutsessionresult).

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

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createInvoiceCheckoutSession('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createInvoiceCheckoutSession.php)

### me.createPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Starts saving a payment method for the buyer and returns the client setup to confirm in the browser. The payment method is pending until setup succeeds.

`POST /v1/me/payment-methods`

Signature: `createPaymentMethod(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequestInput.md#savemepaymentmethodrequestinput) | The request body for: Create a payment method for the current buyer. |

Body model: [SaveMePaymentMethodRequestInput](../models/SaveMePaymentMethodRequestInput.md#savemepaymentmethodrequestinput).

#### me.createPaymentMethod body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string | Values: `"card"`. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createPaymentMethod([
  'type' => 'card',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createPaymentMethod.php)

### me.createReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Requests a Return for one of the buyer's orders. An active return policy must cover each line and leave the requested quantity eligible, or the request fails with 409 ACTION_NOT_ALLOWED with reason not_offered. Check can_buyer_request with POST /v1/me/return-previews first. The buyer's reason must be active and apply to the line, and a policy that sends the request to review leaves the Return waiting for the store's decision.

`POST /v1/me/returns`

Signature: `createReturn(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequestInput.md#buyercreatereturnrequestinput) | The request body for: Create a Return for the current buyer. |

Body model: [BuyerCreateReturnRequestInput](../models/BuyerCreateReturnRequestInput.md#buyercreatereturnrequestinput).

#### me.createReturn body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequestInput.md#returnlineitemrequestinput) | minItems: `1`. maxItems: `100`. Items: An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |
| `order_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [BuyerReturn](../models/BuyerReturn.md#buyerreturn).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createReturn([
  'line_items' => [
    (object) [
      'order_line_item_id' => 'li_01ARZ3NDEKTSV4RRFFQ69G5FAV',
      'requested_quantity' => 1,
      'return_reason_id' => 'rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
  'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createReturn.php)

### me.createReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Signature: `createReturnPreview(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequestInput.md#buyercreatereturnpreviewrequestinput) | The request body for: Preview Return eligibility or resolution amounts for the current buyer. |

Body model: [BuyerCreateReturnPreviewRequestInput](../models/BuyerCreateReturnPreviewRequestInput.md#buyercreatereturnpreviewrequestinput).

#### me.createReturnPreview body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequestInput.md#buyercreatereturnresolutionpreviewrequestinput) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

#### me.createReturnPreview with `mode: "eligibility"`

The `eligibility` variant of `BuyerCreateReturnPreviewRequest`.

Body model: [BuyerCreateReturnPreviewRequestEligibilityInput](../models/BuyerCreateReturnPreviewRequestEligibilityInput.md#buyercreatereturnpreviewrequesteligibilityinput).

#### me.createReturnPreview with `mode: "resolution"`

The `resolution` variant of `BuyerCreateReturnPreviewRequest`.

Body model: [BuyerCreateReturnPreviewRequestResolutionInput](../models/BuyerCreateReturnPreviewRequestResolutionInput.md#buyercreatereturnpreviewrequestresolutioninput).

#### Response

Returned payload: [BuyerReturnPreviewResponseDataEligibility](../models/BuyerReturnPreviewResponseDataEligibility.md#buyerreturnpreviewresponsedataeligibility)|[BuyerReturnPreviewResponseDataResolution](../models/BuyerReturnPreviewResponseDataResolution.md#buyerreturnpreviewresponsedataresolution)|Model.

##### Response variant 1

The `eligibility` variant of `BuyerReturnPreview`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | object | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | object | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

##### Response variant 2

The `resolution` variant of `BuyerReturnPreview`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | object | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | object | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->me->createReturnPreview([
  'mode' => 'eligibility',
  'eligibility' => (object) [
    'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    'selection' => (object) [
      'selection_type' => 'all_remaining_fulfilled',
    ],
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/me-createReturnPreview.php)

### me.createReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement order linked to this return resolution. Returns 200 when reusing an existing session and 201 when creating one. Omit surface to use hosted. The same surface reuses the open session; changing surface replaces an idle session and is refused while a payment is in progress. Use redirects to set where the buyer goes after paying or canceling. The return_url field is an alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout and must be an address of the merchant's customer account. A reused session takes a new success destination only until a payment starts, then keeps its existing destination.

`POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions`

Signature: `createReturnResolutionCheckoutSession(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string | Flint return resolution id. |
| `body` | Optional | [GetOrCreateReturnResolutionCheckoutSessionRequestInput](../models/GetOrCreateReturnResolutionCheckoutSessionRequestInput.md#getorcreatereturnresolutioncheckoutsessionrequestinput) | The request body for: Create a Return resolution checkout session for the current buyer; Get or create return resolution checkout session. |

#### Response

Returned payload: [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createReturnResolutionCheckoutSession('retres_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createReturnResolutionCheckoutSession.php)

### me.createSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome. While cancellation is scheduled, a new buyer retry returns 409 ACTION_NOT_ALLOWED with reason cancellation_scheduled and current_status past_due. First use PATCH /v1/me/subscriptions/{subscription_id} with cancel_at_period_end false to keep the subscription; retry_payment becomes available again if the other retry conditions allow it. Only one retry may be in progress at a time. Buyers can start a retry while fewer than 3 retries have been created for the current billing period, counting the store's retries too. subscription_card_update email-link sessions can start retries.

`POST /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature: `createSubscriptionPaymentRetry(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->createSubscriptionPaymentRetry('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-createSubscriptionPaymentRetry.php)

### me.createSubscriptionPreview

Estimates a buyer's next subscription renewal, or lists delivery methods and rates for a proposed destination, without changing the subscription. next_renewal includes recurring promotions, shipping, and tax for the next charged cycle. Tax is null when no tax address is available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Requires a full buyer session. A preview does not reserve inventory or guarantee a future shipping rate.

`POST /v1/me/subscription-previews`

Signature: `createSubscriptionPreview(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequestInput.md#createmesubscriptionpreviewrequestinput) | The request body for: Preview subscription. |

Body model: [CreateMeSubscriptionPreviewRequestInput](../models/CreateMeSubscriptionPreviewRequestInput.md#createmesubscriptionpreviewrequestinput).

#### me.createSubscriptionPreview with `mode: "delivery_options"`

The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestDeliveryOptionsInput](../models/CreateMeSubscriptionPreviewRequestDeliveryOptionsInput.md#createmesubscriptionpreviewrequestdeliveryoptionsinput).

#### me.createSubscriptionPreview with `mode: "next_renewal"`

The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`.

Body model: [CreateMeSubscriptionPreviewRequestNextRenewalInput](../models/CreateMeSubscriptionPreviewRequestNextRenewalInput.md#createmesubscriptionpreviewrequestnextrenewalinput).

#### Response

Returned payload: [BuyerSubscriptionPreviewResponseDataDeliveryOptions](../models/BuyerSubscriptionPreviewResponseDataDeliveryOptions.md#buyersubscriptionpreviewresponsedatadeliveryoptions)|[BuyerSubscriptionPreviewResponseDataNextRenewal](../models/BuyerSubscriptionPreviewResponseDataNextRenewal.md#buyersubscriptionpreviewresponsedatanextrenewal)|Model.

##### Response variant 1

Available subscription delivery methods shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerificationInput.md#subscriptionaddressverificationinput) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Optional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Optional | [Address](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableaddressadvisoriesitemsuggestedaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string | Always delivery_options for buyer previews. Values: `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

##### Response variant 2

A preview of a subscription's next renewal and its estimated pricing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"next_renewal"`. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->me->createSubscriptionPreview([
  'mode' => 'next_renewal',
  'subscription_id' => 'sub_00000000000000000000000000',
], new RequestOptions());
```

[Complete runnable example](../examples/me-createSubscriptionPreview.php)

### me.deleteAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes one of the buyer's saved addresses. Deleting the billing or shipping default leaves the customer with none; Flint doesn't pick another address.

`DELETE /v1/me/addresses/{customer_address_id}`

Signature: `deleteAddress(string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->deleteAddress('caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-deleteAddress.php)

### me.deletePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Signature: `deletePaymentMethod(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->deletePaymentMethod('pm_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-deletePaymentMethod.php)

### me.get

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the buyer's customer profile.

`GET /v1/me`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->get([], new RequestOptions());
```

[Complete runnable example](../examples/me-get.php)

### me.getAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved addresses.

`GET /v1/me/addresses/{customer_address_id}`

Signature: `getAddress(string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getAddress('caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getAddress.php)

### me.getCreditNote

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Signature: `getCreditNote(string|Model $invoice_id, string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getCreditNote('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'cn_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getCreditNote.php)

### me.getCreditNotePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and shows the credited lines, totals, and the invoice it corrects. It uses your current branding, so a later download can differ in logo or colors, but not in content.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Signature: `getCreditNotePDF(string|Model $invoice_id, string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `credit_note_id` | Required | string | Flint credit note ID. |

#### Response

Response body (inside Result.data): null.

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
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->me->getCreditNotePDF('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'cn_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getCreditNotePDF.php)

### me.getDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the status of one of the buyer's deletion requests.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Signature: `getDeletionRequest(string|Model $customer_deletion_request_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string | Flint customer deletion request ID. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getDeletionRequest('cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getDeletionRequest.php)

### me.getEmailPreferences

Uses the customer identity fixed by the customer session. Returns which of the merchant's optional email categories the customer's current email receives in the selected merchant environment. A category the buyer never changed is on. Email preferences exist only for a customer with an email: without one, the read returns 404 RESOURCE_NOT_FOUND. Receipts and other transactional email always send.

`GET /v1/me/email-preferences`

Signature: `getEmailPreferences(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferencesInput.md#customeremailpreferencesinput).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getEmailPreferences([], new RequestOptions());
```

[Complete runnable example](../examples/me-getEmailPreferences.php)

### me.getFulfillment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's fulfillments.

`GET /v1/me/fulfillments/{fulfillment_id}`

Signature: `getFulfillment(string|Model $fulfillment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getFulfillment('ful_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getFulfillment.php)

### me.getGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code.

`GET /v1/me/gift-cards/{gift_card_id}`

Signature: `getGiftCard(string|Model $gift_card_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getGiftCard('gc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getGiftCard.php)

### me.getInvoice

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns one of the buyer's invoices. A draft invoice returns 404.

`GET /v1/me/invoices/{invoice_id}`

Signature: `getInvoice(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getInvoice('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getInvoice.php)

### me.getInvoicePDF

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Returns the invoice document as application/pdf rather than a JSON envelope.

`GET /v1/me/invoices/{invoice_id}/pdf`

Signature: `getInvoicePDF(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |

#### Response

Response body (inside Result.data): null.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `customer`, `invoice`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->me->getInvoicePDF('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getInvoicePDF.php)

### me.getOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's orders.

`GET /v1/me/orders/{order_id}`

Signature: `getOrder(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getOrder('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getOrder.php)

### me.getPackage

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's packages.

`GET /v1/me/packages/{package_id}`

Signature: `getPackage(string|Model $package_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getPackage('pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getPackage.php)

### me.getPaymentIntent

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's payments.

`GET /v1/me/payment-intents/{payment_intent_id}`

Signature: `getPaymentIntent(string|Model $payment_intent_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getPaymentIntent('pi_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getPaymentIntent.php)

### me.getPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's saved payment methods.

`GET /v1/me/payment-methods/{payment_method_id}`

Signature: `getPaymentMethod(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getPaymentMethod('pm_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getPaymentMethod.php)

### me.getRefund

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's refunds.

`GET /v1/me/refunds/{refund_id}`

Signature: `getRefund(string|Model $refund_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getRefund('ref_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getRefund.php)

### me.getReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's Returns.

`GET /v1/me/returns/{return_id}`

Signature: `getReturn(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getReturn('ret_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getReturn.php)

### me.getReturnResolution

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a buyer-visible Return resolution, including the amount the buyer needs to pay. Use the checkout_session action to pay its balance.

`GET /v1/me/return-resolutions/{return_resolution_id}`

Signature: `getReturnResolution(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getReturnResolution('retres_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getReturnResolution.php)

### me.getShipment

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's shipments.

`GET /v1/me/shipments/{shipment_id}`

Signature: `getShipment(string|Model $shipment_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->getShipment('shp_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getShipment.php)

### me.getSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one of the buyer's subscriptions. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan.

`GET /v1/me/subscriptions/{subscription_id}`

Signature: `getSubscription(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->getSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getSubscription.php)

### me.getSubscriptionPaymentRetry

Uses the customer identity fixed by the customer session. Returns one durable manual subscription payment retry.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Signature:

```text
getSubscriptionPaymentRetry(string|
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
| 410 | ApiError |
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

```php
$result = $client->me->getSubscriptionPaymentRetry('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'spr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-getSubscriptionPaymentRetry.php)

### me.listAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's saved addresses with their billing and shipping default flags. Default order: created_at descending, then customer_address_id descending.

`GET /v1/me/addresses`

Signature: `listAddresses(array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
$result = $client->me->listAddresses([], new RequestOptions());
```

[Complete runnable example](../examples/me-listAddresses.php)

### me.listCreditNotes

Accepts a customer session, which limits the request to that customer's invoices, or the access token from this invoice's public link, which limits it to this invoice. The request cannot select a customer_id. Lists the credit notes issued against this invoice, newest first. Default order: issued_at descending, then credit_note_id descending.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Signature: `listCreditNotes(string|Model $invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | Flint invoice ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"issued"`, `"void"`. Values: `"issued"`, `"void"`. |

#### Response

Returned payload: [BuyerCreditNoteListResponse](../models/BuyerCreditNoteListResponse.md#buyercreditnotelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listCreditNotes('inv_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-listCreditNotes.php)

### me.listDeletionRequests

Uses the customer identity fixed by the customer session. Lists the current buyer's deletion requests in the selected merchant environment, newest first by requested_at. Default order: requested_at descending, then customer_deletion_request_id descending.

`GET /v1/me/deletion-requests`

Signature: `listDeletionRequests(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [CustomerDeletionRequestListResponse](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listDeletionRequests([], new RequestOptions());
```

[Complete runnable example](../examples/me-listDeletionRequests.php)

### me.listFlintWalletCards

Returns the current buyer's usable wallet cards in newest-first order. Each flint_wallet_card_id is an opaque per-store handle. store_payment_method_id is null until this store holds a copy. Requires a customer session minted from a live email-code buyer login at a Flint-hosted store account, including a login narrowed to a custom domain. Email links, checkout sessions, grants, merchant-created sessions, and API keys receive 404. Live and sandbox wallets are isolated. The full card collection is returned in one page. Flint wallet support must be enabled. Default order: most recently added card first.

`GET /v1/me/flint-wallet/cards`

Signature: `listFlintWalletCards(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [BuyerFlintWalletCardListResponse](../models/BuyerFlintWalletCardListResponse.md#buyerflintwalletcardlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listFlintWalletCards([], new RequestOptions());
```

[Complete runnable example](../examples/me-listFlintWalletCards.php)

### me.listFulfillmentEvents

Lists fulfillment events for an order owned by the current buyer, ordered by occurred_at descending. Internal merchant fields are omitted. order_id is required. Default order: occurred_at descending, then fulfillment_event_id descending.

`GET /v1/me/fulfillment-events`

Signature: `listFulfillmentEvents(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Required buyer-owned order ID. |
| `fulfillment_id` | Optional | string | Filter by fulfillment ID. |
| `shipment_id` | Optional | string | Filter by shipment ID. |
| `package_id` | Optional | string | Filter by package ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerFulfillmentEventListResponse](../models/BuyerFulfillmentEventListResponse.md#buyerfulfillmenteventlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listFulfillmentEvents([
  'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions());
```

[Complete runnable example](../examples/me-listFulfillmentEvents.php)

### me.listFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists fulfillments for the buyer's orders, newest created first. Default order: created_at descending, then fulfillment_id descending.

`GET /v1/me/fulfillments`

Signature: `listFulfillments(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `status` | Optional | Array of string or string | Filter by buyer-visible status. Held fulfillments match their pre-hold status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [13 declared values](#melistfulfillments-input-status--values). Values: [13 declared values](#melistfulfillments-input-status-values). |
| `type` | Optional | Array of string or string | Filter by fulfillment type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listFulfillments([], new RequestOptions());
```

[Complete runnable example](../examples/me-listFulfillments.php)

### me.listGiftCards

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending. Default order: time the buyer saved the card (descending), then gift_card_id descending.

`GET /v1/me/gift-cards`

Signature: `listGiftCards(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerGiftCardListResponse](../models/BuyerGiftCardListResponse.md#buyergiftcardlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listGiftCards([], new RequestOptions());
```

[Complete runnable example](../examples/me-listGiftCards.php)

### me.listGiftCardTransactions

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Lists the full anonymous balance-change history by per-card sequence, descending. Other holders' identities and order references are omitted. Default order: sequence descending; this key uniquely orders the results.

`GET /v1/me/gift-cards/{gift_card_id}/transactions`

Signature: `listGiftCardTransactions(string|Model $gift_card_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint gift card ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [BuyerGiftCardTransactionListResponse](../models/BuyerGiftCardTransactionListResponse.md#buyergiftcardtransactionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listGiftCardTransactions('gc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-listGiftCardTransactions.php)

### me.listInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's invoices. Draft invoices are never returned. Default order: created_at descending, then invoice_id descending.

`GET /v1/me/invoices`

Signature: `listInvoices(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by invoice status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. Values: `"open"`, `"partially_paid"`, `"paid"`, `"void"`, `"uncollectible"`, `"credited"`. |
| `order_id` | Optional | string | Filter by Flint order ID. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `due_after` | Optional | string | Inclusive lower bound on due_at. Format: `date-time`. |
| `due_before` | Optional | string | Exclusive upper bound on due_at. Format: `date-time`. |
| `is_overdue` | Optional | boolean | Filter by whether the invoice is overdue. |
| `has_outstanding_balance` | Optional | boolean | Filter by whether outstanding_money is greater than zero. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"due_at"`, `"invoice_number"`, `"outstanding_money"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listInvoices([], new RequestOptions());
```

[Complete runnable example](../examples/me-listInvoices.php)

### me.listOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource. Default order: created_at descending, then order_activity_id descending.

`GET /v1/me/orders/{order_id}/activities`

Signature: `listOrderActivities(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string or string | Filter by activity type. Repeat the parameter or pass comma-separated values to OR multiple types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [27 declared values](../models/OrderActivityInput.md#orderactivityinput-activity_type-values). Values: [27 declared values](../models/OrderActivityInput.md#orderactivityinput-activity_type-values). |

#### Response

Returned payload: [OrderActivityListResponse](../models/OrderActivityListResponse.md#orderactivitylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listOrderActivities('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-listOrderActivities.php)

### me.listOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's orders. Default order: created_at descending, then order_id descending.

`GET /v1/me/orders`

Signature: `listOrders(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `closed_reason` | Optional | Array of string or string | Why a closed order closed. Repeated keys and comma-separated values match any reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string or string | Order status: open or closed. Repeated keys and comma-separated values are both accepted. Selecting open and closed includes both statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"closed"`. Values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string or string | Filter by settled collection status. Repeat the parameter or pass comma-separated values to match any of several statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string or string | Filter by refund progress. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string or string | Filter by aggregate order fulfillment status. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string | Filter by merchant-visible order number. |
| `origin` | Optional | Array of string or string | Separate subscription renewal purchases (subscription) from orders placed through other channels. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listOrders([], new RequestOptions());
```

[Complete runnable example](../examples/me-listOrders.php)

### me.listPackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists packages in the buyer's shipments, newest created first. Default order: created_at descending, then package_id descending.

`GET /v1/me/packages`

Signature: `listPackages(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipment_id` | Optional | string | Optional shipment ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `order_id` | Optional | string | Optional order ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package status. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |

#### Response

Returned payload: [BuyerPackageListResponse](../models/BuyerPackageListResponse.md#buyerpackagelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listPackages([], new RequestOptions());
```

[Complete runnable example](../examples/me-listPackages.php)

### me.listPaymentIntents

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's payments. Default order: created_at descending, then payment_intent_id descending.

`GET /v1/me/payment-intents`

Signature: `listPaymentIntents(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `invoice_id` | Optional | string | Filter by invoice ID. |
| `status` | Optional | Array of string or string | Filter by payment intent status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `payment_flow` | Optional | Array of string or string | Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `refund_status` | Optional | Array of string or string | Exact match on refund_status. Repeat keys or comma-separate values to match any selected status. Combined with dispute_status, both filters must match. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listPaymentIntents([], new RequestOptions());
```

[Complete runnable example](../examples/me-listPaymentIntents.php)

### me.listPaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use. Default order: created_at descending, then payment_method_id descending.

`GET /v1/me/payment-methods`

Signature: `listPaymentMethods(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `type` | Optional | Array of string or string | Filter by payment method type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"card"`. Values: `"card"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. Values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string or string | Filter by usage: off_session payment methods can be charged without the buyer; on_session ones were saved by buyers for faster checkout. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"on_session"`, `"off_session"`. Values: `"on_session"`, `"off_session"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listPaymentMethods([], new RequestOptions());
```

[Complete runnable example](../examples/me-listPaymentMethods.php)

### me.listRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's refunds. Default order: created_at descending, then refund_id descending.

`GET /v1/me/refunds`

Signature: `listRefunds(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. |
| `status` | Optional | Array of string or string | Filter by refund status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
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
| 410 | ApiError |
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

```php
$result = $client->me->listRefunds([], new RequestOptions());
```

[Complete runnable example](../examples/me-listRefunds.php)

### me.listReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's Returns. Filter by order, return number, reason, status, decision, merchandise, resolution, or creation and update time. Default order: created_at descending, then return_id descending.

`GET /v1/me/returns`

Signature: `listReturns(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `decision_status` | Optional | Array of string or string | Filter by decision status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#melistreturns-input-merchandise_status--values). Values: [10 declared values](#melistreturns-input-merchandise_status-values). |
| `order_id` | Optional | string | Filter by order id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_number` | Optional | string | Filter by return number. |
| `return_reason_id` | Optional | string | Filter by return reason id. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
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
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listReturns([], new RequestOptions());
```

[Complete runnable example](../examples/me-listReturns.php)

### me.listShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipments for the buyer's orders and Returns, newest created first. Default order: created_at descending, then shipment_id descending.

`GET /v1/me/shipments`

Signature: `listShipments(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string | Optional order ID filter. |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `return_id` | Optional | string | Filter by linked Return ID. |
| `handed_off_after` | Optional | string | Inclusive lower bound on handed_off_at. Format: `date-time`. |
| `handed_off_before` | Optional | string | Exclusive upper bound on handed_off_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `status` | Optional | Array of string or string | Filter by package-derived shipment status. Values within this filter are combined with OR. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |

#### Response

Returned payload: [BuyerShipmentListResponse](../models/BuyerShipmentListResponse.md#buyershipmentlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listShipments([], new RequestOptions());
```

[Complete runnable example](../examples/me-listShipments.php)

### me.listSubscriptionPaymentRetries

Returns a subscription's manual payment retries, newest first. Default order: created_at descending, then subscription_payment_retry_id descending.

`GET /v1/me/subscriptions/{subscription_id}/payment-retries`

Signature: `listSubscriptionPaymentRetries(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [BuyerSubscriptionPaymentRetryListResponse](../models/BuyerSubscriptionPaymentRetryListResponse.md#buyersubscriptionpaymentretrylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 404 | NotFoundError |
| 410 | ApiError |
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

```php
$result = $client->me->listSubscriptionPaymentRetries('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/me-listSubscriptionPaymentRetries.php)

### me.listSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the buyer's subscriptions. Subscriptions without a next_billing_at never match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in either direction. subscription_plan is always included without expand: the plan's current summary, or null when the subscription has no plan. Default order: created_at descending, then subscription_id descending.

`GET /v1/me/subscriptions`

Signature: `listSubscriptions(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by subscription status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `billing_schedule_owner` | Optional | Array of string or string | Separate subscriptions scheduled by Flint (flint) from those whose billing dates the store supplies (external). Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"flint"`, `"external"`. Values: `"flint"`, `"external"`. |
| `cancel_at_period_end` | Optional | boolean | When true, returns subscriptions scheduled to cancel at the end of the current period that are not yet canceled. When false, returns every other subscription. |
| `delivery_method_id` | Optional | string | Filter by the subscription's selected delivery method. |
| `hold_reason` | Optional | Array of string or string | Find subscriptions needing a new delivery method, address, or rate by the current delivery_hold reason. Does not match upcoming delivery issues. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`. |
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
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```php
$result = $client->me->listSubscriptions([], new RequestOptions());
```

[Complete runnable example](../examples/me-listSubscriptions.php)

### me.pauseSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for at least one billing cycle. A pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause follows the store's customer_account.buyer_capabilities. Send expected_version to reject a concurrent change.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Signature: `pauseSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [PauseSubscriptionRequestInput](../models/PauseSubscriptionRequestInput.md#pausesubscriptionrequestinput) | The request body for: Pause one of the current buyer's subscriptions; Pause subscription. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->pauseSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'pause_duration_cycles' => 2,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-pauseSubscription.php)

### me.removeGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Removes only this buyer's saved access without changing funds or other holders' access. A repeated removal without an idempotency key returns 404 because saved access is already absent. Reusing the same idempotency key replays the original removal snapshot without restoring saved access. Idempotency keys are scoped to the buyer, merchant, environment, and operation. A replay cannot restore removed or revoked saved access.

`DELETE /v1/me/gift-cards/{gift_card_id}`

Signature: `removeGiftCard(string|Model $gift_card_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->removeGiftCard('gc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-removeGiftCard.php)

### me.renewSubscription

Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires a full buyer session and Idempotency-Key. Send expected_version to reject concurrent changes. Retry with the same key to recover the same attempt. Returns the subscription, renewal order, and payment attempt with status 200, including when the payment is declined. Inspect order_payment_attempt.last_payment_error for a failed payment.

`POST /v1/me/subscriptions/{subscription_id}/renew`

Signature: `renewSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [RenewSubscriptionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Renew subscription now. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->renewSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-renewSubscription.php)

### me.resumeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Asks Flint to resume a paused subscription. Returns 202 while the subscription is still paused, with resume_requested_at set. Flint then makes it active, or past_due while an overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with cancel_at_period_end set to false.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Signature: `resumeSubscription(string|Model $subscription_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->resumeSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-resumeSubscription.php)

### me.revokeSession

Signs out the current customer session using its current server-held secret, including after expiry, after revocation, or after its parent buyer session or grant ended. Repeating the call preserves revoked_at. A secret rotated away by refresh is invalid. Flint Account buyer sessions remain independent.

`POST /v1/me/session/revoke`

Signature: `revokeSession(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [CustomerSession](../models/CustomerSessionInput.md#customersessioninput).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->revokeSession([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-revokeSession.php)

### me.saveGiftCard

Requires a full customer session. Saved access requires possession of a current code or recipient link. Customer associations and purchase history do not authorize access. Replacing a code invalidates saved access; save again with fresh proof. Saved access does not permit spending or reveal a full code. Idempotency keys are scoped to the buyer, merchant, environment, and operation. A replay cannot restore removed or revoked saved access.

`POST /v1/me/gift-cards`

Signature: `saveGiftCard(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequestInput.md#savemegiftcardrequestinput) | The request body for: Save a gift card to your account. |

Body model: [SaveMeGiftCardRequestInput](../models/SaveMeGiftCardRequestInput.md#savemegiftcardrequestinput).

#### me.saveGiftCard body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | minLength: `1`. |
| `credential_type` | Required | string | Values: `"code"`, `"recipient_access"`. |
| `grant_id` | Optional | string | minLength: `1`. |
| `recipient_access_token` | Optional | string | minLength: `1`. |

#### me.saveGiftCard with `credential_type: "code"`

The `code` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestCodeInput](../models/SaveMeGiftCardRequestCodeInput.md#savemegiftcardrequestcodeinput).

#### me.saveGiftCard with `credential_type: "recipient_access"`

The `recipient_access` variant of `SaveMeGiftCardRequest`.

Body model: [SaveMeGiftCardRequestRecipientAccessInput](../models/SaveMeGiftCardRequestRecipientAccessInput.md#savemegiftcardrequestrecipientaccessinput).

#### Response

Returned payload: [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->saveGiftCard([
  'credential_type' => 'code',
  'code' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-saveGiftCard.php)

### me.sendOrderReceipt

Queues a receipt email for one of your paid orders to the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient.

`POST /v1/me/orders/{order_id}/send-receipt`

Signature: `sendOrderReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 410 | ApiError |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->sendOrderReceipt('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-sendOrderReceipt.php)

### me.skipSubscriptionCycle

Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals while preserving billing_anchor_day, including in shorter months. Available when buyer skipping is enabled and the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, and is under the store's consecutive skip limit. Requires a full buyer session. Send expected_version to reject concurrent changes.

`POST /v1/me/subscriptions/{subscription_id}/skip-cycle`

Signature: `skipSubscriptionCycle(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `body` | Required | [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Skip subscription cycle. |

Body model: [SkipMeSubscriptionCycleRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### me.skipSubscriptionCycle body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->skipSubscriptionCycle('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-skipSubscriptionCycle.php)

### me.update

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateMeRequestInput](../models/UpdateMeRequestInput.md#updatemerequestinput) | The request body for: Update the current buyer profile. minProperties: `1`. |

Body model: [UpdateMeRequestInput](../models/UpdateMeRequestInput.md#updatemerequestinput).

#### me.update body fields

Field definitions: [shared fields](../models/UpdateMeRequestInput.md#updatemerequestinput).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->update([
  'name' => 'Jordan Example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-update.php)

### me.updateAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the fields you send on one of the buyer's saved addresses. The address field replaces the whole postal address. Send null for phone or label to remove it. Set is_default_billing or is_default_shipping to true to make this address the default, or false to clear a default it holds. Changing a default address also changes the matching address on the buyer's customer profile.

`PATCH /v1/me/addresses/{customer_address_id}`

Signature: `updateAddress(string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | Flint customer address ID. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequestInput.md#updatecustomeraddressrequestinput) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->updateAddress('caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'label' => 'Home',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-updateAddress.php)

### me.updateEmailPreferences

Uses the customer identity fixed by the customer session. Turns the optional email categories in the body on or off for the customer's current email at this merchant in the selected merchant environment, and leaves the others as they are. The setting follows the email address, so it also covers guest checkouts with the same email. A customer without an email has no email preferences, and the change returns 404 RESOURCE_NOT_FOUND.

`PATCH /v1/me/email-preferences`

Signature: `updateEmailPreferences(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequestInput.md#updatecustomeremailpreferencesrequestinput) | The request body for: Update the current buyer's email preferences. minProperties: `1`. |

Body model: [UpdateCustomerEmailPreferencesRequestInput](../models/UpdateCustomerEmailPreferencesRequestInput.md#updatecustomeremailpreferencesrequestinput).

#### me.updateEmailPreferences body fields

Field definitions: [shared fields](../models/UpdateCustomerEmailPreferencesRequestInput.md#updatecustomeremailpreferencesrequestinput).

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferencesInput.md#customeremailpreferencesinput).

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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->updateEmailPreferences([
  'checkout_reminders' => false,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-updateEmailPreferences.php)

### me.updateSubscription

Updates payment_method_id, cancel_at_period_end: false, delivery, billing interval and quantity when the matching buyer action is available. Send billing_interval and billing_interval_count together. Mixed changes commit atomically. A scoped card-update session may send only payment_method_id and expected_version. Send expected_version to reject concurrent changes. A card whose setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached. Once setup finishes, send a new request with a new Idempotency-Key.

`PATCH /v1/me/subscriptions/{subscription_id}`

Signature: `updateSubscription(string|Model $subscription_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Flint subscription ID. |
| `body` | Required | [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequestInput.md#updatemesubscriptionrequestinput) | The request body for: Update subscription. |

Body model: [UpdateMeSubscriptionRequestInput](../models/UpdateMeSubscriptionRequestInput.md#updatemesubscriptionrequestinput).

#### me.updateSubscription body fields

Field definitions: [shared fields](../models/UpdateMeSubscriptionRequestInput.md#updatemesubscriptionrequestinput). Models: [SubscriptionDeliveryRequestInput](../models/SubscriptionDeliveryRequestInput.md#subscriptiondeliveryrequestinput).

#### Response

Returned payload: [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->updateSubscription('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'quantity' => 2,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-updateSubscription.php)

### me.updateSubscriptionLineItem

Swaps a subscription line to an offered variant for future renewals. Requires a full buyer session. Send expected_version to reject concurrent changes. The replacement must remain deliverable to the subscription destination.

`PATCH /v1/me/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`

Signature:

```text
updateSubscriptionLineItem(string|
  Model $subscription_id,
 string|
  Model $subscription_line_item_id,
 array|
  Model $params,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subscription_id` | Required | string | Subscription ID. |
| `subscription_line_item_id` | Required | string | Subscription line item ID. |
| `body` | Required | [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequestInput.md#updatemesubscriptionlineitemrequestinput) | The request body for: Swap subscription variant. |

Body model: [UpdateMeSubscriptionLineItemRequestInput](../models/UpdateMeSubscriptionLineItemRequestInput.md#updatemesubscriptionlineitemrequestinput).

#### me.updateSubscriptionLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
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

Authentication modes: `customer`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->me->updateSubscriptionLineItem('sub_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'sli_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'variant_id' => 'var_00000000000000000000000000',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/me-updateSubscriptionLineItem.php)

