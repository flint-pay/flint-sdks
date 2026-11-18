[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTipConfigPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean or null | Whether buyers can enter a custom tip amount. `custom_tip_enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributescustom_tip_enabled). |
| `default_smart_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. `default_smart_tip_money`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributesdefault_smart_tip_money). |
| `default_tip_percent` | Optional | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. `default_tip_percent`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributesdefault_tip_percent). |
| `enabled` | Optional | boolean or null | Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. `enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributesenabled). |
| `smart_tip_money_options` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. `smart_tip_money_options`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options). |
| `smart_tips_enabled` | Optional | boolean or null | Whether checkout offers fixed tip amounts instead of tip percentages. `smart_tips_enabled`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tips_enabled). |
| `tip_percent_options` | Optional | Array of number or null | Three tip percents to offer, each from 1 through 100 with at most four decimal places. `tip_percent_options`: [declared alternatives](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributestip_percent_options). |

### CheckoutTipConfigPreviousAttributes.custom_tip_enabled

### CheckoutTipConfigPreviousAttributes.custom_tip_enabled variant 1

anyOf variant 1: Whether buyers can enter a custom tip amount..

- Value shape: boolean. Whether buyers can enter a custom tip amount. 

### CheckoutTipConfigPreviousAttributes.custom_tip_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether buyers can enter a custom tip amount. 

### CheckoutTipConfigPreviousAttributes.default_smart_tip_money

The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutTipConfigPreviousAttributes.default_smart_tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutTipConfigPreviousAttributes.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The preselected fixed tip, with a positive amount in the same currency as smart_tip_money_options. Its amount and currency must match one of the effective smart_tip_money_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped. 

### CheckoutTipConfigPreviousAttributes.default_smart_tip_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutTipConfigPreviousAttributes.default_smart_tip_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutTipConfigPreviousAttributes.default_tip_percent

### CheckoutTipConfigPreviousAttributes.default_tip_percent variant 1

anyOf variant 1: The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip..

- Value shape: number. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutTipConfigPreviousAttributes.default_tip_percent variant 2

anyOf variant 2.

- Value shape: null. The preselected tip percent, from 1 through 100 with at most four decimal places. Must match one of the effective tip_percent_options: the ones sent here, or else the ones inherited from tipping settings. An inherited preselection that isn't one of the effective options is dropped, and checkout preselects no tip. 

### CheckoutTipConfigPreviousAttributes.enabled

### CheckoutTipConfigPreviousAttributes.enabled variant 1

anyOf variant 1: Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it..

- Value shape: boolean. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutTipConfigPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers a tip. Omit it to follow the merchant's tipping settings. Subscription signups don't inherit that setting or its preselected tip: they offer a tip only when this is true, and the tip is collected once, with the signup payment. A signup with nothing due today, such as a free trial, offers none. Renewals don't include it. 

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1

anyOf variant 1: Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 2

anyOf variant 2.

- Value shape: null. Three fixed tips to offer, each with a positive amount. On a checkout session they must use the session's currency. On a payment link they must share one currency, and a checkout opened from the link offers only those in its currency. 

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Optional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount). |
| `currency` | Optional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency). |

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutTipConfigPreviousAttributes.smart_tips_enabled

### CheckoutTipConfigPreviousAttributes.smart_tips_enabled variant 1

anyOf variant 1: Whether checkout offers fixed tip amounts instead of tip percentages..

- Value shape: boolean. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutTipConfigPreviousAttributes.smart_tips_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers fixed tip amounts instead of tip percentages. 

### CheckoutTipConfigPreviousAttributes.tip_percent_options

### CheckoutTipConfigPreviousAttributes.tip_percent_options variant 1

anyOf variant 1: Three tip percents to offer, each from 1 through 100 with at most four decimal places..

- Value shape: Array of number. Three tip percents to offer, each from 1 through 100 with at most four decimal places. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### CheckoutTipConfigPreviousAttributes.tip_percent_options variant 2

anyOf variant 2.

- Value shape: null. Three tip percents to offer, each from 1 through 100 with at most four decimal places. 

