[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewResolutionFailurePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Optional | string or null | RFC3339 timestamp. `failed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `refund_id` | Optional | string or null | ID of the refund that failed and reopened the review. `refund_id`: [declared alternatives](../models/PaymentReviewResolutionFailurePreviousAttributes.md#paymentreviewresolutionfailurepreviousattributesrefund_id). |

### PaymentReviewResolutionFailurePreviousAttributes.failed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentReviewResolutionFailurePreviousAttributes.refund_id

### PaymentReviewResolutionFailurePreviousAttributes.refund_id variant 1

anyOf variant 1: ID of the refund that failed and reopened the review..

- Value shape: string. ID of the refund that failed and reopened the review. 

### PaymentReviewResolutionFailurePreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund that failed and reopened the review. 

