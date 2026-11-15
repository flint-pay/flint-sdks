[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionPlatformFeeInput

The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fee the partner app requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `partner_app_id` | Required | string | The partner app that requested the fee. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |

