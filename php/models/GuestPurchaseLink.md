[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GuestPurchaseLink

Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer the guest purchases now belong to. |
| `email` | Required | string | The verified email address whose guest purchases were linked. |
| `linked_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `linked_order_count` | Required | integer | Number of guest orders linked to the customer by this request. Format: `int64`. |

