[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionSavePaymentMethodVerificationRequest

By email, the default, Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true. By auto, accepted only on a checkout whose order starts a subscription, Flint emails a code only when saving the renewal card would require email verification at payment. Otherwise, or past a recognition limit or when no code can be sent, it returns 409 ACTION_NOT_ALLOWED with reason not_offered. Auto reveals whether the email belongs to an existing customer of this merchant, as the payment refusal does. Requests count against the same limits as saved-details recognition; while a code for this purpose still works, a repeat returns it without sending another email. Confirming opens the same access as an explicit email request.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | How Flint delivers the code. Default: `"email"`. Values: `"email"`, `"auto"`. |
| `email` | Required | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `purpose` | Required | string | What the buyer is confirming their email or number for. Values: `"save_payment_method"`. |

