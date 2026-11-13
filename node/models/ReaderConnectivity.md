[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReaderConnectivity

Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `last_seen_at` | Optional | string or null | When the reader last reached Stripe. Omitted when it never has. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `observed_at` | Required | string | When Flint observed this. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Whether the reader was reaching Stripe when Flint last observed it. Values: `"online"`, `"offline"`. |

