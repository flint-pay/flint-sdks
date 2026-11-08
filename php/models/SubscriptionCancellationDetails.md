[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCancellationDetails

The cancellation request behind a scheduled or completed cancellation.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `comment` | Optional | string | What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: `500`. |
| `reason_code` | Optional | string | The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `requested_at` | Required | string | When the cancellation was requested. Format: `date-time`. |
| `requested_by` | Required | string | Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`. |

