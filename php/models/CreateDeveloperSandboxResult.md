[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeveloperSandboxResult

The created sandbox is the primary resource, with the API key and one-time secret_key when issue_test_key is true.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key` | Optional | [APIKey](../models/APIKey.md#apikey) | The newly issued test API key. Present exactly when issue_test_key is true. A credential used to authenticate API requests. |
| `sandbox` | Required | [Sandbox](../models/Sandbox.md#sandbox) | An isolated environment for testing an integration. |
| `secret_key` | Optional | string | The one-time secret for api_key. Present exactly when issue_test_key is true. |

