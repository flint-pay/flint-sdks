[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedCustomerSummaryInput

A customer's summary fields, returned in place of a customer ID when the customer is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `email` | Required | string or null | Customer email, or null when the customer has none. Unique among the environment's customers. |
| `name` | Required | string or null | Customer name, or null when none. |
| `phone` | Required | string or null | Customer phone number, or null when none. |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

