[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRefundProvenancePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Optional | ([MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. |
| `original_created_at` | Optional | string or null | When the original funding load was created. RFC3339 timestamp. `original_created_at`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_created_at). |
| `original_source` | Optional | object and [GiftCardFundingSourcePreviousAttributesInput](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput) and ([GiftCardFundingSourceExternalPaymentPreviousAttributesInput](../models/GiftCardFundingSourceExternalPaymentPreviousAttributesInput.md#giftcardfundingsourceexternalpaymentpreviousattributesinput) or [GiftCardFundingSourceFlintPaymentPreviousAttributesInput](../models/GiftCardFundingSourceFlintPaymentPreviousAttributesInput.md#giftcardfundingsourceflintpaymentpreviousattributesinput) or [GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput](../models/GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput.md#giftcardfundingsourceflintmanualpaymentpreviousattributesinput) or [GiftCardFundingSourceImportPreviousAttributesInput](../models/GiftCardFundingSourceImportPreviousAttributesInput.md#giftcardfundingsourceimportpreviousattributesinput) or [GiftCardFundingSourceAdjustmentPreviousAttributesInput](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinput) or [GiftCardFundingSourceGiftCardRefundPreviousAttributesInput](../models/GiftCardFundingSourceGiftCardRefundPreviousAttributesInput.md#giftcardfundingsourcegiftcardrefundpreviousattributesinput) or [GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput](../models/GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput.md#giftcardfundingsourcegiftcardpurchaserefundrecoverypreviousattributesinput) or [GiftCardFundingSourceStoreCreditPreviousAttributesInput](../models/GiftCardFundingSourceStoreCreditPreviousAttributesInput.md#giftcardfundingsourcestorecreditpreviousattributesinput)) or null | Where the original funding value came from. `original_source`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source). |
| `original_source_created_at` | Optional | string or null or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. `original_source_created_at`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source_created_at). |
| `refund_allocation_id` | Optional | string or null | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. `refund_allocation_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputrefund_allocation_id). |
| `root_gift_card_id` | Optional | string or null | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputroot_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputroot_gift_card_load_id). |
| `source_gift_card_id` | Optional | string or null | ID of the gift card the refunded value came from. `source_gift_card_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputsource_gift_card_id). |
| `source_gift_card_redemption_id` | Optional | string or null | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. `source_gift_card_redemption_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputsource_gift_card_redemption_id). |
| `source_purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose failure created this load. Present only then. `source_purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputsource_purchase_refund_allocation_id). |
| `source_refund_id` | Optional | string or null | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. `source_refund_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputsource_refund_id). |

### GiftCardRefundProvenancePreviousAttributesInput.original_created_at

### GiftCardRefundProvenancePreviousAttributesInput.original_created_at variant 1

anyOf variant 1: When the original funding load was created. RFC3339 timestamp..

- Value shape: string. When the original funding load was created. RFC3339 timestamp. When the original funding load was created. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardRefundProvenancePreviousAttributesInput.original_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding load was created. RFC3339 timestamp. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source

Where the original funding value came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Conditional | Alternative shapes (see declared variants) and (string or null) | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. `funding_source_type`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-1funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-2funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-3funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-4funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-5funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-6funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-7funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinputoriginal_source-variant-8funding_source_type). |
| `customer_id` | Conditional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id). |
| `external_reference_id` | Conditional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id). |
| `order_id` | Conditional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id). |
| `order_manual_payment_id` | Conditional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id). |
| `payment_intent_id` | Conditional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id). |
| `refund_id` | Conditional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id). |

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1: `funding_source_type` = `"external_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2: `funding_source_type` = `"flint_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4: `funding_source_type` = `"import"`

anyOf variant 1; anyOf GiftCardFundingSourceImportPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5: `funding_source_type` = `"adjustment"`

anyOf variant 1; anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8: `funding_source_type` = `"store_credit"`

anyOf variant 1; anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 9

anyOf variant 2.

- Undeclared: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the original funding value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 1.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 2.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 3.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 4.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 5.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 6.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 7.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.customer_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.external_reference_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.order_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.order_manual_payment_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.payment_intent_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source variant 8.refund_id

Declared alternatives: [GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id).

### GiftCardRefundProvenancePreviousAttributesInput.original_source_created_at

### GiftCardRefundProvenancePreviousAttributesInput.original_source_created_at variant 1

anyOf variant 1: When the original funding value was received, as recorded on that load. `null` when no source time was recorded..

- Value shape: (string or null). When the original funding value was received, as recorded on that load. `null` when no source time was recorded. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardRefundProvenancePreviousAttributesInput.original_source_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. 

### GiftCardRefundProvenancePreviousAttributesInput.refund_allocation_id

### GiftCardRefundProvenancePreviousAttributesInput.refund_allocation_id variant 1

anyOf variant 1: ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. 

### GiftCardRefundProvenancePreviousAttributesInput.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_id

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_id variant 1

anyOf variant 1: ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_load_id

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the original funding load. It stays the same through any number of replacement refunds. ID of the original funding load. It stays the same through any number of replacement refunds. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardRefundProvenancePreviousAttributesInput.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_id

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_id variant 1

anyOf variant 1: ID of the gift card the refunded value came from..

- Value shape: string. ID of the gift card the refunded value came from. ID of the gift card the refunded value came from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the refunded value came from. 

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_redemption_id

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### GiftCardRefundProvenancePreviousAttributesInput.source_gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributesInput.source_purchase_refund_allocation_id

### GiftCardRefundProvenancePreviousAttributesInput.source_purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose failure created this load. Present only then..

- Value shape: string. ID of the gift card purchase refund allocation whose failure created this load. Present only then. ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardRefundProvenancePreviousAttributesInput.source_purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose failure created this load. Present only then. 

### GiftCardRefundProvenancePreviousAttributesInput.source_refund_id

### GiftCardRefundProvenancePreviousAttributesInput.source_refund_id variant 1

anyOf variant 1: ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardRefundProvenancePreviousAttributesInput.source_refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. 

