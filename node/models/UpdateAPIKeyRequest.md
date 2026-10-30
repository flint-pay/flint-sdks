[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateAPIKeyRequest

The request body for: Update an API key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Conditional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |

### UpdateAPIKeyRequest variant 1: `access` = `"full"`

oneOf Full.

- Condition: not (present(`scopes`)).
- Required: `access`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.

### UpdateAPIKeyRequest variant 2: `access` = `"read_only"`

oneOf Read only.

- Condition: not (present(`scopes`)).
- Required: `access`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.

### UpdateAPIKeyRequest variant 3: `access` = `"restricted"`

oneOf Restricted.

- Required: `access`, `scopes`.
- Constraints for `access`: Values: `"restricted"`.

### UpdateAPIKeyRequest variant 4

oneOf No access change.

- Condition: not (at least one(present(`access`); present(`scopes`))).
- Optional: `access`, `scopes`.

