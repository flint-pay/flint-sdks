[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceAdjustmentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputcustomer_id). |
| `external_reference_id` | Optional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputexternal_reference_id). |
| `funding_source_type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: `"adjustment"`. `funding_source_type`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputfunding_source_type). |
| `order_id` | Optional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_id). |
| `order_manual_payment_id` | Optional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputorder_manual_payment_id). |
| `payment_intent_id` | Optional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputpayment_intent_id). |
| `refund_id` | Optional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardFundingSourceAdjustmentPreviousAttributesInput.md#giftcardfundingsourceadjustmentpreviousattributesinputrefund_id). |

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id variant 1

anyOf variant 1: ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`..

- Value shape: string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id variant 1

anyOf variant 1: Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters..

- Value shape: string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.funding_source_type

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.funding_source_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`..

- Value shape: string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id variant 1

anyOf variant 1: ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`..

- Value shape: string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.order_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order..

- Value shape: string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id variant 1

anyOf variant 1: Refund that issued this value. Present only when funding_source_type is store_credit..

- Value shape: string. Refund that issued this value. Present only when funding_source_type is store_credit. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardFundingSourceAdjustmentPreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. Refund that issued this value. Present only when funding_source_type is store_credit. 

