[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscribedLinePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscribedLinePreviousAttributesInput.md#subscribedlinepreviousattributesinputbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing_interval units between charges, from 1 to 365. `billing_interval_count`: [declared alternatives](../models/SubscribedLinePreviousAttributesInput.md#subscribedlinepreviousattributesinputbilling_interval_count). |
| `recurring_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer the line was bought under. `subscription_offer_id`: [declared alternatives](../models/SubscribedLinePreviousAttributesInput.md#subscribedlinepreviousattributesinputsubscription_offer_id). |

### SubscribedLinePreviousAttributesInput.billing_interval

### SubscribedLinePreviousAttributesInput.billing_interval variant 1

anyOf variant 1: Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options..

- Value shape: string. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscribedLinePreviousAttributesInput.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. 

### SubscribedLinePreviousAttributesInput.billing_interval_count

### SubscribedLinePreviousAttributesInput.billing_interval_count variant 1

anyOf variant 1: Number of billing_interval units between charges, from 1 to 365..

- Value shape: integer. Number of billing_interval units between charges, from 1 to 365. Number of billing_interval units between charges, from 1 to 365. Format: `int32`. 

### SubscribedLinePreviousAttributesInput.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing_interval units between charges, from 1 to 365. 

### SubscribedLinePreviousAttributesInput.subscription_offer_id

### SubscribedLinePreviousAttributesInput.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer the line was bought under..

- Value shape: string. ID of the subscription offer the line was bought under. ID of the subscription offer the line was bought under. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### SubscribedLinePreviousAttributesInput.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer the line was bought under. 

