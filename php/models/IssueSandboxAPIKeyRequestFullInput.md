[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueSandboxAPIKeyRequestFullInput

The `full` variant of `IssueSandboxAPIKeyRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [92 declared values](CreateSandboxRequestInput.md#createsandboxrequestinput-scopes--values). |

