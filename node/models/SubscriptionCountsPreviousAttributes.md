[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Optional | integer or null | Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. `active`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributesactive). |
| `billing_hold` | Optional | integer or null | Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. `billing_hold`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributesbilling_hold). |
| `canceling` | Optional | integer or null | Number of active subscriptions scheduled to cancel at the end of their current period. `canceling`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributescanceling). |
| `past_due` | Optional | integer or null | Number of counted subscriptions with status `past_due`. `past_due`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributespast_due). |
| `paused` | Optional | integer or null | Number of counted subscriptions with status `paused`. `paused`: [declared alternatives](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributespaused). |

### SubscriptionCountsPreviousAttributes.active

### SubscriptionCountsPreviousAttributes.active variant 1

anyOf variant 1: Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets..

- Value shape: integer. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.active variant 2

anyOf variant 2.

- Value shape: null. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. 

### SubscriptionCountsPreviousAttributes.billing_hold

### SubscriptionCountsPreviousAttributes.billing_hold variant 1

anyOf variant 1: Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations..

- Value shape: integer. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.billing_hold variant 2

anyOf variant 2.

- Value shape: null. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. 

### SubscriptionCountsPreviousAttributes.canceling

### SubscriptionCountsPreviousAttributes.canceling variant 1

anyOf variant 1: Number of active subscriptions scheduled to cancel at the end of their current period..

- Value shape: integer. Number of active subscriptions scheduled to cancel at the end of their current period. Number of active subscriptions scheduled to cancel at the end of their current period. Format: `int64`. 

### SubscriptionCountsPreviousAttributes.canceling variant 2

anyOf variant 2.

- Value shape: null. Number of active subscriptions scheduled to cancel at the end of their current period. 

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

