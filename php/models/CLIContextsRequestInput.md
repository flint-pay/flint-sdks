[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIContextsRequestInput

The request body for: List authorized CLI contexts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The public client ID, always `flint-cli`. The client has no secret: a client_secret field or an Authorization header returns invalid_client. Example: `"flint-cli"`. Values: `"flint-cli"`. |
| `refresh_token` | Required | string | The session's current refresh token. This request reads the session and doesn't rotate the token. An unknown, expired, or revoked token returns invalid_grant. |

