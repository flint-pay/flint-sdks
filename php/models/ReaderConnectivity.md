[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectivity

Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_seen_at` | Optional | string or null | When the reader last reached Stripe. Omitted when it never has. Format: `date-time`. |
| `observed_at` | Required | string | When Flint observed this. Format: `date-time`. |
| `status` | Required | string | Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`. |

