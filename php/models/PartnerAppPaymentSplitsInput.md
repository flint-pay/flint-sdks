[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPaymentSplitsInput

The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Required | string | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

