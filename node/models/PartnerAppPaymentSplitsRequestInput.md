[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPaymentSplitsRequestInput

Request input. Response: [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits).

The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Required | string | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

