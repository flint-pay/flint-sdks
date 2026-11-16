[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterCyclesPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Optional | integer or null | Total charged billing cycles, including imported completed cycles. `cycle_count`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputcycle_count). |
| `type` | Optional | string or null | How this automatic end is measured. Values: `"cycles"`. `type`: [declared alternatives](../models/SubscriptionEndAfterCyclesPreviousAttributesInput.md#subscriptionendaftercyclespreviousattributesinputtype). |

### SubscriptionEndAfterCyclesPreviousAttributesInput.cycle_count

### SubscriptionEndAfterCyclesPreviousAttributesInput.cycle_count variant 1

anyOf variant 1: Total charged billing cycles, including imported completed cycles..

- Value shape: integer. Total charged billing cycles, including imported completed cycles. Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. 

### SubscriptionEndAfterCyclesPreviousAttributesInput.cycle_count variant 2

anyOf variant 2.

- Value shape: null. Total charged billing cycles, including imported completed cycles. 

### SubscriptionEndAfterCyclesPreviousAttributesInput.type

### SubscriptionEndAfterCyclesPreviousAttributesInput.type variant 1

anyOf variant 1: How this automatic end is measured..

- Value shape: string. How this automatic end is measured. Values: `"cycles"`.

### SubscriptionEndAfterCyclesPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How this automatic end is measured. 

