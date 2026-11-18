[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total returned for this charge, including tax. |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Discount allocated to the refunded part of the charge. It does not increase the money returned. |
| `order_charge_id` | Optional | string or null | ID of the refunded order charge. `order_charge_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributesInput.md#refundchargeallocationpreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order containing the refunded charge. `order_id`: [declared alternatives](../models/RefundChargeAllocationPreviousAttributesInput.md#refundchargeallocationpreviousattributesinputorder_id). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Charge amount returned excluding tax, after discounts. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax returned for this charge under automatic or external tax. Included in amount_money. |

### RefundChargeAllocationPreviousAttributesInput.order_charge_id

### RefundChargeAllocationPreviousAttributesInput.order_charge_id variant 1

anyOf variant 1: ID of the refunded order charge..

- Value shape: string. ID of the refunded order charge. ID of the refunded order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### RefundChargeAllocationPreviousAttributesInput.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refunded order charge. 

### RefundChargeAllocationPreviousAttributesInput.order_id

### RefundChargeAllocationPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order containing the refunded charge..

- Value shape: string. ID of the order containing the refunded charge. ID of the order containing the refunded charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundChargeAllocationPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order containing the refunded charge. 

