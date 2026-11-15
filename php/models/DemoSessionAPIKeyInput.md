[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSessionAPIKeyInput

The API key issued for a demo session, with its `secret_key` and the scopes it grants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `scopes` | Required | Array of string | The scopes the key holds: read products, read and write customers, and read and write orders. The same set for every demo session. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `secret_key` | Required | string | The test secret key, sent as a Bearer token. It expires with the session, and a demo session key can call only a small set of customer, product, and order routes even within its scopes. |

