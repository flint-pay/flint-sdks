[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmCustomerVerificationRequestInput

Request input. Response: [LookupGiftCardRequest](../models/LookupGiftCardRequest.md#lookupgiftcardrequest).

The request body for: Confirm a customer email verification.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. pattern: `^[0-9]{6}$`. |

