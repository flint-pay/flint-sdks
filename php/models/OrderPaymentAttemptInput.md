[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentAttemptInput

An attempt to pay an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expected_outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemptionInput](../models/PaymentAttemptGiftCardRedemptionInput.md#paymentattemptgiftcardredemptioninput) |  |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `mode` | Required | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Required | string |  |
| `payment_intents` | Required | Array of [PaymentAttemptPaymentIntentInput](../models/PaymentAttemptPaymentIntentInput.md#paymentattemptpaymentintentinput) |  |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSaveInput](../models/OrderPaymentAttemptPaymentMethodSaveInput.md#orderpaymentattemptpaymentmethodsaveinput) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentActionInput](../models/PendingPaymentActionInput.md#pendingpaymentactioninput) |  |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: [10 declared values](#orderpaymentattemptinput-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### OrderPaymentAttemptInput status values

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

