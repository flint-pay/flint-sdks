[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerTokenErrorResponseInput

The response for: Exchange an OAuth token; List authorized CLI contexts; Review CLI session consent; Revoke an OAuth token; Start CLI browser login.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `error` | Required | string | The OAuth error code, one of invalid_request, invalid_client, invalid_grant, invalid_scope, unauthorized_client, unsupported_grant_type, authorization_pending, slow_down, access_denied, expired_token, invalid_context, context_access_denied, temporarily_unavailable, or server_error. The operation's `x-flint-error-codes` lists the ones it can return. |
| `error_description` | Optional | string | A short explanation of the error for developers. The wording can change, so branch on `error` and not on this text. |

