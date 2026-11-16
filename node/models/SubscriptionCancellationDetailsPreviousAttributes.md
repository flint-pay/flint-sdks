[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCancellationDetailsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `comment` | Optional | string or null | What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. `comment`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributescomment). |
| `reason_code` | Optional | string or null | The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. `reason_code`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesreason_code). |
| `requested_at` | Optional | string or null | When the cancellation was requested. `requested_at`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesrequested_at). |
| `requested_by` | Optional | string or null | Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`. `requested_by`: [declared alternatives](../models/SubscriptionCancellationDetailsPreviousAttributes.md#subscriptioncancellationdetailspreviousattributesrequested_by). |

### SubscriptionCancellationDetailsPreviousAttributes.comment

### SubscriptionCancellationDetailsPreviousAttributes.comment variant 1

anyOf variant 1: What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted..

- Value shape: string. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: `500`. 

### SubscriptionCancellationDetailsPreviousAttributes.comment variant 2

anyOf variant 2.

- Value shape: null. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. 

### SubscriptionCancellationDetailsPreviousAttributes.reason_code

### SubscriptionCancellationDetailsPreviousAttributes.reason_code variant 1

anyOf variant 1: The reason the requester chose. Omitted when none was given..

- Value shape: string. The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`.

### SubscriptionCancellationDetailsPreviousAttributes.reason_code variant 2

anyOf variant 2.

- Value shape: null. The reason the requester chose. Omitted when none was given. 

### SubscriptionCancellationDetailsPreviousAttributes.requested_at

### SubscriptionCancellationDetailsPreviousAttributes.requested_at variant 1

anyOf variant 1: When the cancellation was requested..

- Value shape: string. When the cancellation was requested. When the cancellation was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### SubscriptionCancellationDetailsPreviousAttributes.requested_at variant 2

anyOf variant 2.

- Value shape: null. When the cancellation was requested. 

### SubscriptionCancellationDetailsPreviousAttributes.requested_by

### SubscriptionCancellationDetailsPreviousAttributes.requested_by variant 1

anyOf variant 1: Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer..

- Value shape: string. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`.

### SubscriptionCancellationDetailsPreviousAttributes.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. 

