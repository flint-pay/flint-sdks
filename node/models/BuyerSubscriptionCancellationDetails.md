[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionCancellationDetails

The cancellation request behind a scheduled or completed cancellation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_code` | Optional | string | The reason the requester chose. Omitted when none was given. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `requested_at` | Required | string | When the cancellation was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `requested_by` | Required | string | Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Values: `"buyer"`, `"merchant"`, `"integration"`. |

