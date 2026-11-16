[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Optional | integer or null | Number of counted subscriptions with status `active`. `active`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributesactive). |
| `past_due` | Optional | integer or null | Number of counted subscriptions with status `past_due`. `past_due`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributespast_due). |
| `paused` | Optional | integer or null | Number of counted subscriptions with status `paused`. `paused`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributespaused). |

### SubscriptionCountsPreviousAttributes.active

### SubscriptionCountsPreviousAttributes.active variant 1

anyOf variant 1: Number of counted subscriptions with status `active`..

- Value shape: integer. Number of counted subscriptions with status `active`. Number of counted subscriptions with status `active`. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.active variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `active`. 

### SubscriptionCountsPreviousAttributes.past_due

### SubscriptionCountsPreviousAttributes.past_due variant 1

anyOf variant 1: Number of counted subscriptions with status `past_due`..

- Value shape: integer. Number of counted subscriptions with status `past_due`. Number of counted subscriptions with status `past_due`. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.past_due variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `past_due`. 

### SubscriptionCountsPreviousAttributes.paused

### SubscriptionCountsPreviousAttributes.paused variant 1

anyOf variant 1: Number of counted subscriptions with status `paused`..

- Value shape: integer. Number of counted subscriptions with status `paused`. Number of counted subscriptions with status `paused`. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.paused variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `paused`. 

