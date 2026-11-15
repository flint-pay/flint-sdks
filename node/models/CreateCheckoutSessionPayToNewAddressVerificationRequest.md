[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutSessionPayToNewAddressVerificationRequest

Request a fresh code when pay_to_new_address_requires_verification is true. Send no email, channel, or remembered_buyer_token. The code follows the paying credential's proof, except that a wallet opened by text steps up by email. Returns 409 ACTION_NOT_ALLOWED with reason not_offered when no saved card needs step-up. Confirmation keeps the credential and its proof and refreshes it for 15 minutes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purpose` | Required | string | What the buyer is confirming their email or number for. Values: `"pay_to_new_address"`. |

