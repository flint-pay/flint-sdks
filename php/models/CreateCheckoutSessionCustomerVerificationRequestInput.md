[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionCustomerVerificationRequestInput

A checkout verification request selected by purpose.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Conditional | string | How Flint delivers the code. |
| `email` | Conditional | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. Example: `"buyer@example.com"`. |
| `purpose` | Required | string | What the buyer is confirming their email or number for. |
| `remembered_buyer_token` | Conditional | string | Use this remembered identity instead of email, only with purpose use_saved_payment_methods. It never opens saved cards without a right code. minLength: `47`. maxLength: `47`. pattern: `^rbt_[A-Za-z0-9_-]{43}$`. |

### CreateCheckoutSessionCustomerVerificationRequestInput variant 1: `channel` = `"email"`, `purpose` = `"gift_card_purchase"`

oneOf with purpose: "gift_card_purchase": The buyer confirms their email before funding a gift card purchase. Flint emails a code without saving a payment method..

- Required: `email`.
- Optional: `channel`.
- Undeclared: `remembered_buyer_token`.
- Constraints for `channel`: Default: `"email"`. Values: `"email"`.
- Constraints for `purpose`: Values: `"gift_card_purchase"`.

### CreateCheckoutSessionCustomerVerificationRequestInput variant 2: `purpose` = `"save_payment_method"`

oneOf with purpose: "save_payment_method": By email, the default, Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true. By auto, accepted only on a checkout whose order starts a subscription, Flint emails a code only when saving the renewal card would require email verification at payment. Otherwise, or past a recognition limit or when no code can be sent, it returns 409 ACTION_NOT_ALLOWED with reason not_offered. Auto reveals whether the email belongs to an existing customer of this merchant, as the payment refusal does. Requests count against the same limits as saved-details recognition; while a code for this purpose still works, a repeat returns it without sending another email. Confirming opens the same access as an explicit email request..

- Required: `email`.
- Optional: `channel`.
- Undeclared: `remembered_buyer_token`.
- Constraints for `channel`: Default: `"email"`. Values: `"email"`, `"auto"`.
- Constraints for `purpose`: Values: `"save_payment_method"`.

### CreateCheckoutSessionCustomerVerificationRequestInput variant 3: `purpose` = `"use_saved_payment_methods"`

oneOf with purpose: "use_saved_payment_methods": The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email. Send exactly one of email or remembered_buyer_token. A token request always uses recognition's caps and masks the email, and returns not_offered when nothing is sent. With explicit email, the token has the same send eligibility and email caps as a typed email, forces a resend, and also uses recognition's network caps. With auto it keeps recognition's routing and reuse.; oneOf CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest: The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email..

- Required: `email`.
- Optional: `channel`, `remembered_buyer_token`.
- Constraints for `channel`: Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`.
- Constraints for `purpose`: Values: `"use_saved_payment_methods"`.

### CreateCheckoutSessionCustomerVerificationRequestInput variant 4: `purpose` = `"use_saved_payment_methods"`

oneOf with purpose: "use_saved_payment_methods": The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email. Send exactly one of email or remembered_buyer_token. A token request always uses recognition's caps and masks the email, and returns not_offered when nothing is sent. With explicit email, the token has the same send eligibility and email caps as a typed email, forces a resend, and also uses recognition's network caps. With auto it keeps recognition's routing and reuse.; oneOf CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest: The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email..

- Required: `remembered_buyer_token`.
- Optional: `channel`, `email`.
- Constraints for `channel`: Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`.
- Constraints for `purpose`: Values: `"use_saved_payment_methods"`.

### CreateCheckoutSessionCustomerVerificationRequestInput variant 5: `purpose` = `"pay_to_new_address"`

oneOf with purpose: "pay_to_new_address": Request a fresh code when pay_to_new_address_requires_verification is true. Send no email, channel, or remembered_buyer_token. The code follows the paying credential's proof, except that a wallet opened by text steps up by email. Returns 409 ACTION_NOT_ALLOWED with reason not_offered when no saved card needs step-up. Confirmation keeps the credential and its proof and refreshes it for 15 minutes..

- Undeclared: `channel`, `email`, `remembered_buyer_token`.
- Constraints for `purpose`: Values: `"pay_to_new_address"`.

### CreateCheckoutSessionCustomerVerificationRequestInput variant 6: `purpose` = `"confirm_saved_payment_method"`

oneOf with purpose: "confirm_saved_payment_method": After a payment that saved a card pending, the buyer confirms it. Without a number, only channel email can finish the save. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email..

- Required: `channel`.
- Undeclared: `email`, `remembered_buyer_token`.
- Constraints for `channel`: Values: `"email"`, `"sms"`.
- Constraints for `purpose`: Values: `"confirm_saved_payment_method"`.

