[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthRevokeRequest

The request body for: Revoke an OAuth token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_assertion` | Optional | string | Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: `1`. maxLength: `8192`. |
| `client_assertion_type` | Optional | string | Required with client_assertion for partner private_key_jwt authentication. Values: `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`. |
| `client_id` | Optional | string | Partner client ID for client_secret_post, or flint-cli for the public CLI client. |
| `client_secret` | Optional | string | Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never sends a secret. |
| `token` | Required | string | Partner or flint-cli access token or refresh token to revoke. |
| `token_type_hint` | Optional | string | Optional token lookup hint. Values: `"refresh_token"`, `"access_token"`. |

