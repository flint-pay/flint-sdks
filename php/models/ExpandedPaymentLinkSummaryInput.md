[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentLinkSummaryInput

A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Required | integer | Number of paid checkout sessions started from this link. Format: `int32`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. |
| `name` | Required | string | Name of the payment link. |
| `payment_link_id` | Required | string | Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_link_type` | Optional | string | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. |
| `status` | Required | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `subscription_plan_id` | Optional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Optional | string | URL buyers open to use the link. |

