[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionCustomerVerificationInput

A request for a checkout verification code. A request with channel email reads the same whether or not Flint sent a code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | How the code reached the buyer: email or sms. Values: `"email"`, `"sms"`. |
| `checkout_session_customer_verification_id` | Required | string | ID to confirm the code with. Example: `"cscv_01KEZF7C00XW14W2FCVD5PH3Z9"`. |
| `checkout_session_id` | Required | string | The checkout session the code belongs to. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | When the code was requested. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `email` | Optional | string | The address the code is for, lowercased: the email the buyer typed, or for an emailed confirm_saved_payment_method code, the customer's email masked to its first character and domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code. |
| `expires_at` | Required | string | When the code stops working: 15 minutes after the request for an emailed code, and 10 minutes after the text provider first sent a texted code, which a new request within them texts again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `phone_last_digits` | Optional | string | Last two digits of the number a texted code went to, so the buyer knows which phone to check. Set only for channel sms. |
| `purpose` | Required | string | Why the buyer asked for the code, as sent in the request. Values: `"gift_card_purchase"`, `"save_payment_method"`, `"use_saved_payment_methods"`, `"confirm_saved_payment_method"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions available on this code request. Contains confirm before expires_at; empty once the code expires. A wrong code is refused without revealing whether a code was sent. Items values: `"confirm"`. |

