[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstall

A merchant's authorization of a partner application.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) |  |
| `installed_by_user_id` | Optional | string |  |
| `merchant_id` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `partner_app_name` | Required | string | The app’s current name. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `revoked_by` | Optional | string | Values: `"merchant"`, `"partner_app"`. |
| `revoked_by_user_id` | Optional | string |  |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

