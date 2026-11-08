[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstall

A merchant's authorization of a partner application.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | `environment_grants[]`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants). |
| `installed_by_user_id` | Optional | string |  |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string | Unique identifier for this partner app install, prefixed `pinst_`. |
| `partner_app_name` | Required | string | The app’s current name. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `revoked_by` | Optional | string | Values: `"merchant"`, `"partner_app"`. |
| `revoked_by_user_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PartnerAppInstall.environment_grants[]

Field definitions: [PartnerAppInstallResponse.data.environment_grants[]](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants).

