[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSessionAPIKeyInput

The API key issued for a demo session, with its `secret_key` and the scopes it grants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `scopes` | Required | Array of string | Items values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `secret_key` | Required | string |  |

