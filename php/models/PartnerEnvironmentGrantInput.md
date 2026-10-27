[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerEnvironmentGrantInput

A partner application's authorization to access an environment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `environment_grant_id` | Required | string |  |
| `granted_permissions` | Required | Array of [PartnerAppPermissionManifestEntryInput](../models/PartnerAppPermissionManifestEntryInput.md#partnerapppermissionmanifestentryinput) | The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the token scope. |
| `granted_scopes` | Required | Array of string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `revoked_by_user_id` | Optional | string |  |
| `sandbox_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

