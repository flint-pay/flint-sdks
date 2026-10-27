[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GuestPurchaseLinkInput

Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `email` | Required | string |  |
| `linked_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `linked_order_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

