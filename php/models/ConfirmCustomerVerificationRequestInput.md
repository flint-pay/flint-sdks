[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmCustomerVerificationRequestInput

The request body for: Confirm a customer email verification.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | The six-digit code Flint sent to the customer's email. minLength: `1`. pattern: `^[0-9]{6}$`. |

