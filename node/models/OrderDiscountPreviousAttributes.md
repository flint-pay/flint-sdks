[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDiscountPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. `amount_money`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesamount_money). |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. `applied_money`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesapplied_money). |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesdiscount_class). |
| `order_charge_ids` | Optional | Array of string or null | IDs of the charges this discount reduces. `order_charge_ids`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesorder_charge_ids). |
| `order_discount_id` | Optional | string or null | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. `order_discount_id`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesorder_discount_id). |
| `order_id` | Optional | string or null | ID of the order the discount applies to. `order_id`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesorder_id). |
| `order_line_item_ids` | Optional | Array of string or null | IDs of the order line items this discount applies to. `order_line_item_ids`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesorder_line_item_ids). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when source is promotion and a code was used. `promotion_code`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | Promotion that created this discount. Present only when source is promotion. `promotion_id`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributespromotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource). |
| `status` | Optional | string or null | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesstatus). |

### OrderDiscountPreviousAttributes.amount_money

Declared alternatives: [InvoiceDiscountPreviousAttributes.amount_money](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesamount_money).

### OrderDiscountPreviousAttributes.applied_money

Declared alternatives: [InvoiceDiscountPreviousAttributes.applied_money](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributesapplied_money).

### OrderDiscountPreviousAttributes.customer_facing_name

Declared alternatives: [InvoiceDiscountPreviousAttributes.customer_facing_name](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name).

### OrderDiscountPreviousAttributes.discount_class

### OrderDiscountPreviousAttributes.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`.

### OrderDiscountPreviousAttributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### OrderDiscountPreviousAttributes.order_charge_ids

### OrderDiscountPreviousAttributes.order_charge_ids variant 1

anyOf variant 1: IDs of the charges this discount reduces..

- Value shape: Array of string. IDs of the charges this discount reduces. Items: Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderDiscountPreviousAttributes.order_charge_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the charges this discount reduces. 

### OrderDiscountPreviousAttributes.order_discount_id

### OrderDiscountPreviousAttributes.order_discount_id variant 1

anyOf variant 1: Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount..

- Value shape: string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. 

### OrderDiscountPreviousAttributes.order_discount_id variant 2

anyOf variant 2.

- Value shape: null. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. 

### OrderDiscountPreviousAttributes.order_id

### OrderDiscountPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the discount applies to..

- Value shape: string. ID of the order the discount applies to. ID of the order the discount applies to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderDiscountPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the discount applies to. 

### OrderDiscountPreviousAttributes.order_line_item_ids

### OrderDiscountPreviousAttributes.order_line_item_ids variant 1

anyOf variant 1: IDs of the order line items this discount applies to..

- Value shape: Array of string. IDs of the order line items this discount applies to. Items: Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderDiscountPreviousAttributes.order_line_item_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the order line items this discount applies to. 

### OrderDiscountPreviousAttributes.promotion_code

### OrderDiscountPreviousAttributes.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when source is promotion and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when source is promotion and a code was used. 

### OrderDiscountPreviousAttributes.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when source is promotion and a code was used. 

### OrderDiscountPreviousAttributes.promotion_id

### OrderDiscountPreviousAttributes.promotion_id variant 1

anyOf variant 1: Promotion that created this discount. Present only when source is promotion..

- Value shape: string. Promotion that created this discount. Present only when source is promotion. Promotion that created this discount. Present only when source is promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### OrderDiscountPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Promotion that created this discount. Present only when source is promotion. 

### OrderDiscountPreviousAttributes.source

Declared alternatives: [InvoiceDiscountPreviousAttributes.source](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource).

### OrderDiscountPreviousAttributes.status

### OrderDiscountPreviousAttributes.status variant 1

anyOf variant 1: Redemption state of the discount..

- Value shape: string. Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`.

### OrderDiscountPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Redemption state of the discount. 

