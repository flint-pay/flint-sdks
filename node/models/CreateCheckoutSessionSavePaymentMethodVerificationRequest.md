[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionSavePaymentMethodVerificationRequest

The buyer asked to save the card they are paying with. Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Default: `"email"`. Values: `"email"`. |
| `email` | Required | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. |
| `purpose` | Required | string | Values: `"save_payment_method"`. |

