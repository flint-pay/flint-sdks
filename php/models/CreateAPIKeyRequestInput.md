[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyRequestInput

The request body for: Create an API key.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scope_preset` | Conditional | string | A predefined set of scopes to grant instead of listing them. Flint resolves it when it creates the key and stores the resulting scopes, so scopes added to Flint later are not added to the key. Send either scopes or scope_preset. Values: `"full_access"`, `"read_only"`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Send either scopes or scope_preset. Items values: [95 declared values](APIKeyInput.md#apikeyinput-scopes--values). |

### CreateAPIKeyRequestInput variant 1

oneOf variant 1.

- Condition: not (at least one(present(`scope_preset`))).
- Required: `scopes`.
- Optional: `scope_preset`.

### CreateAPIKeyRequestInput variant 2

oneOf variant 2.

- Condition: not (at least one(present(`scopes`))).
- Required: `scope_preset`.
- Optional: `scopes`.

