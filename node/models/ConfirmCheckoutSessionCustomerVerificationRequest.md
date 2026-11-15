[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmCheckoutSessionCustomerVerificationRequest

The code the buyer typed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`. |
| `remember_buyer` | Optional | boolean | Remember this buyer after a right code. Defaults to false. Accepted without issuing a token until the required notice email is configured. |
| `remembered_buyer_token` | Optional | string | Token this device already holds, if any. A right code for the same email resets its unconfirmed steps; a different email ends it. With remember_buyer, Flint returns a replacement token. minLength: `47`. maxLength: `47`. pattern: `^rbt_[A-Za-z0-9_-]{43}$`. |

