[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSandboxRequest

The request body for: Create sandbox.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Conditional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Conditional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

### CreateSandboxRequest variant 1: `access` = `"full"`, `issue_test_key` = `true`

oneOf Test key; oneOf Full.

- Condition: not (present(`scopes`)).
- Required: `access`, `issue_test_key`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequest variant 2: `access` = `"read_only"`, `issue_test_key` = `true`

oneOf Test key; oneOf Read only.

- Condition: not (present(`scopes`)).
- Required: `access`, `issue_test_key`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequest variant 3: `access` = `"restricted"`, `issue_test_key` = `true`

oneOf Test key; oneOf Restricted.

- Required: `access`, `issue_test_key`, `scopes`.
- Constraints for `access`: Values: `"restricted"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequest variant 4: `issue_test_key` = `false`

oneOf No test key.

- Condition: not (at least one(present(`access`); present(`scopes`); present(`test_key_name`))).
- Optional: `access`, `issue_test_key`, `scopes`.
- Constraints for `issue_test_key`: Values: `false`.

