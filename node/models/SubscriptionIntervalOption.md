[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionIntervalOption







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period. Together with billing_interval_count it sets the period one charge covers. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of interval units per billing period, from 1 to 365. It doesn't change the price of one delivery. With a delivery cadence, it changes how many deliveries one charge covers; without one, it doesn't change the charge. Format: `int32`. minimum: `1`. maximum: `365`. |

### SubscriptionIntervalOption variant 1

anyOf variant 1: Declared schema SubscriptionIntervalOption. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans..

No additional constraints.

### SubscriptionIntervalOption variant 2

anyOf variant 2: Declared schema SubscriptionIntervalOptionRequest. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans..

No additional constraints.

