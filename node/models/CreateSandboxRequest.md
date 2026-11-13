[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSandboxRequest

The request body for: Create sandbox.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Conditional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Conditional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](APIKey.md#apikey-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
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

- Condition: not (at least one(present(`access`); present(`scopes`); present(`test_key_name`); present(`test_key_expires_at`))).
- Optional: `access`, `issue_test_key`, `scopes`.
- Constraints for `issue_test_key`: Values: `false`.

