[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWaitInput

A subscription renewal or prepaid delivery waiting for stock.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Optional | string | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `order_id` | Optional | string | ID of the order waiting for stock, if one was created. Merchant credentials only. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

