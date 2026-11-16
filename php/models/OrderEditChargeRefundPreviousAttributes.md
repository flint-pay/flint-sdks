[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefundPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The charge value released. The order no longer owes it. |
| `order_charge_id` | Optional | string or null | The order charge whose value is released. `order_charge_id`: [declared alternatives](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributesorder_charge_id). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of amount_money refunded to the buyer. |

### OrderEditChargeRefundPreviousAttributes.order_charge_id

### OrderEditChargeRefundPreviousAttributes.order_charge_id variant 1

anyOf variant 1: The order charge whose value is released..

- Value shape: string. The order charge whose value is released. 

### OrderEditChargeRefundPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. The order charge whose value is released. 

