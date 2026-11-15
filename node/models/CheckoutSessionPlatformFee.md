[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionPlatformFee

The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee the partner app requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CheckoutSessionPlatformFee.md#checkoutsessionplatformfeeamount_money). |
| `partner_app_id` | Required | string | The partner app that requested the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |

### CheckoutSessionPlatformFee.amount_money

The fee the partner app requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

