[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstall

A merchant's authorization of a partner application.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. `environment_grants[]`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants). |
| `installed_by_user_id` | Optional | string | ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `merchant_signup_id` | Optional | string | The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. |
| `partner_app_id` | Required | string | ID of the partner app the merchant installed. |
| `partner_app_install_id` | Required | string | Unique identifier for this partner app install, prefixed `pinst_`. |
| `partner_app_name` | Required | string | The app’s current name. |
| `platform_contact` | Optional | [PartnerAppPlatformContact](../models/PartnerAppPlatformContact.md#partnerappplatformcontact) | The platform's current support contact, read live from platform_profile. Absent when the app has no platform profile, and in webhook event payloads. The platform's support contact shown to merchants. `platform_contact`: [field definitions](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataplatform_contact). |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `revoked_by` | Optional | string | Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`. |
| `revoked_by_user_id` | Optional | string | ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. |
| `status` | Required | string | Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PartnerAppInstall.environment_grants[]

Field definitions: [PartnerAppInstallResponse.data.environment_grants[]](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants).

### PartnerAppInstall.platform_contact

Field definitions: [PartnerAppInstallResponse.data.platform_contact](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataplatform_contact).

