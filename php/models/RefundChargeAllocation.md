[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeAllocation

Money returned for one order charge, including subtotal, discount, and tax.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total returned for this charge, including tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount allocated to the refunded part of the charge. It does not increase the money returned. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | ID of the refunded order charge. |
| `order_id` | Required | string | ID of the order containing the refunded charge. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount returned excluding tax, after discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax returned for this charge under automatic or external tax. Included in amount_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

