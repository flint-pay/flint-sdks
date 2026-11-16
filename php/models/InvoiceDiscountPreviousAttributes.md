[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscountPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. `discount_class`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesdiscount_class). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. `promotion_code`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion that supplied this discount. Absent for a manual discount. `promotion_id`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributespromotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource). |

### InvoiceDiscountPreviousAttributes.customer_facing_name

### InvoiceDiscountPreviousAttributes.customer_facing_name variant 1

anyOf variant 1: Name the buyer sees for the discount..

- Value shape: string. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributes.customer_facing_name variant 2

anyOf variant 2.

- Value shape: null. Name the buyer sees for the discount. 

### InvoiceDiscountPreviousAttributes.discount_class

### InvoiceDiscountPreviousAttributes.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`.

### InvoiceDiscountPreviousAttributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### InvoiceDiscountPreviousAttributes.promotion_code

### InvoiceDiscountPreviousAttributes.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributes.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. 

### InvoiceDiscountPreviousAttributes.promotion_id

### InvoiceDiscountPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion that supplied this discount. Absent for a manual discount..

- Value shape: string. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceDiscountPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion that supplied this discount. Absent for a manual discount. 

### InvoiceDiscountPreviousAttributes.source

### InvoiceDiscountPreviousAttributes.source variant 1

anyOf variant 1: Where the discount came from..

- Value shape: string. Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`.

### InvoiceDiscountPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Where the discount came from. 

