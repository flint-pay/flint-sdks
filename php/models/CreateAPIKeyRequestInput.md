[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyRequestInput

The request body for: Create an API key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `partner_app_install_id` | Optional | string | Links this key to a connected app's install. Revoking the install or its grant for this key's environment revokes the key. The install must be active and authorized for that environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created by a linked key inherit its link. Each install can have up to 25 linked keys that have not been revoked per environment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `sandbox_id` | Optional | string | Public ID of the sandbox the new test key is bound to. A live credential or a user session sends it to create a test key in that sandbox, and omits it for a live key. A sandbox-bound credential, such as a test key, may name only its own sandbox and gets a test key there either way; any other sandbox returns 404. A Dashboard or onboarding session may name any of the merchant's active sandboxes, and an onboarding session must send it: its first key goes to default_sandbox_id. Storage generation IDs are never accepted. minLength: `1`. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |

### CreateAPIKeyRequestInput variant 1: `access` = `"full"`

oneOf with access: "full": The `full` variant of `CreateAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.

### CreateAPIKeyRequestInput variant 2: `access` = `"read_only"`

oneOf with access: "read_only": The `read_only` variant of `CreateAPIKeyRequest`..

- Condition: not (present(`scopes`)).
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.

### CreateAPIKeyRequestInput variant 3: `access` = `"restricted"`

oneOf with access: "restricted": The `restricted` variant of `CreateAPIKeyRequest`..

- Required: `scopes`.
- Constraints for `access`: Values: `"restricted"`.

