[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionPlatformFee

The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee the partner app requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `partner_app_id` | Required | string | The partner app that requested the fee. |

