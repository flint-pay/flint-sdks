[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentHold

A hold on a fulfillment, with its reason, who placed it, and when it became active.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | Time the hold became active. Format: `date-time`. |
| `display_reason` | Optional | string | Explanation of the hold suitable for display to the merchant. |
| `held_by` | Optional | string | Actor that placed the fulfillment on hold. |
| `previous_status` | Required | string | Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Values: [14 declared values](#fulfillmenthold-previous_status-values). |
| `reason` | Required | string | Machine-readable reason fulfillment work is paused. Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. |
| `reason_notes` | Optional | string | Additional notes explaining the hold. |

#### FulfillmentHold previous_status values

- `"pending"`
- `"accepted"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

