[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillmentOutcome

A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it occurred.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `occurred_at` | Required | string | Time the terminal outcome occurred. Format: `date-time`. |
| `outcome_type` | Required | string | Recorded fulfillment outcome, such as a missed service appointment. Values: `"no_show"`. |
| `reason` | Required | string | Machine-readable reason for the recorded outcome. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. |

