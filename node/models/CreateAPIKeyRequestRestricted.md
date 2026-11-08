[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyRequestRestricted

The `restricted` variant of `CreateAPIKeyRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"restricted"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `partner_app_install_id` | Optional | string | Links this key to a connected app's install. Revoking the install or its grant for this key's environment revokes the key. The install must be active and authorized for that environment. Set only at creation; it never changes. Omit for an unlinked key. Keys created by a linked key inherit its link. Each install can have up to 25 linked keys that have not been revoked per environment. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |

