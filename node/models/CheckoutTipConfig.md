[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTipConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_smart_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `default_smart_tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money). |
| `default_tip_percent` | Optional | number | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `enabled` | Optional | boolean |  |
| `smart_tip_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### CheckoutTipConfig variant 1

anyOf variant 1: Declared schema CheckoutTipConfig. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips..

No additional constraints.

### CheckoutTipConfig variant 2

anyOf variant 2: Declared schema CheckoutTipConfigRequestRequest. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips..

No additional constraints.

### CheckoutTipConfig.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### CheckoutTipConfig.smart_tip_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

