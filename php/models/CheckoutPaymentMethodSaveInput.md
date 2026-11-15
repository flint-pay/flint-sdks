[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentMethodSaveInput

A card the buyer saved with this checkout's payment that waits for a code. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_confirmation_required` | Required | boolean | True from the moment status is pending when an emailed code is what finishes the save: the buyer gave no number, or the number alone can't save the card. An emailed code alone saves the card by email. If the buyer already confirmed the number by text, the emailed code saves the card with that number. |
| `expires_at` | Optional | string or null | When a pending save stops waiting: 24 hours after the payment succeeded or was approved. `null` when the save is no longer pending. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `phone_last_digits` | Optional | string | Last two digits of the number the buyer gave, which a code is texted to. Set while status is pending and the buyer gave a number. |
| `saved_with` | Optional | string | How the buyer confirmed the card: with a code texted to their phone or emailed to them. Values: `"sms"`, `"email"`. |
| `status` | Required | string | Whether the card is saved. Until `saved`, the card can't be used. Values: `"pending"`, `"saved"`, `"expired"`. |

