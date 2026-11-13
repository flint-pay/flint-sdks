[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditChargeRefundInput

The value an edit releases from one order charge, and the part refunded to the buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The charge value released. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | The order charge whose value is released. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of amount_money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

