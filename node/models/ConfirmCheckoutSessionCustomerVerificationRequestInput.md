[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmCheckoutSessionCustomerVerificationRequestInput

Request input. Response: [LookupGiftCardRequest](../models/LookupGiftCardRequest.md#lookupgiftcardrequest).

The code the buyer typed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`. |

