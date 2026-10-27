[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentMethodSave

A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_confirmation_required` | Required | boolean | True while status is pending after the buyer confirmed the number by text, when the number alone can't save the card: the customer with the buyer's email existed before this payment, the buyer did not confirm that email in this checkout, and the number isn't already the customer's saved number with an active card saved with it. The buyer confirms the email with an emailed code to finish; the card is then saved with the number, which replaces the customer's saved number. |
| `expires_at` | Optional | string or null | When a pending save stops waiting: 24 hours after the payment succeeded or was approved. Format: `date-time`. |
| `phone_last_digits` | Optional | string | Last two digits of the number the buyer gave, which a code is texted to. Set while status is pending. |
| `saved_with` | Optional | string | Values: `"sms"`, `"email"`. |
| `status` | Required | string | Values: `"pending"`, `"saved"`, `"expired"`. |

