[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email. Send exactly one of email or remembered_buyer_token. A token request always uses recognition's caps and masks the email, and returns not_offered when nothing is sent. With explicit email, the token has the same send eligibility and email caps as a typed email, forces a resend, and also uses recognition's network caps. With auto it keeps recognition's routing and reuse.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | How Flint delivers the code. Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`. |
| `email` | Conditional | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `purpose` | Required | string | What the buyer is confirming their email or number for. Values: `"use_saved_payment_methods"`. |
| `remembered_buyer_token` | Conditional | string | Use this remembered identity instead of email, only with purpose use_saved_payment_methods. It never opens saved cards without a right code. minLength: `47`. maxLength: `47`. pattern: `^rbt_[A-Za-z0-9_-]{43}$`. |

### CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest variant 1: `purpose` = `"use_saved_payment_methods"`

oneOf CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest: The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email..

- Required: `email`.
- Optional: `remembered_buyer_token`.

### CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest variant 2: `purpose` = `"use_saved_payment_methods"`

oneOf CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest: The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email..

- Required: `remembered_buyer_token`.
- Optional: `email`.

