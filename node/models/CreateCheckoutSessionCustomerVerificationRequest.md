[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionCustomerVerificationRequest

A checkout verification request selected by purpose.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Conditional | string |  |
| `email` | Conditional | string | Email the buyer typed, with no surrounding spaces. Customers are matched by email without regard to case. Format: `email`. minLength: `1`. maxLength: `255`. |
| `purpose` | Required | string |  |

### CreateCheckoutSessionCustomerVerificationRequest variant 1: `channel` = `"email"`, `purpose` = `"gift_card_purchase"`

oneOf variant 1: The buyer confirms their email before funding a gift card purchase. Flint emails a code without saving a payment method..

- Required: `email`.
- Optional: `channel`.
- Constraints for `channel`: Default: `"email"`. Values: `"email"`.
- Constraints for `purpose`: Values: `"gift_card_purchase"`.

### CreateCheckoutSessionCustomerVerificationRequest variant 2: `channel` = `"email"`, `purpose` = `"save_payment_method"`

oneOf variant 2: The buyer asked to save the card they are paying with. Flint emails a code to any valid address while the session is open and save_payment_method_requires_verification is true..

- Required: `email`.
- Optional: `channel`.
- Constraints for `channel`: Default: `"email"`. Values: `"email"`.
- Constraints for `purpose`: Values: `"save_payment_method"`.

### CreateCheckoutSessionCustomerVerificationRequest variant 3: `purpose` = `"use_saved_payment_methods"`

oneOf variant 3: The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the number saved with the email's details, or emails a code when they have cards saved by email and no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason not_offered. The response's channel says which. By email, Flint sends a code only when the email has saved details and an active card saved by email or with a number; the response is the same either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also reveals the number's last two digits. Always offer email alongside sms. A texted code opens only cards saved with that number; an emailed code opens only cards saved by email..

- Required: `email`.
- Optional: `channel`.
- Constraints for `channel`: Default: `"auto"`. Values: `"email"`, `"sms"`, `"auto"`.
- Constraints for `purpose`: Values: `"use_saved_payment_methods"`.

### CreateCheckoutSessionCustomerVerificationRequest variant 4: `purpose` = `"confirm_saved_payment_method"`

oneOf variant 4: After a payment that sent save_payment_method_phone, the buyer confirms the card it saved. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email..

- Required: `channel`.
- Undeclared: `email`.
- Constraints for `channel`: Values: `"email"`, `"sms"`.
- Constraints for `purpose`: Values: `"confirm_saved_payment_method"`.

