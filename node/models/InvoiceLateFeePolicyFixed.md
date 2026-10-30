[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLateFeePolicyFixed

The `fixed` variant of `InvoiceLateFeePolicy`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `application_mode` | Optional | string | Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: `"manual"`. Values: `"manual"`, `"automatic"`. |
| `grace_period_days` | Required | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `percent` | Optional | number | Percentage applied to the fee base_outstanding_money. maximum: `100`. exclusiveMinimum: `0`. multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`. |

### InvoiceLateFeePolicyFixed.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

