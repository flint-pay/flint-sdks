[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotOrderPaymentAttemptPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expected_outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. `expected_outstanding_money`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesexpected_outstanding_money). |
| `gift_card_redemptions` | Optional | Array of [PaymentAttemptGiftCardRedemptionPreviousAttributes](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributes) or null | Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. `gift_card_redemptions`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesgift_card_redemptions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `is_resumable` | Optional | boolean or null | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. `is_resumable`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesis_resumable). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. |
| `mode` | Optional | string or null | Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`. `mode`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesmode). |
| `order_id` | Optional | string or null | The order this payment attempt collects money for or saves a payment method for. `order_id`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesorder_id). |
| `order_payment_attempt_id` | Optional | string or null | Unique identifier for this order payment attempt, prefixed `opat_`. `order_payment_attempt_id`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesorder_payment_attempt_id). |
| `payment_intents` | Optional | Array of [PaymentAttemptPaymentIntentPreviousAttributes](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributes) or null | The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. `payment_intents`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributespayment_intents). |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSavePreviousAttributes](../models/OrderPaymentAttemptPaymentMethodSavePreviousAttributes.md#orderpaymentattemptpaymentmethodsavepreviousattributes) or null | Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. |
| `pending_actions` | Optional | Array of [PendingPaymentActionPreviousAttributes](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributes) or null | Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. `pending_actions`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributespending_actions). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`. `status`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesstatus). |
| `status_reason` | Optional | string or null | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [31 declared values](BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt-status_reason-values). `status_reason`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributessupported_actions). |

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.expected_outstanding_money

The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.expected_outstanding_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.expected_outstanding_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.expected_outstanding_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.expected_outstanding_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.gift_card_redemptions

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1

anyOf variant 1: Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used..

- Value shape: Array of [PaymentAttemptGiftCardRedemptionPreviousAttributes](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributes). Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 2

anyOf variant 2.

- Value shape: null. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesidempotency_key).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.is_resumable

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.is_resumable variant 1

anyOf variant 1: Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress..

- Value shape: boolean. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.is_resumable variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.mode

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.mode variant 1

anyOf variant 1: Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment..

- Value shape: string. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`.

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.mode variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_id

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_id variant 1

anyOf variant 1: The order this payment attempt collects money for or saves a payment method for..

- Value shape: string. The order this payment attempt collects money for or saves a payment method for. The order this payment attempt collects money for or saves a payment method for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this payment attempt collects money for or saves a payment method for. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_payment_attempt_id

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_payment_attempt_id variant 1

anyOf variant 1: Unique identifier for this order payment attempt, prefixed `opat_`..

- Value shape: string. Unique identifier for this order payment attempt, prefixed `opat_`. Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order payment attempt, prefixed `opat_`. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.payment_intents

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.payment_intents variant 1

anyOf variant 1: The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone..

- Value shape: Array of [PaymentAttemptPaymentIntentPreviousAttributes](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributes). The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.pending_actions

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.pending_actions variant 1

anyOf variant 1: Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt..

- Value shape: Array of [PendingPaymentActionPreviousAttributes](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributes). Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.pending_actions variant 2

anyOf variant 2.

- Value shape: null. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status variant 1

anyOf variant 1: Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final..

- Value shape: string. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`.

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status_reason

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status_reason variant 1

anyOf variant 1: Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added..

- Value shape: string. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: `"authorization_canceled"`, `"canceled_on_reader"`, `"reader_unavailable"`, `"coupon_reservation_failed"`, `"gift_card_hold_acquisition_failed"`, `"invalid_payment_source"`, `"inventory_unavailable"`, `"order_changed_before_payment"`, `"order_payment_customer_mismatch"`, `"other"`, `"payment_authorization_canceled"`, `"payment_authorization_expired"`, `"payment_confirmation_rejected"`, `"payment_link_capacity_claim_failed"`, `"payment_link_capacity_validation_failed"`, `"payment_method_activation_pending"`, `"payment_method_required"`, `"payment_option_not_allowed"`, `"payment_option_unavailable"`, `"payment_returned"`, `"payment_source_binding_failed"`, `"payment_source_conflict"`, `"payment_source_not_updatable"`, `"payment_source_ownership_mismatch"`, `"rate_limit_exceeded"`, `"resource_guarantee_failed"`, `"setup_action_unavailable"`, `"setup_hold_acquisition_failed"`, `"setup_result_incomplete"`, `"tip_allocation_sync_failed"`, `"zero_balance_hold_acquisition_failed"`.

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. 

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.supported_actions

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`.

### WebhookSnapshotOrderPaymentAttemptPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. 

