[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWait

Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Required | string | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. |
| `order_id` | Required | string | ID of the renewal order waiting for stock. Merchant credentials only. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

