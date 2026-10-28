[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialJWKSURLRequest

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `jwks_url` | Required | [CheckoutGiftCardChallenge](../models/CheckoutGiftCardChallenge.md#checkoutgiftcardchallenge) | A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. `jwks_url`: [field definitions](../models/CreatePartnerAppCredentialJWKSURLRequest.md#createpartnerappcredentialjwksurlrequestjwks_url). |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"jwks_url"`. |

### CreatePartnerAppCredentialJWKSURLRequest.jwks_url

A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential.

Field definitions: [shared fields](PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput).

