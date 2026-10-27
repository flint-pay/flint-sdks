[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmEmailChangeRequest

The request body for: Confirm an email change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | minLength: `1`. pattern: `^[0-9]{6}$`. |
| `new_email_code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

