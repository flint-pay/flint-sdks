[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIKeyWithSecret

An API key including its `secret_key`, returned by the calls that create or issue a key.

A credential used to authenticate API requests.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string |  |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The API key or user that created this key. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `key_prefix` | Required | string |  |
| `last_used_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `merchant_id` | Optional | string |  |
| `name` | Required | string | maxLength: `100`. |
| `revoked_at` | Optional | string | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. |
| `sandbox_id` | Optional | string |  |
| `scopes` | Required | Array of string | Items values: [95 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Required | string | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `secret_key` | Required | string | One-time secret returned only when the API key is created. |

