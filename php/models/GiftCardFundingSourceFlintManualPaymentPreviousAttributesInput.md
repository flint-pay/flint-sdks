[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id). |
| `external_reference_id` | Optional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id). |
| `funding_source_type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: `"flint_manual_payment"`. `funding_source_type`: [declared alternatives](../models/GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.md#giftcardfundingsourceflintmanualpaymentpreviousattributesinputfunding_source_type). |
| `order_id` | Optional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id). |
| `order_manual_payment_id` | Optional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id). |
| `payment_intent_id` | Optional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id). |
| `refund_id` | Optional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id). |

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.funding_source_type

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.funding_source_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

