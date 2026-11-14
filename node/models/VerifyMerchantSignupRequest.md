[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VerifyMerchantSignupRequest

The request body for: Verify a merchant signup.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `terms_acceptance` | Required | [MerchantSignupTermsAcceptanceRequest](../models/MerchantSignupTermsAcceptanceRequest.md#merchantsignuptermsacceptancerequest) | The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to show it and to report real values. |
| `verification_code` | Required | string | The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the hyphen, in either case. Request logs redact it. minLength: `8`. maxLength: `9`. |

