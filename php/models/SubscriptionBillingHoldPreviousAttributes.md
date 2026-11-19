[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingHoldPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `detected_at` | Optional | string or null | When Flint first detected this billing hold. `detected_at`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesdetected_at). |
| `reason` | Optional | string or null | Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesreason). |
| `retry_at` | Optional | string or null | When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. `retry_at`: [declared alternatives](../models/SubscriptionBillingHoldPreviousAttributes.md#subscriptionbillingholdpreviousattributesretry_at). |

### SubscriptionBillingHoldPreviousAttributes.detected_at

### SubscriptionBillingHoldPreviousAttributes.detected_at variant 1

anyOf variant 1: When Flint first detected this billing hold..

- Value shape: string. When Flint first detected this billing hold. When Flint first detected this billing hold. Format: `date-time`. 

### SubscriptionBillingHoldPreviousAttributes.detected_at variant 2

anyOf variant 2.

- Value shape: null. When Flint first detected this billing hold. 

### SubscriptionBillingHoldPreviousAttributes.reason

### SubscriptionBillingHoldPreviousAttributes.reason variant 1

anyOf variant 1: Why subscription billing cannot proceed. Treat unrecognized values as other..

- Value shape: string. Why subscription billing cannot proceed. Treat unrecognized values as other. Values: `"configuration"`, `"retrying"`, `"platform_review"`, `"flint_restriction"`, `"other"`.

### SubscriptionBillingHoldPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why subscription billing cannot proceed. Treat unrecognized values as other. 

### SubscriptionBillingHoldPreviousAttributes.retry_at

### SubscriptionBillingHoldPreviousAttributes.retry_at variant 1

anyOf variant 1: When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry..

- Value shape: string. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: `date-time`. 

### SubscriptionBillingHoldPreviousAttributes.retry_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. 

