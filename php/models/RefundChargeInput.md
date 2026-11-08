[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundChargeInput

An order charge to refund when creating a refund, with an optional amount to refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to refund from this charge. Omit it to refund the charge's full remaining amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | ID of the order charge to refund. minLength: `1`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

