[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput

After a payment that sent save_payment_method_phone, the buyer confirms the card it saved. Channel sms texts the number given with the payment; channel email emails the customer's email only when it matches the payment's email, otherwise returning 409. The response masks the email. Send no email. Available on the paid session, or an open session whose payment is approved for later capture, while payment_method_save.status is pending. A texted code saves the card with the number when the payment created the customer, the buyer confirmed their email in this checkout, or the number already opens their saved details; otherwise payment_method_save.email_confirmation_required becomes true and an emailed code finishes the save. An emailed code alone saves the card by email.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | Values: `"email"`, `"sms"`. |
| `purpose` | Required | string | Values: `"confirm_saved_payment_method"`. |

