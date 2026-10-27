[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWait

Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string |  |
| `order_id` | Required | string |  |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

