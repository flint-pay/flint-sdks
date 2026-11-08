[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeveloperSandboxResult

The created sandbox is the primary resource, with the API key and one-time secret_key when issue_test_key is true.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key` | Optional | [APIKey](../models/APIKey.md#apikey) | The newly issued test API key. Present exactly when issue_test_key is true. A credential used to authenticate API requests. `api_key`: [field definitions](../models/CreateDeveloperSandboxResult.md#createdevelopersandboxresultapi_key). |
| `sandbox` | Required | [Sandbox](../models/Sandbox.md#sandbox) | An isolated environment for testing an integration. `sandbox`: [field definitions](../models/SandboxListResponse.md#sandboxlistresponsedata). |
| `secret_key` | Optional | string | The one-time secret for api_key. Present exactly when issue_test_key is true. |

### CreateDeveloperSandboxResult.api_key

The newly issued test API key. Present exactly when issue_test_key is true. A credential used to authenticate API requests.

Field definitions: [shared fields](APIKeyResponse.md#apikeyresponsedata).

### CreateDeveloperSandboxResult.api_key.created_by

Field definitions: [CreateAPIKeyResponse.data.created_by](../models/CreateAPIKeyResponse.md#createapikeyresponsedatacreated_by).

### CreateDeveloperSandboxResult.sandbox

Field definitions: [SandboxListResponse.data[]](../models/SandboxListResponse.md#sandboxlistresponsedata).

