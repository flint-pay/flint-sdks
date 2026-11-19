[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Optional | string or null | When Flint first detected this billing hold. `detected_at`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributesInput.md#subscriptionbillingholdpreviousattributesinputdetected_at). |
| `reason` | Optional | string or null | Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributesInput.md#subscriptionbillingholdpreviousattributesinputreason). |
| `retry_at` | Optional | string or null | When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. `retry_at`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributesInput.md#subscriptionbillingholdpreviousattributesinputretry_at). |

### SubscriptionBillingHoldPreviousAttributesInput.detected_at

### SubscriptionBillingHoldPreviousAttributesInput.detected_at variant 1

anyOf variant 1: When Flint first detected this billing hold..

- Value shape: string. When Flint first detected this billing hold. When Flint first detected this billing hold. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionBillingHoldPreviousAttributesInput.detected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint first detected this billing hold. 

### SubscriptionBillingHoldPreviousAttributesInput.reason

### SubscriptionBillingHoldPreviousAttributesInput.reason variant 1

anyOf variant 1: Why subscription billing cannot proceed. Treat unrecognized values as other..

- Value shape: string. Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`.

### SubscriptionBillingHoldPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why subscription billing cannot proceed. Treat unrecognized values as other. 

### SubscriptionBillingHoldPreviousAttributesInput.retry_at

### SubscriptionBillingHoldPreviousAttributesInput.retry_at variant 1

anyOf variant 1: When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry..

- Value shape: string. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionBillingHoldPreviousAttributesInput.retry_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. 

