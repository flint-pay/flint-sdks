[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupGiftCardRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |

### LookupGiftCardRequest variant 1

anyOf variant 1: Declared schema ConfirmCheckoutSessionCustomerVerificationRequest. The code the buyer typed..

- Constraints for `code`: The six-digit code from the email or the text. minLength: `6`. maxLength: `6`. pattern: `^[0-9]{6}$`.

### LookupGiftCardRequest variant 2

anyOf variant 2: Declared schema ConfirmCustomerVerificationRequest. The request body for: Confirm a customer email verification..

- Constraints for `code`: minLength: `1`. pattern: `^[0-9]{6}$`.

### LookupGiftCardRequest variant 3

anyOf variant 3: Declared schema LookupGiftCardRequest. The request body for: Look up a gift card code..

- Constraints for `code`: minLength: `1`.

