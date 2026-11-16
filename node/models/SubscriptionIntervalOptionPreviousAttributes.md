[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionIntervalOptionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. `billing_interval_count`: [declared alternatives](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributesbilling_interval_count). |

### SubscriptionIntervalOptionPreviousAttributes.billing_interval

### SubscriptionIntervalOptionPreviousAttributes.billing_interval variant 1

anyOf variant 1: Unit of the billing period. Together with billing_interval_count it sets the period one charge covers..

- Value shape: string. Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### SubscriptionIntervalOptionPreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. 

### SubscriptionIntervalOptionPreviousAttributes.billing_interval_count

### SubscriptionIntervalOptionPreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge..

- Value shape: integer. Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Format: `int32`. minimum: `1`. maximum: `365`. 

### SubscriptionIntervalOptionPreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. 

