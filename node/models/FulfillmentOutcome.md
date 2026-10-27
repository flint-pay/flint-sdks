[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentOutcome

The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `notes` | Optional | string | Additional notes about the fulfillment outcome. |
| `occurred_at` | Required | string | Time the terminal outcome occurred. Format: `date-time`. |
| `outcome_type` | Required | string | Recorded fulfillment outcome, such as a missed service appointment. Values: `"no_show"`. |
| `reason` | Required | string | Machine-readable reason for the recorded outcome. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. |

