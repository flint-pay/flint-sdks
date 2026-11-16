[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscountPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputcustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. `discount_class`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputdiscount_class). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. `promotion_code`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputpromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion that supplied this discount. Absent for a manual discount. `promotion_id`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputpromotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputsource). |

### InvoiceDiscountPreviousAttributesInput.customer_facing_name

### InvoiceDiscountPreviousAttributesInput.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the discount..

- Value shape: string. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributesInput.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributesInput.discount_class

### InvoiceDiscountPreviousAttributesInput.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`.

### InvoiceDiscountPreviousAttributesInput.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### InvoiceDiscountPreviousAttributesInput.promotion_code

### InvoiceDiscountPreviousAttributesInput.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributesInput.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributesInput.promotion_id

### InvoiceDiscountPreviousAttributesInput.promotion_id variant 1

anyOf variant 1: ID of the promotion that supplied this discount. Absent for a manual discount..

- Value shape: string. ID of the promotion that supplied this discount. Absent for a manual discount. ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### InvoiceDiscountPreviousAttributesInput.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceDiscountPreviousAttributesInput.source

### InvoiceDiscountPreviousAttributesInput.source variant 1

anyOf variant 1: Where the discount came from..

- Value shape: string. Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`.

### InvoiceDiscountPreviousAttributesInput.source variant 2

anyOf variant 2.

- Value shape: null. Where the discount came from. 

