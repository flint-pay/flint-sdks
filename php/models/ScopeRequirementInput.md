[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ScopeRequirementInput

The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the required scopes are evaluated. all requires every listed scope; any requires at least one listed scope. Example: `"all"`. Values: `"all"`, `"any"`. |
| `scopes` | Required | Array of string | Canonical public scope names evaluated for this authorization decision. Example: `["developer.sandboxes.write","accounts.api_keys.write"]`. |

