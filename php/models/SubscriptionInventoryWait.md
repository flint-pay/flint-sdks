[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWait

A subscription renewal or prepaid delivery waiting for stock.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Optional | string | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. |
| `order_id` | Optional | string | ID of the order waiting for stock, if one was created. Merchant credentials only. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

