[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SaveMeGiftCardRequestRecipientAccessInput

The `recipient_access` variant of `SaveMeGiftCardRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The gift card's code. Spaces and hyphens are ignored. minLength: `1`. |
| `credential_type` | Required | string | The proof that the buyer can use the card: its code, or the private recipient link they received. Values: `"recipient_access"`. |
| `grant_id` | Required | string | ID of the recipient access grant, from the path of the private recipient link. minLength: `1`. Example: `"gcg_01KEZF7C00BTDW4CJQTB38Q828"`. |
| `recipient_access_token` | Required | string | Token from the fragment of the private recipient link. minLength: `1`. |

