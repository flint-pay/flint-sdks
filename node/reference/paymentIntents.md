[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentIntents

### paymentIntents.cancel

Cancels a standalone or order-owned payment intent. Read supported_actions for the actions its stored state accepts. Canceling a hold moves all of capturable_money to released_money, and nothing is charged. A processing payment intent fails with `ACTION_NOT_ALLOWED` and reason `in_progress`; refund a succeeded one instead. Flint derives the owning order payment attempt. A leg held by an active order payment attempt may be refused. Omitted cancellation_reason stays absent. A fresh request for a canceled or expired payment returns ACTION_NOT_ALLOWED with reason already_applied; a same-key retry replays or recovers its original result. A checkout credential can cancel only its own order leg, with requested_by_customer or abandoned when a reason is supplied.

`POST /v1/payment-intents/{payment_intent_id}/cancel`

Signature: `cancel(payment_intent_id: InputValue<string>, params?: PaymentIntentsCancelParams, options?: RequestOptions<"checkout" | "merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CancelPaymentIntentRequestInput](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest) | The request body for: Cancel payment intent. |

Body model: [CancelPaymentIntentRequestInput](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest).

#### paymentIntents.cancel body fields

Field definitions: [shared fields](../models/CancelPaymentIntentRequest.md#cancelpaymentintentrequest).

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.cancel("pi_01KEZF7C00G8H9D509YEV22P7R", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-cancel.mjs)

### paymentIntents.capture

Captures a standalone or order-owned payment intent in requires_capture. Omit amount_money to capture all of capturable_money, or send a smaller amount for a partial capture. Send final_amount_money and tip_money instead to collect the final bill plus a tip in one charge; with request_overcapture and overcapture.status available, that total can exceed the authorization up to overcapture.maximum_capturable_money. On an order's payment, the bill is at most the payment's share of the order (its authorization minus its tip), the order releases the difference, and the tip becomes the payment's part of the order's tip. Flint releases the uncaptured remainder in the same request, and a payment intent can be captured only once. amount_money on the payment intent keeps the requested amount; captured_money and released_money record the result. Affirm payments can only be captured in full. Flint derives the owning order payment attempt; order_payment_attempt_id is not accepted. An expired authorization is refreshed before capture and refused with ACTION_NOT_ALLOWED and reason terminal_status or authorization_expired. A fresh request for an already captured payment returns ACTION_NOT_ALLOWED with reason already_applied; a same-key retry replays or recovers its original result.

`POST /v1/payment-intents/{payment_intent_id}/capture`

Signature: `capture(payment_intent_id: InputValue<string>, params?: PaymentIntentsCaptureParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CapturePaymentIntentRequestInput](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest) | The request body for: Capture payment intent. |

Body model: [CapturePaymentIntentRequestInput](../models/CapturePaymentIntentRequest.md#capturepaymentintentrequest).

#### paymentIntents.capture body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Can't be combined with final_amount_money or tip_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `final_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The bill without the tip. The capture collects final_amount_money plus tip_money in one charge. With only tip_money, the bill is the authorization minus the tip it carries; when the authorization is all tip, final_amount_money is required. Must be greater than zero, in the payment's currency. On an order's payment, it is at most the authorization minus the tip it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with maximum_money on final_amount_money. The order releases the difference. Not accepted on Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `platform_fee` | Optional | [PlatformFeeRequestInput](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on this payment, set when you know the final bill and tip. Only the partner app install token that created the payment can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee the payment was created with, or adds one if it had none, after the same consent, capability and currency checks as at create: amount_money must be above zero and in the payment's currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required; in live mode the partner app's platform_fees capability must be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than refusing the capture. A payment that belongs to an order can't take it at capture: INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `splits` | Optional | Array of [CapturePaymentSplitRequestInput](../models/CapturePaymentSplitRequestInput.md#capturepaymentsplitrequestinput) | Final split amounts for this capture. List every split that isn't canceled, once each, with an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits can't gain them. Part of the idempotency fingerprint. minItems: `1`. maxItems: `25`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The tip, replacing the tip the authorization carries. Zero captures without a tip. With only final_amount_money, the tip is the one the authorization carries, or zero. At most the larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00 USD and the payment's share of the order's subtotal after discounts. Above it INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment, keeping or lowering the tip the authorization carries is never refused, and the tip becomes this payment's part of the order's tip. A payment that doesn't carry part of the order's requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

const result = await client.paymentIntents.capture("pi_01KEZF7C00G8H9D509YEV22P7R", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-capture.mjs)

### paymentIntents.confirm

Confirms a standalone payment intent. For the first confirmation, send credential_type stripe_confirmation_token, token, payment_method, or reader with its matching credential; a missing credential returns INVALID_REQUEST. After the buyer completes current_payment_action, call this route again with credential_type attached to continue the same payment attempt. Flint confirms again only if the processor still requires it, and otherwise returns the current payment intent. Unverified fee fields are omitted. On a Tap to Pay reader, requires_action returns current_payment_action with action_type card_presentment and stripe.terminal_payment_intent. Retrieve, collect, and confirm that payment with the Stripe Terminal SDK, then confirm with credential_type attached to read the outcome. A decline leaves the payment requires_action with last_payment_error so the app can collect another card; cancel to give up. current_payment_action is null when no buyer action is needed. It can also be null while status is requires_action if Flint cannot produce the action yet; call confirm again with credential_type attached. Order-owned payment intents return 409 ACTION_NOT_ALLOWED with reason order_owned and supported_actions; pay them through POST /v1/orders/{order_id}/pay using remediation.next_actions.

`POST /v1/payment-intents/{payment_intent_id}/confirm`

Signature: `confirm(payment_intent_id: InputValue<string>, params: PaymentIntentsConfirmParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `Flint-Buyer-Device` | Optional | string | An optional stable random device identifier, independent of the payment intent. Keep it for subsequent payments from the same device; it grants no access. pattern: `^[a-f0-9]{32}$`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ConfirmPaymentIntentRequestInput](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput) | The request body for: Confirm payment intent. |

Body model: [ConfirmPaymentIntentRequestInput](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput).

#### paymentIntents.confirm with `credential_type: "token"`

The `token` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestTokenInput](../models/ConfirmPaymentIntentRequestTokenInput.md#confirmpaymentintentrequesttokeninput).

#### paymentIntents.confirm with `credential_type: "payment_method"`

The `payment_method` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestPaymentMethodInput](../models/ConfirmPaymentIntentRequestPaymentMethodInput.md#confirmpaymentintentrequestpaymentmethodinput).

#### paymentIntents.confirm with `credential_type: "stripe_confirmation_token"`

The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestStripeConfirmationTokenInput](../models/ConfirmPaymentIntentRequestStripeConfirmationTokenInput.md#confirmpaymentintentrequeststripeconfirmationtokeninput).

#### paymentIntents.confirm with `credential_type: "attached"`

Confirm using the payment source already attached.

Body model: [ConfirmPaymentIntentRequestAttachedInput](../models/ConfirmPaymentIntentRequestAttachedInput.md#confirmpaymentintentrequestattachedinput).

#### paymentIntents.confirm with `credential_type: "reader"`

The `reader` variant of `ConfirmPaymentIntentRequest`.

Body model: [ConfirmPaymentIntentRequestReaderInput](../models/ConfirmPaymentIntentRequestReaderInput.md#confirmpaymentintentrequestreaderinput).

#### Response

Returned payload: [PaymentIntentWithAction](../models/PaymentIntentWithAction.md#paymentintentwithaction).

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

const result = await client.paymentIntents.confirm("pi_01KEZF7C00G8H9D509YEV22P7R", {credential_type: "token", payment_source_token: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-confirm.mjs)

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant and returns it flat in data with payment_collection guidance for online payments. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

`POST /v1/payment-intents`

Signature: `create(params: PaymentIntentsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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
| `payment_options` | Required | Array of string | Payment options the buyer can use. Name at least one. card_present must be the only option; confirm it with a reader credential. payment_return_url is not accepted with card_present. minItems: `1`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. Required when payment_options includes affirm and no checkout session collects the payment. Not accepted with card_present. minLength: `1`. pattern: `\S`. |
| `platform_fee` | Optional | [PlatformFeeRequestInput](../models/PlatformFeeRequest.md#platformfeerequest) | A platform fee your partner app charges on this payment, checked against amount_money. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See Platform fees. A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it. |
| `receipt_email` | Optional | string | Email address for this payment's receipt. When omitted, Flint uses the customer's email. Format: `email`. minLength: `1`. maxLength: `255`. |
| `request_overcapture` | Optional | boolean | Let one capture collect more than the authorization where the card network allows it, for example a final bill plus a tip. Needs capture_method manual and payment_options limited to card, apple_pay, google_pay or card_present; otherwise INVALID_REQUEST with NOT_ALLOWED on request_overcapture. Card networks allow overcapture only where the final amount isn't known at authorization, such as tips and services, and you're responsible for following their rules. overcapture reports what the processor allows once the payment is authorized. Default: `false`. |
| `splits` | Optional | Array of [PaymentSplitRequestInput](../models/PaymentSplitRequest.md#paymentsplitrequest) | Divide this payment's funds between the collecting merchant and sellers; this is separate from split tender, where a buyer uses several payment methods. Only the collecting merchant's own credentials can send splits. Each install must belong to the same app owned by the collecting merchant, with the seller's approval in this mode and readiness to receive payouts. Test mode needs no platform review; live mode requires the app's active payment_splits capability and Flint support for the collecting account. Can't be combined with platform_fee or saved payment credentials. The total must fit after the largest Flint fee for the offered payment options, leaving one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after create, except capture's final amounts. Part of the idempotency fingerprint. minItems: `1`. maxItems: `25`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `transaction_purpose` | Optional | string | Why the bank debit is taken. Required when payment_options includes ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose otherwise. Values: `"goods"`, `"services"`, `"other"`. |

#### Response

Returned payload: ({  }) & (Exclude&lt;[PaymentIntentWithCollection](../models/PaymentIntentWithCollection.md#paymentintentwithcollection) & object, readonly unknown[]&gt;).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_on_fees` | Optional | Array of [PaymentAddOnFee](../models/PaymentAddOnFee.md#paymentaddonfee) | Itemized invoice, subscription, and automatic tax fees collected with this payment. Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. |
| `authorized_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [9 declared values](#paymentintentscreate-response-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `captured_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | Customer linked to this payment intent. |
| `customer_presence` | Required | string | Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Values: `"present"`, `"absent"`. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#paymentintentscreate-response-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHold.md#paymentfulfillmenthold) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `latest_order_payment_attempt_id` | Optional | string or null | The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. |
| `merchant_net_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured amount minus processing_fee_money, every amount in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and fully_reversed splits commit their whole amount; payment_not_completed and install_revoked cancellations commit nothing. A failed split commits only money already taken back before failure; its remainder returns to the collecting merchant. Refunds do not reduce the commitment. Later merchant assessments and credits are separate balance effects. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. |
| `overcapture` | Optional | [PaymentIntentOvercapture](../models/PaymentIntentOvercapture.md#paymentintentovercapture) | Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. Whether one capture can collect more than the authorization. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `platform_fee` | Optional | [PaymentIntentPlatformFee](../models/PaymentIntentPlatformFee.md#paymentintentplatformfee) | The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it. |
| `processing_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flint's all-in processing fee for this payment. It is the complete price Flint charges to process the payment, never a provider cost passed through. The fee is final once the card payment is captured or the ACH payment succeeds; canceled payments and failures before success have none, except a payment intent canceled with cancellation_reason payment_returned, which shows the fee charged at capture on the charge Flint is returning. Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax fees are itemized separately in add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reader_id` | Optional | string | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Format: `email`. maxLength: `255`. |
| `refund_expires_at` | Required | string or null | Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Format: `date-time`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `request_overcapture` | Optional | boolean | Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. |
| `return_resolution_id` | Optional | string | The return resolution whose balance this payment collects. Set for exchange balances and corrections. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRisk.md#paymentrisk) or null | Risk assessment. Always present with merchant credentials; null when no risk assessment is available. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `splits` | Optional | Array of [PaymentSplit](../models/PaymentSplit.md#paymentsplit) | Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. |
| `statement_descriptor` | Required | string or null | The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `subscription_id` | Optional | string | The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Setup details your client uses to collect the buyer's payment details. Returned on both standalone and order-owned creates except card_present payments, which have no payment_collection. On GET, returned only for a standalone intent in requires_payment_method or requires_confirmation, and omitted for an intent owned by a checkout session when read with merchant credentials. Order-owned intents never include it on GET; use Order.payment_collection, whose selectable_payment_intents lists the staged payments. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |

#### paymentIntents.create response cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`
- `"payment_returned"`

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

const result = await client.paymentIntents.create({amount_money: {amount: "5000", currency: "USD"}, payment_options: ["card"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-create.mjs)

### paymentIntents.get

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. For a standalone payment intent in requires_action, call confirm with credential_type attached to retrieve current_payment_action.

`GET /v1/payment-intents/{payment_intent_id}`

Signature:

```typescript
get(payment_intent_id: InputValue<string>,
 params?: PaymentIntentsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"checkout" |
  "merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, invoice, order. Expansion requires payments.payment_intents.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"invoice"`, `"order"`. Values: `"customer"`, `"invoice"`, `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PaymentIntentWithCollection](../models/PaymentIntentWithCollection.md#paymentintentwithcollection).

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
const result = await client.paymentIntents.get("pi_01KEZF7C00G8H9D509YEV22P7R", {}, {  });
```

[Complete runnable example](../examples/paymentIntents-get.mjs)

### paymentIntents.list

Returns a paginated list of payment intents for the authenticated merchant. Default order: created_at descending, then payment_intent_id descending.

`GET /v1/payment-intents`

Signature: `list(params?: PaymentIntentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Filter by order ID. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `customer_id` | Optional | string | Filter by customer ID. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `invoice_id` | Optional | string | Filter by invoice ID. pattern: `^inv_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `is_action_required` | Optional | boolean | Filter by whether the merchant must capture the payment or respond to a dispute. A dispute requires action when its status is needs_response or inquiry_needs_response, evidence responses are allowed, and its deadline is absent or has not passed. Omit to include both groups. |
| `status` | Optional | Array of string or string | Filter by payment intent status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `risk_level` | Optional | Array of string or string | Filter by the latest completed risk assessment. Repeat or comma-separate values. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `payment_flow` | Optional | Array of string or string | Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `return_id` | Optional | string | Filter by linked Return ID. pattern: `^ret_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_resolution_id` | Optional | string | Filter by linked ReturnResolution ID. pattern: `^retres_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `query` | Optional | string | Search across payment_intent_id, external_reference_id, and receipt_email. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `min_amount` | Optional | integer | Inclusive lower bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on amount_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `refund_status` | Optional | Array of string or string | Exact match on refund_status. Repeat keys or comma-separate values to match any selected status. Combined with dispute_status, both filters must match. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `dispute_status` | Optional | Array of string or string | Exact match on dispute_status. Repeat keys or comma-separate values to match any selected status. Combined with refund_status, both filters must match. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#paymentintentslist-input-dispute_status--values). Values: [10 declared values](#paymentintentslist-input-dispute_status-values). |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"amount_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, invoice, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"invoice"`, `"order"`. Values: `"customer"`, `"invoice"`, `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

#### paymentIntents.list input dispute_status values

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
const result = await client.paymentIntents.list({}, {  });
```

[Complete runnable example](../examples/paymentIntents-list.mjs)

### paymentIntents.listActivities

Returns a read-only, human-readable history for a payment intent. Read the payment intent or referenced resource for authoritative state; this log does not replace webhooks or a ledger. Use sort_direction=asc for a chronological timeline. Page tokens are bound to the payment intent, merchant, environment, activity_type filter, and sort direction. Default order: created_at descending, then payment_intent_activity_id descending.

`GET /v1/payment-intents/{payment_intent_id}/activities`

Signature:

```typescript
listActivities(payment_intent_id: InputValue<string>,
 params?: PaymentIntentsListActivitiesParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string or string | Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#paymentintentslistactivities-input-activity_type--values). Values: [10 declared values](#paymentintentslistactivities-input-activity_type-values). |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

#### paymentIntents.listActivities input activity_type values

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.paymentIntents.listActivities("pi_01KEZF7C00G8H9D509YEV22P7R", {}, {  });
```

[Complete runnable example](../examples/paymentIntents-listActivities.mjs)

### paymentIntents.sendReceipt

Queues a receipt for a succeeded payment intent and returns the payment intent unchanged. For an order-owned payment intent, sends the order receipt. Once sent, the receipt appears as a receipt_sent payment intent activity. Send email to choose a recipient. Omit email to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. If no receipt email is available, email is required. The saved receipt email stays unchanged. Requires Flint-managed receipt delivery. Standalone sending is limited to once every five minutes per payment intent; order receipt sending is limited to once every five minutes per order and normalized recipient. Retry with the same idempotency key to replay the result without sending again.

`POST /v1/payment-intents/{payment_intent_id}/send-receipt`

Signature: `sendReceipt(payment_intent_id: InputValue<string>, params?: PaymentIntentsSendReceiptParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [SendPaymentIntentReceiptRequestInput](../models/SendPaymentIntentReceiptRequestInput.md#sendpaymentintentreceiptrequestinput) | The request body for: Send a payment receipt. |

Body model: [SendPaymentIntentReceiptRequestInput](../models/SendPaymentIntentReceiptRequestInput.md#sendpaymentintentreceiptrequestinput).

#### paymentIntents.sendReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Email address that receives the receipt. Omit to use the order's receipt address for an order-owned intent, or receipt_email then the customer's email for a standalone intent. Format: `email`. minLength: `1`. maxLength: `254`. |

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

const result = await client.paymentIntents.sendReceipt("pi_01KEZF7C00G8H9D509YEV22P7R", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-sendReceipt.mjs)

### paymentIntents.update

Applies a sparse update while status is requires_payment_method, requires_confirmation, requires_action, or requires_capture. In processing, succeeded, canceled, or expired it fails with `ACTION_NOT_ALLOWED` and reason `in_progress` or `terminal_status`, with the status in `error.details[].current_status`. amount_money can change only while status is requires_payment_method and before the first confirmation attempt; after that, create a new payment intent. customer_id can change only while status is requires_payment_method, and receipt_email only while it is requires_payment_method or requires_confirmation. Send null to clear tip_money, external_reference_id, receipt_email, or all metadata; amount_money and customer_id cannot be cleared. Order-owned intents accept only metadata and external_reference_id; amount_money, tip_money, customer_id, and receipt_email return INVALID_REQUEST with one NOT_ALLOWED detail per field. This route doesn't attach a payment source: send the buyer's credential to the confirm route.

`PATCH /v1/payment-intents/{payment_intent_id}`

Signature: `update(payment_intent_id: InputValue<string>, params: PaymentIntentsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePaymentIntentRequestInput](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequest) | The request body for: Update payment intent. minProperties: `1`. |

Body model: [UpdatePaymentIntentRequestInput](../models/UpdatePaymentIntentRequest.md#updatepaymentintentrequest).

#### paymentIntents.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Payment amount. Can change only while status is requires_payment_method and before the first confirmation attempt. Cannot be cleared. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Can change only while status is requires_payment_method. Cannot be cleared. minLength: `1`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. Omit it to keep the current value. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `receipt_email` | Optional | string or null | Send null to clear it. Omit it to keep the current value. Format: `email`. minLength: `1`. maxLength: `255`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Not accepted on order-linked payment intents. Send null to clear the tip; omit it to keep the current value. |

#### Response

Returned payload: [PaymentIntent](../models/PaymentIntent.md#paymentintent).

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

const result = await client.paymentIntents.update("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", {receipt_email: "buyer@example.com"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/paymentIntents-update.mjs)

