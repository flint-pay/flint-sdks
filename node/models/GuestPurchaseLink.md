[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GuestPurchaseLink

Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer the guest purchases now belong to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email` | Required | string | The verified email address whose guest purchases were linked. |
| `linked_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `linked_order_count` | Required | integer | Number of guest orders linked to the customer by this request. Format: `int64`. |

