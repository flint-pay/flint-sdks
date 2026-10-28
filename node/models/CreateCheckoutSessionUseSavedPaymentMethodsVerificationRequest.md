[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`. |
| `email` | Required | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. |
| `purpose` | Required | string | Values: `"use_saved_payment_methods"`. |

