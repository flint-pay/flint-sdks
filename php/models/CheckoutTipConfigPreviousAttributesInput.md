[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTipConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean or null | Whether buyers can enter a custom tip amount. `custom_tip_enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputcustom_tip_enabled). |
| `default_smart_tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. |
| `default_tip_percent` | Optional | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. `default_tip_percent`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputdefault_tip_percent). |
| `enabled` | Optional | boolean or null | Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. `enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputenabled). |
| `smart_tip_money_options` | Optional | Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputsmart_tip_money_options). |
| `smart_tips_enabled` | Optional | boolean or null | Whether checkout offers fixed tip amounts instead of tip percentages. `smart_tips_enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputsmart_tips_enabled). |
| `tip_percent_options` | Optional | Array of number or null | Three tip percents to offer, each from 1 through 100 with at most four decimal places. `tip_percent_options`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributesInput.md#checkouttipconfigpreviousattributesinputtip_percent_options). |

### CheckoutTipConfigPreviousAttributesInput.custom_tip_enabled

### CheckoutTipConfigPreviousAttributesInput.custom_tip_enabled variant 1

anyOf variant 1: Whether buyers can enter a custom tip amount..

- Value shape: boolean. Whether buyers can enter a custom tip amount. 

### CheckoutTipConfigPreviousAttributesInput.custom_tip_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether buyers can enter a custom tip amount. 

### CheckoutTipConfigPreviousAttributesInput.default_tip_percent

### CheckoutTipConfigPreviousAttributesInput.default_tip_percent variant 1

anyOf variant 1: The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip..

- Value shape: number. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutTipConfigPreviousAttributesInput.default_tip_percent variant 2

anyOf variant 2.

- Value shape: null. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. 

### CheckoutTipConfigPreviousAttributesInput.enabled

### CheckoutTipConfigPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it..

- Value shape: boolean. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutTipConfigPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutTipConfigPreviousAttributesInput.smart_tip_money_options

### CheckoutTipConfigPreviousAttributesInput.smart_tip_money_options variant 1

anyOf variant 1: Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency..

- Value shape: Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutTipConfigPreviousAttributesInput.smart_tip_money_options variant 2

anyOf variant 2.

- Value shape: null. Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutTipConfigPreviousAttributesInput.smart_tips_enabled

### CheckoutTipConfigPreviousAttributesInput.smart_tips_enabled variant 1

anyOf variant 1: Whether checkout offers fixed tip amounts instead of tip percentages..

- Value shape: boolean. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutTipConfigPreviousAttributesInput.smart_tips_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutTipConfigPreviousAttributesInput.tip_percent_options

### CheckoutTipConfigPreviousAttributesInput.tip_percent_options variant 1

anyOf variant 1: Three tip percents to offer, each from 1 through 100 with at most four decimal places..

- Value shape: Array of number. Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutTipConfigPreviousAttributesInput.tip_percent_options variant 2

anyOf variant 2.

- Value shape: null. Three tip percents to offer, each from 1 through 100 with at most four decimal places. 

