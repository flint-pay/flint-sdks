[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id). |
| `external_reference_id` | Optional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id). |
| `funding_source_type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: [8 declared values](#giftcardfundingsourcepreviousattributesinput-funding_source_type-values). `funding_source_type`: [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-1funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-2funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-3funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-4funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-5funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-6funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-7funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput-variant-8funding_source_type). |
| `order_id` | Optional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id). |
| `order_manual_payment_id` | Optional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id). |
| `payment_intent_id` | Optional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id). |
| `refund_id` | Optional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id). |

#### GiftCardFundingSourcePreviousAttributesInput funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardFundingSourcePreviousAttributesInput variant 1: `funding_source_type` = `"external_payment"`

anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 2: `funding_source_type` = `"flint_payment"`

anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 4: `funding_source_type` = `"import"`

anyOf GiftCardFundingSourceImportPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardFundingSourcePreviousAttributesInput variant 5: `funding_source_type` = `"adjustment"`

anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributesInput variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributesInput variant 8: `funding_source_type` = `"store_credit"`

anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardFundingSourcePreviousAttributesInput.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardFundingSourcePreviousAttributesInput variant 1.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 1.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 1.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributesInput.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardFundingSourcePreviousAttributesInput.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardFundingSourcePreviousAttributesInput.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardFundingSourcePreviousAttributesInput.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardFundingSourcePreviousAttributesInput variant 2.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 2.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 2.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 3.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 3.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 3.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 4.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 4.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 4.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardFundingSourcePreviousAttributesInput variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardFundingSourcePreviousAttributesInput variant 5.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 5.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 5.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributesInput variant 6.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 6.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 6.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributesInput variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributesInput variant 7.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 7.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 7.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributesInput variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributesInput variant 8.funding_source_type

### GiftCardFundingSourcePreviousAttributesInput variant 8.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 8.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributesInput variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardFundingSourcePreviousAttributesInput variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

