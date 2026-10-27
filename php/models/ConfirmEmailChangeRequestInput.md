[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmEmailChangeRequestInput

The request body for: Confirm an email change.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | minLength: `1`. pattern: `^[0-9]{6}$`. |
| `new_email_code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

