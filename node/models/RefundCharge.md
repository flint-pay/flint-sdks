[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundCharge

An order charge to refund when creating a refund, with an optional amount to refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to refund from this charge. Omit it to refund the charge's full remaining amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundCharge.md#refundchargeamount_money). |
| `order_charge_id` | Required | string | ID of the order charge to refund. minLength: `1`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

### RefundCharge.amount_money

Amount to refund from this charge. Omit it to refund the charge's full remaining amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

