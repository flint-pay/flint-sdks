[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SaveMeGiftCardRequestCode

The `code` variant of `SaveMeGiftCardRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. |
| `credential_type` | Required | string | Values: `"code"`. |
| `grant_id` | Optional | string | minLength: `1`. |
| `recipient_access_token` | Optional | string | minLength: `1`. |

