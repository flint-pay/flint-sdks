[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmEmailChangeRequest

The request body for: Confirm an email change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | The six-digit code emailed to the current address. Required when `current_email_confirmation_required` is `true`. minLength: `1`. pattern: `^[0-9]{6}$`. |
| `new_email_code` | Required | string | The six-digit code emailed to the new address. minLength: `1`. pattern: `^[0-9]{6}$`. |

