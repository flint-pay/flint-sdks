[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueSandboxAPIKeyRequest

The request body for: Issue sandbox test key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |

### IssueSandboxAPIKeyRequest variant 1: `access` = `"full"`

oneOf variant 1: The `full` variant of `IssueSandboxAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.

### IssueSandboxAPIKeyRequest variant 2: `access` = `"read_only"`

oneOf variant 2: The `read_only` variant of `IssueSandboxAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.

### IssueSandboxAPIKeyRequest variant 3: `access` = `"restricted"`

oneOf variant 3: The `restricted` variant of `IssueSandboxAPIKeyRequest`..

- Required: `scopes`.
- Constraints for `access`: Values: `"restricted"`.

