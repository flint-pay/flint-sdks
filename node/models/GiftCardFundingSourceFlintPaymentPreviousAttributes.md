[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceFlintPaymentPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesexternal_reference_id). |
| `funding_source_type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: `"flint_payment"`. `funding_source_type`: [declared alternatives](../models/GiftCardFundingSourceFlintPaymentPreviousAttributes.md#giftcardfundingsourceflintpaymentpreviousattributesfunding_source_type). |
| `order_id` | Optional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_id). |
| `order_manual_payment_id` | Optional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_manual_payment_id). |
| `payment_intent_id` | Optional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributespayment_intent_id). |
| `refund_id` | Optional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesrefund_id). |

### GiftCardFundingSourceFlintPaymentPreviousAttributes.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributescustomer_id).

### GiftCardFundingSourceFlintPaymentPreviousAttributes.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesexternal_reference_id).

### GiftCardFundingSourceFlintPaymentPreviousAttributes.funding_source_type

### GiftCardFundingSourceFlintPaymentPreviousAttributes.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourceFlintPaymentPreviousAttributes.funding_source_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourceFlintPaymentPreviousAttributes.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourceFlintPaymentPreviousAttributes.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_id).

### GiftCardFundingSourceFlintPaymentPreviousAttributes.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_manual_payment_id).

### GiftCardFundingSourceFlintPaymentPreviousAttributes.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributespayment_intent_id).

### GiftCardFundingSourceFlintPaymentPreviousAttributes.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesrefund_id).

