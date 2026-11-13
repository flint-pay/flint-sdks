[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionRenewalResultResponse

A response containing `BuyerSubscriptionRenewalResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionRenewalResult](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresult) | Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads. `data`: [field definitions](../models/BuyerSubscriptionRenewalResultResponse.md#buyersubscriptionrenewalresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionRenewalResultResponse.data

Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) | A customer's purchase and its payment and fulfillment progress. `order`: [field definitions](../models/BuyerOrderListResponse.md#buyerorderlistresponsedata). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null | `order_payment_attempt`: [declared alternatives](../models/BuyerSubscriptionRenewalResultResponse.md#buyersubscriptionrenewalresultresponsedataorder_payment_attempt). |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponsedata). |

### BuyerSubscriptionRenewalResultResponse.data.order

Field definitions: [BuyerOrderListResponse.data[]](../models/BuyerOrderListResponse.md#buyerorderlistresponsedata).

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Conditional | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Conditional | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Conditional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error). |
| `mode` | Conditional | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Conditional | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Conditional | Array of [BuyerPaymentAttemptPaymentIntent](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents). |
| `payment_method_save` | Conditional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Conditional | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Values: [10 declared values](#buyersubscriptionrenewalresultresponsedataorder_payment_attempt-status-values). |
| `status_reason` | Conditional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt status values

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

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 1

anyOf BuyerOrderPaymentAttempt: An attempt to pay an order..

- Required: `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `mode`, `order_payment_attempt_id`, `payment_intents`, `pending_actions`, `status`.
- Optional: `completed_at`, `last_payment_error`, `payment_method_save`, `started_at`, `status_reason`.

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`.
- Value shape: null.  

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.last_payment_error

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.last_payment_error](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error).

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.payment_intents[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents).

### BuyerSubscriptionRenewalResultResponse.data.order_payment_attempt variant 1.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### BuyerSubscriptionRenewalResultResponse.data.subscription

Field definitions: [BuyerSubscriptionListResponse.data[]](../models/BuyerSubscriptionListResponse.md#buyersubscriptionlistresponsedata).

### BuyerSubscriptionRenewalResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

