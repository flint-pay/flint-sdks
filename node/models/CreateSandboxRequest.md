[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSandboxRequest

The request body for: Create sandbox.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `issue_test_key` | Conditional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scope_preset` | Conditional | string | A predefined set of scopes to grant instead of listing them. Flint resolves it when it creates the key and stores the resulting scopes, so scopes added to Flint later are not added to the key. Send either scopes or scope_preset. Values: `"full_access"`, `"read_only"`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Send either scopes or scope_preset. Items values: [95 declared values](APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

### CreateSandboxRequest variant 1: `issue_test_key` = `true`

oneOf variant 1; oneOf variant 1.

- Condition: not (at least one(present(`scope_preset`))).
- Required: `issue_test_key`, `scopes`.
- Optional: `scope_preset`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequest variant 2: `issue_test_key` = `true`

oneOf variant 1; oneOf variant 2.

- Condition: not (at least one(present(`scopes`))).
- Required: `issue_test_key`, `scope_preset`.
- Optional: `scopes`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequest variant 3: `issue_test_key` = `false`

oneOf variant 2.

- Condition: not (at least one(present(`scopes`); present(`scope_preset`); present(`test_key_name`))).
- Optional: `issue_test_key`, `scope_preset`, `scopes`.
- Constraints for `issue_test_key`: Values: `false`.

