[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total returned for this charge, including tax. |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount allocated to the refunded part of the charge. It does not increase the money returned. |
| `order_charge_id` | Optional | string or null | ID of the refunded order charge. `order_charge_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order containing the refunded charge. `order_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributes.md#refundchargeallocationpreviousattributesorder_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount returned excluding tax, after discounts. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax returned for this charge under automatic or external tax. Included in amount_money. |

### RefundChargeAllocationPreviousAttributes.order_charge_id

### RefundChargeAllocationPreviousAttributes.order_charge_id variant 1

anyOf variant 1: ID of the refunded order charge..

- Value shape: string. ID of the refunded order charge. 

### RefundChargeAllocationPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refunded order charge. 

### RefundChargeAllocationPreviousAttributes.order_id

### RefundChargeAllocationPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order containing the refunded charge..

- Value shape: string. ID of the order containing the refunded charge. 

### RefundChargeAllocationPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order containing the refunded charge. 

