[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResultResponse

A response containing `SubscriptionRenewalResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionRenewalResult](../models/SubscriptionRenewalResult.md#subscriptionrenewalresult) | Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome. `data`: [field definitions](../models/SubscriptionRenewalResultResponse.md#subscriptionrenewalresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionRenewalResultResponse.data

Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/OrderListResponse.md#orderlistresponsedata). |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | `order_payment_attempt`: [declared alternatives](../models/SubscriptionRenewalResultResponse.md#subscriptionrenewalresultresponsedataorder_payment_attempt). |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionListResponse.md#subscriptionlistresponsedata). |

### SubscriptionRenewalResultResponse.data.order

Field definitions: [OrderListResponse.data[]](../models/OrderListResponse.md#orderlistresponsedata).

### SubscriptionRenewalResultResponse.data.order_payment_attempt

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Conditional | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Conditional | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Conditional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error). |
| `mode` | Conditional | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Conditional | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Conditional | Array of [PaymentAttemptPaymentIntent](../models/PaymentAttemptPaymentIntent.md#paymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents). |
| `payment_method_save` | Conditional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Conditional | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Values: [10 declared values](#subscriptionrenewalresultresponsedataorder_payment_attempt-status-values). |
| `status_reason` | Conditional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### SubscriptionRenewalResultResponse.data.order_payment_attempt status values

- `"processing"`
- `"requires_action"`
- `"requires_capture"`
- `"partially_succeeded"`
- `"requires_retry"`
- `"finalizing"`
- `"succeeded"`
- `"failed"`
- `"expired"`
- `"canceled"`

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 1

anyOf OrderPaymentAttempt: An attempt to pay an order..

- Required: `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `mode`, `order_payment_attempt_id`, `payment_intents`, `pending_actions`, `status`.
- Optional: `completed_at`, `last_payment_error`, `payment_method_save`, `started_at`, `status_reason`.

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`.
- Value shape: null.  

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.last_payment_error

Field definitions: [OrderResponse.data.active_payment_attempt.last_payment_error](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error).

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.payment_intents[]

Field definitions: [OrderResponse.data.active_payment_attempt.payment_intents[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents).

### SubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### SubscriptionRenewalResultResponse.data.subscription

Field definitions: [SubscriptionListResponse.data[]](../models/SubscriptionListResponse.md#subscriptionlistresponsedata).

### SubscriptionRenewalResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

