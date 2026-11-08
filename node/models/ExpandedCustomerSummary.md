[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedCustomerSummary

A customer's summary fields, returned in place of a customer ID when the customer is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email` | Required | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `name` | Required | string or null | Customer name. `null` when none is set. |
| `phone` | Required | string or null | Customer phone number. `null` when none is set. |
| `status` | Required | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

