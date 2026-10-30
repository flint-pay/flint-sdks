[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundIn

The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_breakdown_id` | Required | string | minLength: `1`. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### RefundTaxBreakdownRefundIn.tax_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

