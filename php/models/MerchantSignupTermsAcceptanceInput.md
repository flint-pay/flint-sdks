[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupTermsAcceptanceInput

The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent you reported; they aren't returned.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When the owner accepted the terms. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_terms_version` | Required | string | The terms version accepted. |

