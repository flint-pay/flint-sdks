[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderPaymentAttempt

An attempt to pay an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_outstanding_money`: [field definitions](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattemptexpected_outstanding_money). |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. |
| `mode` | Required | string | Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_id` | Required | string | The order this payment attempt collects money for or saves a payment method for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_payment_attempt_id` | Required | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Required | Array of [BuyerPaymentAttemptPaymentIntent](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintent) | The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: [10 declared values](#buyerorderpaymentattempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](#buyerorderpaymentattempt-status_reason-values). |

#### BuyerOrderPaymentAttempt status values

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

#### BuyerOrderPaymentAttempt status_reason values

- `"authorization_canceled"`
- `"canceled_on_reader"`
- `"reader_unavailable"`
- `"coupon_reservation_failed"`
- `"gift_card_hold_acquisition_failed"`
- `"invalid_payment_source"`
- `"inventory_unavailable"`
- `"order_changed_before_payment"`
- `"order_payment_customer_mismatch"`
- `"other"`
- `"payment_authorization_canceled"`
- `"payment_authorization_expired"`
- `"payment_confirmation_rejected"`
- `"payment_link_capacity_claim_failed"`
- `"payment_link_capacity_validation_failed"`
- `"payment_method_activation_pending"`
- `"payment_method_required"`
- `"payment_option_not_allowed"`
- `"payment_option_unavailable"`
- `"payment_returned"`
- `"payment_source_binding_failed"`
- `"payment_source_conflict"`
- `"payment_source_not_updatable"`
- `"payment_source_ownership_mismatch"`
- `"resource_guarantee_failed"`
- `"setup_action_unavailable"`
- `"setup_hold_acquisition_failed"`
- `"setup_result_incomplete"`
- `"tip_allocation_sync_failed"`
- `"zero_balance_hold_acquisition_failed"`

### BuyerOrderPaymentAttempt.expected_outstanding_money

The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

