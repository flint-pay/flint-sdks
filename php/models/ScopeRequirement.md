[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ScopeRequirement

The scopes an authorization decision required and whether `all` or `any` of them were needed, returned in error details.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the required scopes are evaluated. all requires every listed scope; any requires at least one listed scope. Values: `"all"`, `"any"`. |
| `scopes` | Required | Array of string | Canonical public scope names evaluated for this authorization decision. |

