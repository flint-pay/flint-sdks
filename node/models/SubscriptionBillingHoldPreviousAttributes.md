[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHoldPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Optional | string or null | When Flint first detected this billing hold. `detected_at`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesdetected_at). |
| `reason` | Optional | string or null | Why subscription billing cannot proceed. Values: `"configuration"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesreason). |

### SubscriptionBillingHoldPreviousAttributes.detected_at

### SubscriptionBillingHoldPreviousAttributes.detected_at variant 1

anyOf variant 1: When Flint first detected this billing hold..

- Value shape: string. When Flint first detected this billing hold. When Flint first detected this billing hold. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionBillingHoldPreviousAttributes.detected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint first detected this billing hold. 

### SubscriptionBillingHoldPreviousAttributes.reason

### SubscriptionBillingHoldPreviousAttributes.reason variant 1

anyOf variant 1: Why subscription billing cannot proceed..

- Value shape: string. Why subscription billing cannot proceed. Values: `"configuration"`, `"other"`.

### SubscriptionBillingHoldPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why subscription billing cannot proceed. 

