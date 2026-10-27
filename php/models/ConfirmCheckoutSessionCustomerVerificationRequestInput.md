[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmCheckoutSessionCustomerVerificationRequestInput

The code the buyer typed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`. |

