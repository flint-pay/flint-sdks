[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Optional | integer or null | Number of counted subscriptions with status `active`. `active`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputactive). |
| `past_due` | Optional | integer or null | Number of counted subscriptions with status `past_due`. `past_due`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputpast_due). |
| `paused` | Optional | integer or null | Number of counted subscriptions with status `paused`. `paused`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputpaused). |

### SubscriptionCountsPreviousAttributesInput.active

### SubscriptionCountsPreviousAttributesInput.active variant 1

anyOf variant 1: Number of counted subscriptions with status `active`..

- Value shape: integer. Number of counted subscriptions with status `active`. Number of counted subscriptions with status `active`. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.active variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `active`. 

### SubscriptionCountsPreviousAttributesInput.past_due

### SubscriptionCountsPreviousAttributesInput.past_due variant 1

anyOf variant 1: Number of counted subscriptions with status `past_due`..

- Value shape: integer. Number of counted subscriptions with status `past_due`. Number of counted subscriptions with status `past_due`. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.past_due variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `past_due`. 

### SubscriptionCountsPreviousAttributesInput.paused

### SubscriptionCountsPreviousAttributesInput.paused variant 1

anyOf variant 1: Number of counted subscriptions with status `paused`..

- Value shape: integer. Number of counted subscriptions with status `paused`. Number of counted subscriptions with status `paused`. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.paused variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `paused`. 

