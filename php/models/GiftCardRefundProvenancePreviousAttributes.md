[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRefundProvenancePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. |
| `original_created_at` | Optional | string or null | When the original funding load was created. RFC3339 timestamp. `original_created_at`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_created_at). |
| `original_source` | Optional | object and object and Alternative shapes (see declared variants) and Alternative shapes (see declared variants) or null | Where the original funding value came from. `original_source`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source). |
| `original_source_created_at` | Optional | string or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. `original_source_created_at`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source_created_at). |
| `refund_allocation_id` | Optional | string or null | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. `refund_allocation_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesrefund_allocation_id). |
| `root_gift_card_id` | Optional | string or null | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesroot_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesroot_gift_card_load_id). |
| `source_gift_card_id` | Optional | string or null | ID of the gift card the refunded value came from. `source_gift_card_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributessource_gift_card_id). |
| `source_gift_card_redemption_id` | Optional | string or null | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. `source_gift_card_redemption_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributessource_gift_card_redemption_id). |
| `source_purchase_refund_allocation_id` | Optional | string or null | ID of the gift card purchase refund allocation whose failure created this load. Present only then. `source_purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributessource_purchase_refund_allocation_id). |
| `source_refund_id` | Optional | string or null | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. `source_refund_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributessource_refund_id). |

### GiftCardRefundProvenancePreviousAttributes.original_created_at

### GiftCardRefundProvenancePreviousAttributes.original_created_at variant 1

anyOf variant 1: When the original funding load was created. RFC3339 timestamp..

- Value shape: string. When the original funding load was created. RFC3339 timestamp. When the original funding load was created. RFC3339 timestamp. Format: `date-time`. 

### GiftCardRefundProvenancePreviousAttributes.original_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding load was created. RFC3339 timestamp. 

### GiftCardRefundProvenancePreviousAttributes.original_source

Where the original funding value came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Conditional | Alternative shapes (see declared variants) and (string or null) | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. `funding_source_type`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-2funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-3funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-4funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-5funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-6funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-7funding_source_type), [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-8funding_source_type). |
| `customer_id` | Conditional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id). |
| `external_reference_id` | Conditional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id). |
| `order_id` | Conditional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id). |
| `order_manual_payment_id` | Conditional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id). |
| `payment_intent_id` | Conditional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id). |
| `refund_id` | Conditional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id). |

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1: `funding_source_type` = `"external_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2: `funding_source_type` = `"flint_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4: `funding_source_type` = `"import"`

anyOf variant 1; anyOf GiftCardFundingSourceImportPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5: `funding_source_type` = `"adjustment"`

anyOf variant 1; anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8: `funding_source_type` = `"store_credit"`

anyOf variant 1; anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 9

anyOf variant 2.

- Undeclared: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the original funding value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id variant 1

anyOf variant 1: ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`..

- Value shape: string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id variant 1

anyOf variant 1: Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters..

- Value shape: string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id variant 1

anyOf variant 1: ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`..

- Value shape: string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id variant 1

anyOf variant 1: ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`..

- Value shape: string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id variant 1

anyOf variant 1: The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order..

- Value shape: string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id variant 1

anyOf variant 1: Refund that issued this value. Present only when funding_source_type is store_credit..

- Value shape: string. Refund that issued this value. Present only when funding_source_type is store_credit. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. Refund that issued this value. Present only when funding_source_type is store_credit. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 2.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 3.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 4.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 5.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 6.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 7.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.customer_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.customer_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1customer_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.external_reference_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.external_reference_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1external_reference_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.order_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.order_manual_payment_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.order_manual_payment_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1order_manual_payment_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.payment_intent_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.payment_intent_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1payment_intent_id).

### GiftCardRefundProvenancePreviousAttributes.original_source variant 8.refund_id

Declared alternatives: [GiftCardRefundProvenancePreviousAttributes.original_source variant 1.refund_id](../models/GiftCardRefundProvenancePreviousAttributes.md#giftcardrefundprovenancepreviousattributesoriginal_source-variant-1refund_id).

### GiftCardRefundProvenancePreviousAttributes.original_source_created_at

### GiftCardRefundProvenancePreviousAttributes.original_source_created_at variant 1

anyOf variant 1: When the original funding value was received, as recorded on that load. `null` when no source time was recorded..

- Value shape: string. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. 

### GiftCardRefundProvenancePreviousAttributes.original_source_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. 

### GiftCardRefundProvenancePreviousAttributes.refund_allocation_id

### GiftCardRefundProvenancePreviousAttributes.refund_allocation_id variant 1

anyOf variant 1: ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributes.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_id

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_id variant 1

anyOf variant 1: ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_load_id

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributes.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_id

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_id variant 1

anyOf variant 1: ID of the gift card the refunded value came from..

- Value shape: string. ID of the gift card the refunded value came from. 

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the refunded value came from. 

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_redemption_id

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributes.source_gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributes.source_purchase_refund_allocation_id

### GiftCardRefundProvenancePreviousAttributes.source_purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose failure created this load. Present only then..

- Value shape: string. ID of the gift card purchase refund allocation whose failure created this load. Present only then. 

### GiftCardRefundProvenancePreviousAttributes.source_purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose failure created this load. Present only then. 

### GiftCardRefundProvenancePreviousAttributes.source_refund_id

### GiftCardRefundProvenancePreviousAttributes.source_refund_id variant 1

anyOf variant 1: ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. 

### GiftCardRefundProvenancePreviousAttributes.source_refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. 

