[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTipConfigRequestRequestInput

Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_smart_tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `default_tip_percent` | Optional | number | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `enabled` | Optional | boolean |  |
| `smart_tip_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

