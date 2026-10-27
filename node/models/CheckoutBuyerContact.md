[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBuyerContact

Buyer contact supplied with payment or saved during checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string or null | Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Format: `email`. maxLength: `255`. |
| `is_email_cleared` | Required | boolean | True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. |
| `is_phone_cleared` | Required | boolean | True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. |
| `phone` | Required | string or null | Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `updated_at` | Optional | string | When the buyer last changed the saved checkout contact. Omitted on order buyer contact. Format: `date-time`. |

