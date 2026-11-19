[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentAttemptPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expected_outstanding_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The outstanding balance this attempt was started to collect, fixed when it started. For an order that gift cards partly cover, it includes the gift card part. Later changes to the order's balance don't change it, and a resume request that sends `expected_outstanding_money` is compared with this amount. |
| `gift_card_redemptions` | Optional | Array of [PaymentAttemptGiftCardRedemptionPreviousAttributes](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributes) or null | Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. `gift_card_redemptions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesgift_card_redemptions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesidempotency_key). |
| `is_resumable` | Optional | boolean or null | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. `is_resumable`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesis_resumable). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. `last_payment_error`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributeslast_payment_error). |
| `mode` | Optional | string or null | Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`. `mode`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesmode). |
| `order_id` | Optional | string or null | The order this payment attempt collects money for or saves a payment method for. `order_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesorder_id). |
| `order_payment_attempt_id` | Optional | string or null | Unique identifier for this order payment attempt, prefixed `opat_`. `order_payment_attempt_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesorder_payment_attempt_id). |
| `payment_intents` | Optional | Array of [PaymentAttemptPaymentIntentPreviousAttributes](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributes) or null | The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. `payment_intents`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents). |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSavePreviousAttributes](../models/OrderPaymentAttemptPaymentMethodSavePreviousAttributes.md#orderpaymentattemptpaymentmethodsavepreviousattributes) or null | Reports only a checkout buyer's skipped save when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A merchant save has no entry here; read payment_source.card.payment_method_id on the payment intent. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. |
| `pending_actions` | Optional | Array of [PendingPaymentActionPreviousAttributes](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributes) or null | Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. `pending_actions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespending_actions). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`. `status`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus). |
| `status_reason` | Optional | string or null | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [31 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). `status_reason`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributessupported_actions). |

### OrderPaymentAttemptPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1

anyOf variant 1: Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used..

- Value shape: Array of [PaymentAttemptGiftCardRedemptionPreviousAttributes](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributes). Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 2

anyOf variant 2.

- Value shape: null. Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved while the attempt is open and is taken from the card when the attempt succeeds. A failed or canceled attempt releases it. Empty when no gift card is used. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. |
| `gift_card_id` | Optional | string or null | ID of the gift card redeemed. `gift_card_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesgift_card_redemptions-variant-1-fields-1gift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that holds this amount on the gift card. `gift_card_redemption_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesgift_card_redemptions-variant-1-fields-1gift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. |

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_id

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card redeemed..

- Value shape: string. ID of the gift card redeemed. ID of the gift card redeemed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card redeemed. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that holds this amount on the gift card..

- Value shape: string. ID of the redemption that holds this amount on the gift card. ID of the redemption that holds this amount on the gift card. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that holds this amount on the gift card. 

### OrderPaymentAttemptPreviousAttributes.gift_card_redemptions variant 1.[] fields 1.last4

Declared alternatives: [PaymentAttemptGiftCardRedemptionPreviousAttributes.last4](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4).

### OrderPaymentAttemptPreviousAttributes.idempotency_key

### OrderPaymentAttemptPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field..

- Value shape: string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. 

### OrderPaymentAttemptPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. 

### OrderPaymentAttemptPreviousAttributes.is_resumable

### OrderPaymentAttemptPreviousAttributes.is_resumable variant 1

anyOf variant 1: Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress..

- Value shape: boolean. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### OrderPaymentAttemptPreviousAttributes.is_resumable variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. 

### OrderPaymentAttemptPreviousAttributes.last_payment_error

The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures.

Field definitions: [shared fields](PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### OrderPaymentAttemptPreviousAttributes.last_payment_error variant 1

anyOf PaymentErrorSummaryPreviousAttributes.

- Optional: `code`, `failed_at`, `message`, `remediation`.

### OrderPaymentAttemptPreviousAttributes.last_payment_error variant 2

anyOf variant 2.

- Undeclared: `code`, `failed_at`, `message`, `remediation`.
- Value shape: null. The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. 

### OrderPaymentAttemptPreviousAttributes.last_payment_error variant 1.code

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.code](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributescode).

### OrderPaymentAttemptPreviousAttributes.last_payment_error variant 1.failed_at

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error variant 1.failed_at](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error-variant-1failed_at).

### OrderPaymentAttemptPreviousAttributes.last_payment_error variant 1.message

Declared alternatives: [PaymentErrorSummaryPreviousAttributes.message](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributesmessage).

### OrderPaymentAttemptPreviousAttributes.mode

### OrderPaymentAttemptPreviousAttributes.mode variant 1

anyOf variant 1: Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment..

- Value shape: string. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. Values: `"payment"`, `"setup"`, `"settlement"`.

### OrderPaymentAttemptPreviousAttributes.mode variant 2

anyOf variant 2.

- Value shape: null. Whether the attempt collects the order's balance, saves a payment method without charging it, or settles the order without a processor payment. 

### OrderPaymentAttemptPreviousAttributes.order_id

### OrderPaymentAttemptPreviousAttributes.order_id variant 1

anyOf variant 1: The order this payment attempt collects money for or saves a payment method for..

- Value shape: string. The order this payment attempt collects money for or saves a payment method for. 

### OrderPaymentAttemptPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this payment attempt collects money for or saves a payment method for. 

### OrderPaymentAttemptPreviousAttributes.order_payment_attempt_id

### OrderPaymentAttemptPreviousAttributes.order_payment_attempt_id variant 1

anyOf variant 1: Unique identifier for this order payment attempt, prefixed `opat_`..

- Value shape: string. Unique identifier for this order payment attempt, prefixed `opat_`. 

### OrderPaymentAttemptPreviousAttributes.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order payment attempt, prefixed `opat_`. 

### OrderPaymentAttemptPreviousAttributes.payment_intents

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1

anyOf variant 1: The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone..

- Value shape: Array of [PaymentAttemptPaymentIntentPreviousAttributes](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributes). The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. The payment intents this attempt collects through, each with its amount, status, tip, and latest error. Empty for an attempt that collects no processor payment, such as a setup, or an order that gift cards or return credit settle alone. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `authorization_expires_at` | Optional | string or null | Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. `authorization_expires_at`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1authorization_expires_at). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. |
| `captured_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money collected through this payment, once nothing more can be collected. Positive when money was collected, including a payment Flint couldn't accept and is refunding (the payment intent's cancellation_reason is payment_returned). Zero when nothing was collected, for example after a decline or a released authorization. Absent while the outcome can still change, such as an ACH debit that hasn't settled or an open hold. |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | The most recent payment error recorded on this payment, when it has a public error code. Absent when none is recorded. `last_payment_error`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1payment_intent_id). |
| `reader_id` | Optional | string or null | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. `reader_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespayment_intents-variant-1-fields-1reader_id). |
| `selected_payment_option` | Optional | string or null | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. `selected_payment_option`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesselected_payment_option). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the payment carries no tip. |

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.authorization_expires_at

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.authorization_expires_at variant 1

anyOf variant 1: Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed..

- Value shape: string. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.last_payment_error

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.last_payment_error](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributeslast_payment_error).

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.reader_id

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.reader_id variant 1

anyOf variant 1: The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it..

- Value shape: string. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.reader_id variant 2

anyOf variant 2.

- Value shape: null. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. 

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.selected_payment_option

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.selected_payment_option](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesselected_payment_option).

### OrderPaymentAttemptPreviousAttributes.payment_intents variant 1.[] fields 1.status

Declared alternatives: [PaymentAttemptPaymentIntentPreviousAttributes.status](../models/PaymentAttemptPaymentIntentPreviousAttributes.md#paymentattemptpaymentintentpreviousattributesstatus).

### OrderPaymentAttemptPreviousAttributes.pending_actions

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1

anyOf variant 1: Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt..

- Value shape: Array of [PendingPaymentActionPreviousAttributes](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributes). Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 2

anyOf variant 2.

- Value shape: null. Steps the buyer must finish in your client before the attempt can continue, such as authentication. Empty when none is pending. Complete them, then resume the attempt. 

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. `action_type`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesaction_type). |
| `client_action` | Optional | Alternative shapes (see declared variants) or null | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. `client_action`: [declared alternatives](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action). |
| `expires_at` | Optional | string or null | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. `expires_at`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespending_actions-variant-1-fields-1expires_at). |
| `pending_action_id` | Optional | string or null | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. `pending_action_id`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributespending_actions-variant-1-fields-1pending_action_id). |
| `subject` | Optional | [PendingPaymentActionSubjectPreviousAttributes](../models/PendingPaymentActionSubjectPreviousAttributes.md#pendingpaymentactionsubjectpreviousattributes) or null | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. |

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.action_type

Declared alternatives: [PendingPaymentActionPreviousAttributes.action_type](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesaction_type).

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.client_action

Declared alternatives: [PendingPaymentActionPreviousAttributes.client_action](../models/PendingPaymentActionPreviousAttributes.md#pendingpaymentactionpreviousattributesclient_action).

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.expires_at

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled..

- Value shape: string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. 

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.pending_action_id

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.pending_action_id variant 1

anyOf variant 1: Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt..

- Value shape: string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: `"pendact_01KEZF7C00SVMRXWKVZX6R9822"`. 

### OrderPaymentAttemptPreviousAttributes.pending_actions variant 1.[] fields 1.pending_action_id variant 2

anyOf variant 2.

- Value shape: null. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. 

### OrderPaymentAttemptPreviousAttributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderPaymentAttemptPreviousAttributes.status

### OrderPaymentAttemptPreviousAttributes.status variant 1

anyOf variant 1: Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final..

- Value shape: string. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Values: `"processing"`, `"requires_action"`, `"requires_capture"`, `"partially_succeeded"`, `"succeeded"`, `"failed"`, `"expired"`, `"canceled"`.

### OrderPaymentAttemptPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the attempt is in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. 

### OrderPaymentAttemptPreviousAttributes.status_reason

### OrderPaymentAttemptPreviousAttributes.status_reason variant 1

anyOf variant 1: Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added..

- Value shape: string. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: `"authorization_canceled"`, `"canceled_on_reader"`, `"reader_unavailable"`, `"coupon_reservation_failed"`, `"gift_card_hold_acquisition_failed"`, `"invalid_payment_source"`, `"inventory_unavailable"`, `"order_changed_before_payment"`, `"order_payment_customer_mismatch"`, `"other"`, `"payment_authorization_canceled"`, `"payment_authorization_expired"`, `"payment_confirmation_rejected"`, `"payment_link_capacity_claim_failed"`, `"payment_link_capacity_validation_failed"`, `"payment_method_activation_pending"`, `"payment_method_required"`, `"payment_option_not_allowed"`, `"payment_option_unavailable"`, `"payment_returned"`, `"payment_source_binding_failed"`, `"payment_source_conflict"`, `"payment_source_not_updatable"`, `"payment_source_ownership_mismatch"`, `"rate_limit_exceeded"`, `"resource_guarantee_failed"`, `"setup_action_unavailable"`, `"setup_hold_acquisition_failed"`, `"setup_result_incomplete"`, `"tip_allocation_sync_failed"`, `"zero_balance_hold_acquisition_failed"`.

### OrderPaymentAttemptPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. 

### OrderPaymentAttemptPreviousAttributes.supported_actions

### OrderPaymentAttemptPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. Items values: `"cancel"`.

### OrderPaymentAttemptPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted now. Cancel is available during collection until a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts list no actions. Always present with merchant credentials. 

