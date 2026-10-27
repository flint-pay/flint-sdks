[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerApp

An application that merchants can authorize to access their accounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Required | Array of string |  |
| `api_version` | Required | string |  |
| `api_version_changed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `api_version_previous` | Optional | string |  |
| `client_id` | Required | string |  |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `default_requested_permissions` | Required | Array of string |  |
| `name` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `redirect_uris` | Required | Array of string |  |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### PartnerApp.permission_manifest[]

Field definitions: [CreatePartnerAppRequest.permission_manifest[]](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest).

