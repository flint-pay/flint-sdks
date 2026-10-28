[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppWithSecret

A partner app returned with its client secret, as in the response to creating a partner app.

An application that merchants can authorize to access their accounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Required | Array of string |  |
| `api_version` | Required | string |  |
| `api_version_changed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `api_version_previous` | Optional | string |  |
| `client_id` | Required | string |  |
| `client_secret_enabled` | Required | boolean |  |
| `client_secret_last_used_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `default_requested_permissions` | Required | Array of string |  |
| `name` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) |  |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `redirect_uris` | Required | Array of string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `client_secret` | Required | string or null | One-time client secret returned when enabled at creation. Null when client_secret_enabled is false. |

