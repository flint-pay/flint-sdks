[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentIntents

### paymentIntents.cancel

Cancels a standalone or order-owned payment intent. Read supported_actions for the actions its stored state accepts. Canceling a hold moves all of capturable_money to released_money, and nothing is charged. A processing payment intent returns 409 ACTION_NOT_ALLOWED with reason in_progress; refund a succeeded one instead. Flint derives the owning order payment attempt. A leg held by an active order payment attempt may be refused. Omitted cancellation_reason stays absent. A fresh request for a canceled or expired payment returns ACTION_NOT_ALLOWED with reason already_applied; a same-key retry replays or recovers its original result. A checkout credential can cancel only its own order leg, with requested_by_customer or abandoned when a reason is supplied.

`POST /v1/payment-intents/{payment_intent_id}/cancel`

Signature:

```typescript
cancel(payment_intent_id: InputValue<string>,
 params?: (InputValue<CancelPaymentIntentRequestInput> |
  {
  "cancellation_reason"?: never;
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"checkout" | "merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CancelPaymentIntentRequestInput](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest) | The request body for: Cancel payment intent. |

Body model: [CancelPaymentIntentRequestInput](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest).

#### paymentIntents.cancel body fields

Field definitions: [shared fields](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest).

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.cancel("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-cancel.mjs)

### paymentIntents.capture

Captures a standalone or order-owned payment intent in requires_capture. Omit amount_money to capture all of capturable_money, or send a smaller amount for a partial capture. Flint releases the uncaptured remainder in the same request, and a payment intent can be captured only once. amount_money on the payment intent keeps the requested amount; captured_money and released_money record the result. Affirm payments can only be captured in full. Flint derives the owning order payment attempt; order_payment_attempt_id is not accepted. An expired authorization is refreshed before capture and refused with ACTION_NOT_ALLOWED and reason terminal_status or authorization_expired. A fresh request for an already captured payment returns ACTION_NOT_ALLOWED with reason already_applied; a same-key retry replays or recovers its original result.

`POST /v1/payment-intents/{payment_intent_id}/capture`

Signature:

```typescript
capture(payment_intent_id: InputValue<string>,
 params?: (InputValue<CapturePaymentIntentRequestInput> |
  {
  "amount_money"?: never;
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CapturePaymentIntentRequestInput](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest) | The request body for: Capture payment intent. |

Body model: [CapturePaymentIntentRequestInput](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest).

#### paymentIntents.capture body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

Complete body and metadata: `captureWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.capture("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-capture.mjs)

### paymentIntents.confirm

Confirms a standalone payment intent. For the first confirmation, send credential_type stripe_confirmation_token, token, or payment_method with its matching credential; a missing credential returns INVALID_REQUEST. After the buyer completes current_payment_action, call this route again with credential_type attached to continue the same payment attempt. Flint confirms again only if the processor still requires it, and otherwise returns the current payment intent. Unverified fee fields are omitted. current_payment_action is null when no buyer action is needed. It can also be null while status is requires_action if Flint cannot produce the action yet; call confirm again with credential_type attached. Order-owned payment intents return 409 ACTION_NOT_ALLOWED with reason order_owned and supported_actions; pay them through POST /v1/orders/{order_id}/pay using remediation.next_actions.

`POST /v1/payment-intents/{payment_intent_id}/confirm`

Signature: `confirm(input: PaymentIntentsConfirmInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Flint-Buyer-Device` | Optional | string | pattern: `^[a-f0-9]{32}$`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConfirmPaymentIntentRequestInput](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest) | The request body for: Confirm payment intent. |

Body model: [ConfirmPaymentIntentRequestInput](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest).

#### paymentIntents.confirm body oneOf variant 1

The `token` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestTokenInput](../models/ConfirmPaymentIntentRequestToken.md#confirmpaymentintentrequesttoken).

#### paymentIntents.confirm body oneOf variant 1 fields

Field definitions: [shared fields](../models/ConfirmPaymentIntentRequestToken.md#confirmpaymentintentrequesttoken).

#### paymentIntents.confirm body oneOf variant 2

The `payment_method` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestPaymentMethodInput](../models/ConfirmPaymentIntentRequestPaymentMethod.md#confirmpaymentintentrequestpaymentmethod).

#### paymentIntents.confirm body oneOf variant 2 fields

Field definitions: [shared fields](../models/ConfirmPaymentIntentRequestPaymentMethod.md#confirmpaymentintentrequestpaymentmethod).

#### paymentIntents.confirm body oneOf variant 3

The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestStripeConfirmationTokenInput](../models/ConfirmPaymentIntentRequestStripeConfirmationToken.md#confirmpaymentintentrequeststripeconfirmationtoken).

#### paymentIntents.confirm body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"stripe_confirmation_token"`. |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `save_payment_method` | Optional | boolean | On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Default: `false`. |
| `stripe` | Required | object | Stripe credential collected for this payment. |

#### paymentIntents.confirm body oneOf variant 4

Confirm using the payment source already attached.

Body model: [ConfirmPaymentIntentRequestAttachedInput](../models/ConfirmPaymentIntentRequestAttached.md#confirmpaymentintentrequestattached).

#### paymentIntents.confirm body oneOf variant 4 fields

Field definitions: [shared fields](../models/ConfirmPaymentIntentRequestAttached.md#confirmpaymentintentrequestattached).

#### Response

Returned payload: [PaymentIntentWithAction](../models/PaymentIntentWithAction.md#paymentintentwithaction).

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

Complete body and metadata: `confirmWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.confirm({payment_intent_id: "example", body: {credential_type: "token", payment_source_token: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-confirm.mjs)

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant and returns it flat in data with required payment_collection guidance. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

`POST /v1/payment-intents`

Signature:

```typescript
create(params: (InputValue<CreatePaymentIntentRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePaymentIntentRequestInput](../models/CreatePaymentIntentRequest.md#createpaymentintentrequest) | The request body for: Create standalone payment intent. |

Body model: [CreatePaymentIntentRequestInput](../models/CreatePaymentIntentRequest.md#createpaymentintentrequest).

#### paymentIntents.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to request from the buyer, including any tip_money. With capture_method manual, this is the hold amount, and you can capture less of it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `customer_id` | Optional | string | Customer to link to this payment intent. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_options` | Required | Array of string | Payment options the buyer can use. Name at least one. minItems: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_return_url` | Optional | string | Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm. Required when payment_options includes affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. minLength: `1`. pattern: `\S`. |
| `receipt_email` | Optional | string | Email address for this payment's receipt. When omitted, Flint uses the customer's email. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `transaction_purpose` | Optional | string | Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Values: `"goods"`, `"services"`, `"other"`. |

#### Response

Returned payload: ({ "payment_collection": unknown; }) & (Exclude&lt;[PaymentIntentWithCollection](../models/PaymentIntentWithCollection.md#paymentintentwithcollection) & object, readonly unknown[]&gt;).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_on_fees` | Optional | Array of [PaymentAddOnFee](../models/PaymentAddOnFee.md#paymentaddonfee) | Itemized invoice, subscription, and automatic tax fees collected with this payment. Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Deadline to capture a manual-capture hold. The authorization lapses at this time, and a capture attempted after it fails even if status is still requires_capture. Set when the hold is placed. Format: `date-time`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [8 declared values](#paymentintentscreate-response-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount collected from the buyer. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The linked customer. Returned only with expand=customer. |
| `customer_id` | Optional | string | Customer linked to this payment intent. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentscreate-response-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. |
| `merchant_net_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amount minus processing_fee_money and every amount in add_on_fees. Later merchant assessments and credits are separate balance effects. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `processing_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flint's all-in processing fee for this payment. It is the complete price Flint charges to process the payment, never a provider cost passed through. The fee is final once the card payment is captured or the ACH payment succeeds; canceled payments and failures before success have none. Invoice, subscription, and automatic tax fees are itemized separately in add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Format: `email`. maxLength: `255`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null | Risk assessment. Always present with merchant credentials; null when no risk assessment is available. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `payment_collection` | Required | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Setup details your client uses to collect the buyer's payment details. Required on both standalone and order-owned creates. On GET, returned only for a standalone intent in requires_payment_method or requires_confirmation, and omitted for an intent owned by a checkout session when read with merchant credentials. Order-owned intents never include it on GET; use Order.payment_collection, whose selectable_payment_intents lists the staged payments. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |

#### paymentIntents.create response cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`

#### paymentIntents.create response dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.create({amount_money: {amount: "5000", currency: "USD"}, payment_options: ["card"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-create.mjs)

### paymentIntents.get

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. For a standalone payment intent in requires_action, call confirm with credential_type attached to retrieve current_payment_action.

`GET /v1/payment-intents/{payment_intent_id}`

Signature:

```typescript
get(payment_intent_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"customer" | "invoice" | "order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"invoice"`, `"order"`. |

#### Response

Returned payload: [PaymentIntentWithCollection](../models/PaymentIntentWithCollection.md#paymentintentwithcollection).

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

```typescript
const result = await client.paymentIntents.get("example", {}, {  });
```

[Complete runnable example](../examples/paymentIntents-get.mjs)

### paymentIntents.list

Returns a paginated list of payment intents for the authenticated merchant. Default order: created_at descending, then payment_intent_id descending.

`GET /v1/payment-intents`

Signature:

```typescript
list(params?: {
  "idempotency_key"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "customer_id"?: InputValue<string>;
  "invoice_id"?: InputValue<string>;
  "is_action_required"?: InputValue<boolean>;
  "status"?: InputValue<Array<"requires_payment_method" |
    "requires_confirmation" |
    "requires_action" |
    "processing" |
    "requires_capture" |
    "canceled" |
    "succeeded" |
    "expired">>;
  "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
  "payment_flow"?: InputValue<Array<"checkout" |
    "payment_link" |
    "invoice" |
    "subscription_initial" |
    "subscription_renewal" |
    "virtual_terminal" |
    "api">>;
  "external_reference_id"?: InputValue<string>;
  "return_id"?: InputValue<string>;
  "return_resolution_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "min_amount"?: InputValue<`${bigint}` | bigint>;
  "max_amount"?: InputValue<`${bigint}` | bigint>;
  "currency"?: InputValue<string>;
  "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
  "dispute_status"?: InputValue<Array<"none" |
    "inquiry_needs_response" |
    "inquiry_under_review" |
    "inquiry_closed" |
    "needs_response" |
    "under_review" |
    "won" |
    "lost" |
    "prevented" |
    "other">>;
  "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"customer" | "invoice" | "order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `order_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `invoice_id` | Optional | string |  |
| `is_action_required` | Optional | boolean |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `risk_level` | Optional | Array of string | minItems: `1`. Items values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `payment_flow` | Optional | Array of string | minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `query` | Optional | string |  |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `refund_status` | Optional | Array of string | minItems: `1`. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `dispute_status` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](#paymentintentslist-input-dispute_status--values). |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"invoice"`, `"order"`. |

#### paymentIntents.list input dispute_status [] values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

#### Response

Returned payload: [PaymentIntentListResponse](../models/PaymentIntentListResponse.md#paymentintentlistresponse).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentIntents.list({}, {  });
```

[Complete runnable example](../examples/paymentIntents-list.mjs)

### paymentIntents.listActivities

Returns a read-only, human-readable history for a payment intent. Read the payment intent or referenced resource for authoritative state; this log does not replace webhooks or a ledger. Results default to newest first, with payment_intent_activity_id breaking timestamp ties in the same direction. Use sort_direction=asc for a chronological timeline. Page tokens are bound to the payment intent, merchant, environment, activity_type filter, and sort direction. Default order: created_at descending, then payment_intent_activity_id descending.

`GET /v1/payment-intents/{payment_intent_id}/activities`

Signature:

```typescript
listActivities(payment_intent_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "activity_type"?: InputValue<Array<"created" |
    "updated" |
    "status_changed" |
    "failed" |
    "canceled" |
    "expired" |
    "refund_created" |
    "refund_status_changed" |
    "dispute_status_changed" |
    "receipt_sent">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string | minItems: `1`. Items values: [10 declared values](#paymentintentslistactivities-input-activity_type--values). |

#### paymentIntents.listActivities input activity_type [] values

- `"created"`
- `"updated"`
- `"status_changed"`
- `"failed"`
- `"canceled"`
- `"expired"`
- `"refund_created"`
- `"refund_status_changed"`
- `"dispute_status_changed"`
- `"receipt_sent"`

#### Response

Returned payload: [PaymentIntentActivityListResponse](../models/PaymentIntentActivityListResponse.md#paymentintentactivitylistresponse).

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

Complete body and metadata: `listActivitiesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`, `listActivitiesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentIntents.listActivities("example", {}, {  });
```

[Complete runnable example](../examples/paymentIntents-listActivities.mjs)

### paymentIntents.sendReceipt

Queues a receipt for a succeeded payment intent and returns the payment intent unchanged. For an order-owned payment intent, sends the order receipt. Once sent, the receipt appears as a receipt_sent payment intent activity. Send email to choose a recipient. Omit email to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. The saved receipt email stays unchanged. Requires Flint-managed receipt delivery. Standalone sending is limited to once every five minutes per payment intent; order receipt sending is limited to once every five minutes per order and normalized recipient. Retry with the same Idempotency-Key to replay the result without sending again.

`POST /v1/payment-intents/{payment_intent_id}/send-receipt`

Signature:

```typescript
sendReceipt(payment_intent_id: InputValue<string>,
 params?: (InputValue<SendPaymentIntentReceiptRequestInput> |
  {
  "email"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [SendPaymentIntentReceiptRequestInput](../models/SendPaymentIntentReceiptRequestInput.md#sendpaymentintentreceiptrequestinput) | The request body for: Send a payment receipt. |

Body model: [SendPaymentIntentReceiptRequestInput](../models/SendPaymentIntentReceiptRequestInput.md#sendpaymentintentreceiptrequestinput).

#### paymentIntents.sendReceipt body fields

Field definitions: [shared fields](../models/SendPaymentIntentReceiptRequestInput.md#sendpaymentintentreceiptrequestinput).

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

Complete body and metadata: `sendReceiptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.sendReceipt("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-sendReceipt.mjs)

### paymentIntents.update

Applies a sparse update while status is requires_payment_method, requires_confirmation, requires_action, or requires_capture. In processing, succeeded, canceled, or expired it returns 409 ACTION_NOT_ALLOWED with reason in_progress or terminal_status, with the status in error.details[].current_status. amount_money can change only while status is requires_payment_method and before the first confirmation attempt; after that, create a new payment intent. customer_id can change only while status is requires_payment_method, and receipt_email only while it is requires_payment_method or requires_confirmation. Send null to clear tip_money, external_reference_id, receipt_email, or all metadata; amount_money and customer_id cannot be cleared. Order-owned intents accept only metadata and external_reference_id; amount_money, tip_money, customer_id, and receipt_email return INVALID_REQUEST with one NOT_ALLOWED detail per field. This route doesn't attach a payment source: send the buyer's credential to the confirm route.

`PATCH /v1/payment-intents/{payment_intent_id}`

Signature:

```typescript
update(payment_intent_id: InputValue<string>,
 params: (InputValue<UpdatePaymentIntentRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePaymentIntentRequestInput](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequest) | The request body for: Update payment intent. |

Body model: [UpdatePaymentIntentRequestInput](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequest).

#### paymentIntents.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payment amount. Can change only while status is requires_payment_method and before the first confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Can change only while status is requires_payment_method. Cannot be cleared. minLength: `1`. |
| `expected_version` | Optional | integer string | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. Omit it to keep the current value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `receipt_email` | Optional | string or null | Send null to clear it. Omit it to keep the current value. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value. |

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-update.mjs)

