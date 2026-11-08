[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentLinkSummary

A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | Unique identifier for this payment link, prefixed `pl_`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Optional | string | URL buyers open to use the link. |

