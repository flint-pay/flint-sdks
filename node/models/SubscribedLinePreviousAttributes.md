[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLinePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges, from 1 to 365. `billing_interval_count`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesbilling_interval_count). |
| `recurring_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. `recurring_amount_money`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributesrecurring_amount_money). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. `subscription_offer_id`: [declared alternatives](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributessubscription_offer_id). |

### SubscribedLinePreviousAttributes.billing_interval

### SubscribedLinePreviousAttributes.billing_interval variant 1

anyOf variant 1: Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options..

- Value shape: string. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscribedLinePreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. 

### SubscribedLinePreviousAttributes.billing_interval_count

### SubscribedLinePreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of billing_interval units between charges, from 1 to 365..

- Value shape: integer. Number of billing_interval units between charges, from 1 to 365. Number of billing_interval units between charges, from 1 to 365. Format: `int32`. 

### SubscribedLinePreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing_interval units between charges, from 1 to 365. 

### SubscribedLinePreviousAttributes.recurring_amount_money

Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscribedLinePreviousAttributes.recurring_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscribedLinePreviousAttributes.recurring_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. 

### SubscribedLinePreviousAttributes.recurring_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### SubscribedLinePreviousAttributes.recurring_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### SubscribedLinePreviousAttributes.subscription_offer_id

### SubscribedLinePreviousAttributes.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under..

- Value shape: string. ID of the subscription offer the line was bought under. ID of the subscription offer the line was bought under. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscribedLinePreviousAttributes.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. 

