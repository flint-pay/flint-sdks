[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCountsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Optional | integer or null | Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. `active`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputactive). |
| `billing_hold` | Optional | integer or null | Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. `billing_hold`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputbilling_hold). |
| `canceling` | Optional | integer or null | Number of active subscriptions scheduled to cancel at the end of their current period. `canceling`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputcanceling). |
| `past_due` | Optional | integer or null | Number of counted subscriptions with status `past_due`. `past_due`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputpast_due). |
| `paused` | Optional | integer or null | Number of counted subscriptions with status `paused`. `paused`: [declared alternatives](../models/SubscriptionCountsPreviousAttributesInput.md#subscriptioncountspreviousattributesinputpaused). |

### SubscriptionCountsPreviousAttributesInput.active

### SubscriptionCountsPreviousAttributesInput.active variant 1

anyOf variant 1: Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets..

- Value shape: integer. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.active variant 2

anyOf variant 2.

- Value shape: null. Number of subscriptions with the stored status `active`, including the canceling and billing_hold subsets. 

### SubscriptionCountsPreviousAttributesInput.billing_hold

### SubscriptionCountsPreviousAttributesInput.billing_hold variant 1

anyOf variant 1: Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations..

- Value shape: integer. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.billing_hold variant 2

anyOf variant 2.

- Value shape: null. Number of active subscriptions with billing on hold or being retried, excluding scheduled cancellations. 

### SubscriptionCountsPreviousAttributesInput.canceling

### SubscriptionCountsPreviousAttributesInput.canceling variant 1

anyOf variant 1: Number of active subscriptions scheduled to cancel at the end of their current period..

- Value shape: integer. Number of active subscriptions scheduled to cancel at the end of their current period. Number of active subscriptions scheduled to cancel at the end of their current period. Format: `int64`. 

### SubscriptionCountsPreviousAttributesInput.canceling variant 2

anyOf variant 2.

- Value shape: null. Number of active subscriptions scheduled to cancel at the end of their current period. 

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

