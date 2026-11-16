[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDiscountPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputcustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputdiscount_class). |
| `order_charge_ids` | Optional | Array of string or null | IDs of the charges this discount reduces. `order_charge_ids`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputorder_charge_ids). |
| `order_discount_id` | Optional | string or null | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. `order_discount_id`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputorder_discount_id). |
| `order_id` | Optional | string or null | ID of the order the discount applies to. `order_id`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputorder_id). |
| `order_line_item_ids` | Optional | Array of string or null | IDs of the order line items this discount applies to. `order_line_item_ids`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputorder_line_item_ids). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when source is promotion and a code was used. `promotion_code`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputpromotion_code). |
| `promotion_id` | Optional | string or null | Promotion that created this discount. Present only when source is promotion. `promotion_id`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputpromotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputsource). |
| `status` | Optional | string or null | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinputstatus). |

### OrderDiscountPreviousAttributesInput.customer_facing_name

Declared alternatives: [InvoiceDiscountPreviousAttributesInput.customer_facing_name](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputcustomer_facing_name).

### OrderDiscountPreviousAttributesInput.discount_class

### OrderDiscountPreviousAttributesInput.discount_class variant 1

anyOf variant 1: Which part of the order the discount reduces..

- Value shape: string. Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`.

### OrderDiscountPreviousAttributesInput.discount_class variant 2

anyOf variant 2.

- Value shape: null. Which part of the order the discount reduces. 

### OrderDiscountPreviousAttributesInput.order_charge_ids

### OrderDiscountPreviousAttributesInput.order_charge_ids variant 1

anyOf variant 1: IDs of the charges this discount reduces..

- Value shape: Array of string. IDs of the charges this discount reduces. Items: Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderDiscountPreviousAttributesInput.order_charge_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the charges this discount reduces. 

### OrderDiscountPreviousAttributesInput.order_discount_id

### OrderDiscountPreviousAttributesInput.order_discount_id variant 1

anyOf variant 1: Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount..

- Value shape: string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. 

### OrderDiscountPreviousAttributesInput.order_discount_id variant 2

anyOf variant 2.

- Value shape: null. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. 

### OrderDiscountPreviousAttributesInput.order_id

### OrderDiscountPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order the discount applies to..

- Value shape: string. ID of the order the discount applies to. ID of the order the discount applies to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderDiscountPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the discount applies to. 

### OrderDiscountPreviousAttributesInput.order_line_item_ids

### OrderDiscountPreviousAttributesInput.order_line_item_ids variant 1

anyOf variant 1: IDs of the order line items this discount applies to..

- Value shape: Array of string. IDs of the order line items this discount applies to. Items: Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderDiscountPreviousAttributesInput.order_line_item_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the order line items this discount applies to. 

### OrderDiscountPreviousAttributesInput.promotion_code

### OrderDiscountPreviousAttributesInput.promotion_code variant 1

anyOf variant 1: Promotion code used to create this discount. Present only when source is promotion and a code was used..

- Value shape: string. Promotion code used to create this discount. Present only when source is promotion and a code was used. 

### OrderDiscountPreviousAttributesInput.promotion_code variant 2

anyOf variant 2.

- Value shape: null. Promotion code used to create this discount. Present only when source is promotion and a code was used. 

### OrderDiscountPreviousAttributesInput.promotion_id

### OrderDiscountPreviousAttributesInput.promotion_id variant 1

anyOf variant 1: Promotion that created this discount. Present only when source is promotion..

- Value shape: string. Promotion that created this discount. Present only when source is promotion. Promotion that created this discount. Present only when source is promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### OrderDiscountPreviousAttributesInput.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Promotion that created this discount. Present only when source is promotion. 

### OrderDiscountPreviousAttributesInput.source

Declared alternatives: [InvoiceDiscountPreviousAttributesInput.source](../models/InvoiceDiscountPreviousAttributesInput.md#invoicediscountpreviousattributesinputsource).

### OrderDiscountPreviousAttributesInput.status

### OrderDiscountPreviousAttributesInput.status variant 1

anyOf variant 1: Redemption state of the discount..

- Value shape: string. Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`.

### OrderDiscountPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Redemption state of the discount. 

