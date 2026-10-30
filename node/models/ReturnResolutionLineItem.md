[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionLineItem

A return line included in a resolution, with its quantity and returned total.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `return_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `return_resolution_line_item_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### ReturnResolutionLineItem.returned_total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

