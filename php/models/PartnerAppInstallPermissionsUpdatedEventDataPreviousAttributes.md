[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) or null | The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. `environment_grants`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants). |
| `installed_by_user_id` | Optional | string or null | ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. `installed_by_user_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesinstalled_by_user_id). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `merchant_signup_id` | Optional | string or null | The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. `merchant_signup_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesmerchant_signup_id). |
| `partner_app_id` | Optional | string or null | ID of the partner app the merchant installed. `partner_app_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | Unique identifier for this partner app install, prefixed `pinst_`. `partner_app_install_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_install_id). |
| `partner_app_name` | Optional | string or null | The app’s current name. `partner_app_name`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_name). |
| `revoked_at` | Optional | string or null | RFC3339 timestamp. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `revoked_by` | Optional | string or null | Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`. `revoked_by`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesrevoked_by). |
| `revoked_by_user_id` | Optional | string or null | ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. `revoked_by_user_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesrevoked_by_user_id). |
| `status` | Optional | string or null | Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`. `status`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.environment_grants

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.installed_by_user_id

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesinstalled_by_user_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.merchant_signup_id

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesmerchant_signup_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.partner_app_id

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.partner_app_install_id

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_install_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.partner_app_name

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributespartner_app_name).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.revoked_by

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesrevoked_by).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.revoked_by_user_id

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesrevoked_by_user_id).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.status

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesstatus).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.supported_actions

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributessupported_actions).

### PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

