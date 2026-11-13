[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantPaymentSplits

The merchant's approval to receive split funds from the app in this grant's mode.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approved_at` | Required | string | When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `seller_terms_url` | Required | string | The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

