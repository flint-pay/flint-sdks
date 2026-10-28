[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyRequestInput

The request body for: Create an API key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |

### CreateAPIKeyRequestInput variant 1: `access` = `"full"`

oneOf variant 1: The `full` variant of `CreateAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.

### CreateAPIKeyRequestInput variant 2: `access` = `"read_only"`

oneOf variant 2: The `read_only` variant of `CreateAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.

### CreateAPIKeyRequestInput variant 3: `access` = `"restricted"`

oneOf variant 3: The `restricted` variant of `CreateAPIKeyRequest`..

- Required: `scopes`.
- Constraints for `access`: Values: `"restricted"`.

