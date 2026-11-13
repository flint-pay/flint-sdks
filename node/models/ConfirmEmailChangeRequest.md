[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmEmailChangeRequest

The request body for: Confirm an email change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_email_code` | Optional | string | The six-digit code emailed to the current address. Required when `current_email_confirmation_required` is `true`. minLength: `1`. pattern: `^[0-9]{6}$`. |
| `move_flint_wallet` | Optional | boolean | Also move cards saved with Flint from the previous email to the new email. Defaults to false. Accepted only from customer sessions that can access GET /v1/me/flint-wallet/cards: a live email-code sign-in at a Flint-hosted account. Other sessions may not send this field, even as false. Default: `false`. |
| `new_email_code` | Required | string | The six-digit code emailed to the new address. minLength: `1`. pattern: `^[0-9]{6}$`. |

