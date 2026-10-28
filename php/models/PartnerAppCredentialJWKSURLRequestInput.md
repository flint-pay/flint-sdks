[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialJWKSURLRequestInput

A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `url` | Required | string | HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't count. minLength: `1`. maxLength: `2048`. |

