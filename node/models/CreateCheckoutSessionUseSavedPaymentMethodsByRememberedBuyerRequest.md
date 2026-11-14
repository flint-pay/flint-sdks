[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest

The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Optional | string | How Flint delivers the code. Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`. |
| `purpose` | Required | string | What the buyer is confirming their email or number for. Values: `"use_saved_payment_methods"`. |
| `remembered_buyer_token` | Required | string | Use this remembered identity instead of email, only with purpose use_saved_payment_methods. It never opens saved cards without a right code. minLength: `47`. maxLength: `47`. pattern: `^rbt_[A-Za-z0-9_-]{43}$`. |

