[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBuyerContactRequest

Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: `email`. minLength: `1`. maxLength: `255`. |
| `phone` | Optional | string or null | Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |

