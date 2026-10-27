[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SaveMeGiftCardRequestRecipientAccessInput

The `recipient_access` variant of `SaveMeGiftCardRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | minLength: `1`. |
| `credential_type` | Required | string | Values: `"recipient_access"`. |
| `grant_id` | Required | string | minLength: `1`. |
| `recipient_access_token` | Required | string | minLength: `1`. |

