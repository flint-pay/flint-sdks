[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentLinkSummary

A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `name` | Required | string |  |
| `payment_link_id` | Required | string |  |
| `payment_link_type` | Optional | string | Values: `"standard"`, `"donation"`, `"event"`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `url` | Optional | string |  |

