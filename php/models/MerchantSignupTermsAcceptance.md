[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupTermsAcceptance

The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP address and user agent you reported; they aren't returned.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When the owner accepted the terms. Format: `date-time`. |
| `merchant_terms_version` | Required | string | The terms version accepted. |

