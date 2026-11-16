[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewResolutionFailurePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Optional | string or null | RFC3339 timestamp. `failed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `refund_id` | Optional | string or null | ID of the refund that failed and reopened the review. `refund_id`: [declared alternatives](../models/PaymentReviewResolutionFailurePreviousAttributesInput.md#paymentreviewresolutionfailurepreviousattributesinputrefund_id). |

### PaymentReviewResolutionFailurePreviousAttributesInput.failed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentReviewResolutionFailurePreviousAttributesInput.refund_id

### PaymentReviewResolutionFailurePreviousAttributesInput.refund_id variant 1

anyOf variant 1: ID of the refund that failed and reopened the review..

- Value shape: string. ID of the refund that failed and reopened the review. ID of the refund that failed and reopened the review. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### PaymentReviewResolutionFailurePreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund that failed and reopened the review. 

