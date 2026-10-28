[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialPublicKeyInput

A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `jwk` | Required | object |  |
| `jwk_thumbprint` | Required | string | RFC 7638 SHA-256 JWK thumbprint. |

