[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderPaymentAttempt

An attempt to pay an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expected_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_outstanding_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) |  |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. |
| `mode` | Required | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Required | string |  |
| `payment_intents` | Required | Array of [BuyerPaymentAttemptPaymentIntent](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintent) |  |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) |  |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: [10 declared values](#buyerorderpaymentattempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](#buyerorderpaymentattempt-status_reason-values). |

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

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

