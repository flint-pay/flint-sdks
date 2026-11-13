[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodImpact

How a delivery method change affects subscriptions: current counts and how many would no longer be eligible.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method whose edit was previewed. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `mode` | Required | string | Selects the delivery method update preview. Values: `"delivery_method_update"`. |
| `no_longer_eligible_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Of those, the subscriptions the edit would leave unable to use the method, by status. Counts of subscriptions by status: active, past due, and paused. |
| `no_longer_eligible_reasons` | Optional | Array of string | Distinct delivery eligibility reasons for the subscriptions in no_longer_eligible_counts. Includes method_type_not_allowed when stored items do not allow the method's type. Omitted when no reasons apply. Items values: `"eligibility_no_match"`, `"method_type_not_allowed"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Live subscriptions that use the method now, by status. Counts of subscriptions by status: active, past due, and paused. |

