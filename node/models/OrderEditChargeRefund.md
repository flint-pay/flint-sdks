[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefund

The value an edit releases from one order charge, and the part refunded to the buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The charge value released. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderEditChargeRefund.md#ordereditchargerefundamount_money). |
| `order_charge_id` | Required | string | The order charge whose value is released. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of amount_money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEditChargeRefund.md#ordereditchargerefundrefund_money). |

### OrderEditChargeRefund.amount_money

The charge value released. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditChargeRefund.refund_money

The part of amount_money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

