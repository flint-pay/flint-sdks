[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesexternal_reference_id). |
| `funding_source_type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: [8 declared values](#giftcardfundingsourcepreviousattributes-funding_source_type-values). `funding_source_type`: [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-1funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-2funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-3funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-4funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-5funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-6funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-7funding_source_type), [declared alternatives](../models/GiftCardFundingSourcePreviousAttributes.md#giftcardfundingsourcepreviousattributes-variant-8funding_source_type). |
| `order_id` | Optional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_id). |
| `order_manual_payment_id` | Optional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_manual_payment_id). |
| `payment_intent_id` | Optional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributespayment_intent_id). |
| `refund_id` | Optional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesrefund_id). |

#### GiftCardFundingSourcePreviousAttributes funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardFundingSourcePreviousAttributes variant 1: `funding_source_type` = `"external_payment"`

anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 2: `funding_source_type` = `"flint_payment"`

anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 4: `funding_source_type` = `"import"`

anyOf GiftCardFundingSourceImportPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardFundingSourcePreviousAttributes variant 5: `funding_source_type` = `"adjustment"`

anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributes variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributes variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributes variant 8: `funding_source_type` = `"store_credit"`

anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributescustomer_id).

### GiftCardFundingSourcePreviousAttributes.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesexternal_reference_id).

### GiftCardFundingSourcePreviousAttributes variant 1.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 1.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 1.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardFundingSourcePreviousAttributes.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_id).

### GiftCardFundingSourcePreviousAttributes.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesorder_manual_payment_id).

### GiftCardFundingSourcePreviousAttributes.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributespayment_intent_id).

### GiftCardFundingSourcePreviousAttributes.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributes.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributes.md#giftcardfundingsourceadjustmentpreviousattributesrefund_id).

### GiftCardFundingSourcePreviousAttributes variant 2.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 2.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 2.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 3.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 3.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 3.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardFundingSourcePreviousAttributes variant 4.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 4.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 4.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardFundingSourcePreviousAttributes variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardFundingSourcePreviousAttributes variant 5.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 5.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 5.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributes variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourcePreviousAttributes variant 6.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 6.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 6.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributes variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardFundingSourcePreviousAttributes variant 7.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 7.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 7.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributes variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourcePreviousAttributes variant 8.funding_source_type

### GiftCardFundingSourcePreviousAttributes variant 8.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 8.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourcePreviousAttributes variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardFundingSourcePreviousAttributes variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

