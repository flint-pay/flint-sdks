[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPaymentSplits







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Required | string | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. Example: `"https://example.com/receipt"`. |

### PartnerAppPaymentSplits variant 1

anyOf variant 1: Declared schema PartnerAppPaymentSplits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen..

- Constraints for `seller_terms_url`: maxLength: `2048`. pattern: `^https://`.

### PartnerAppPaymentSplits variant 2

anyOf variant 2: Declared schema PartnerAppPaymentSplitsRequest. The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole..

- Constraints for `seller_terms_url`: minLength: `1`. maxLength: `2048`. pattern: `^https://`.

