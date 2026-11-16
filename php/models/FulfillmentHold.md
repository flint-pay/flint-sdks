[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentHold

A hold on a fulfillment, with its reason, who placed it, and when it became active.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | Time the hold became active. Format: `date-time`. |
| `display_reason` | Optional | string | Explanation of the hold suitable for display to the merchant. |
| `held_by` | Optional | string | Actor that placed the fulfillment on hold. |
| `initiated_by` | Required | string | Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Values: `"merchant"`, `"flint"`. |
| `previous_status` | Required | string | Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Values: `"pending"`, `"accepted"`, `"in_progress"`, `"ready"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`. |
| `reason` | Required | string | Machine-readable reason fulfillment work is paused. Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. |
| `reason_notes` | Optional | string | Additional notes explaining the hold. |

