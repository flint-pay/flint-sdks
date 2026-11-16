[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallPermissionsUpdatedEventInput

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PartnerAppInstallPermissionsUpdatedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppInstallCreatedEventInput.md#partnerappinstallcreatedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributes). |

### PartnerAppInstallPermissionsUpdatedEventInput.data.object

Field definitions: [PartnerAppInstallCreatedEventInput.data.object](../models/PartnerAppInstallCreatedEventInput.md#partnerappinstallcreatedeventinputdataobject).

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrantPreviousAttributesInput](../models/PartnerEnvironmentGrantPreviousAttributesInput.md#partnerenvironmentgrantpreviousattributesinput) or null | The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. `environment_grants`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesenvironment_grants). |
| `installed_by_user_id` | Optional | string or null | ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. `installed_by_user_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesinstalled_by_user_id). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `merchant_signup_id` | Optional | string or null | The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. `merchant_signup_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesmerchant_signup_id). |
| `partner_app_id` | Optional | string or null | ID of the partner app the merchant installed. `partner_app_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | Unique identifier for this partner app install, prefixed `pinst_`. `partner_app_install_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributespartner_app_install_id). |
| `partner_app_name` | Optional | string or null | The app’s current name. `partner_app_name`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributespartner_app_name). |
| `revoked_at` | Optional | string or null | RFC3339 timestamp. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `revoked_by` | Optional | string or null | Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`. `revoked_by`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesrevoked_by). |
| `revoked_by_user_id` | Optional | string or null | ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. `revoked_by_user_id`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesrevoked_by_user_id). |
| `status` | Optional | string or null | Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`. `status`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEventInput.md#partnerappinstallpermissionsupdatedeventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.environment_grants

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.environment_grants variant 1

anyOf variant 1: The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none..

- Value shape: Array of [PartnerEnvironmentGrantPreviousAttributesInput](../models/PartnerEnvironmentGrantPreviousAttributesInput.md#partnerenvironmentgrantpreviousattributesinput). The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.environment_grants variant 2

anyOf variant 2.

- Value shape: null. The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.installed_by_user_id

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.installed_by_user_id variant 1

anyOf variant 1: ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded..

- Value shape: string. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.installed_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.merchant_signup_id

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.merchant_signup_id variant 1

anyOf variant 1: The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke..

- Value shape: string. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. Example: `"msu_01KEZF7C00SRGYRMBPKRKW8V9J"`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.merchant_signup_id variant 2

anyOf variant 2.

- Value shape: null. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_id

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_id variant 1

anyOf variant 1: ID of the partner app the merchant installed..

- Value shape: string. ID of the partner app the merchant installed. ID of the partner app the merchant installed. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. ID of the partner app the merchant installed. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_install_id

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: Unique identifier for this partner app install, prefixed `pinst_`..

- Value shape: string. Unique identifier for this partner app install, prefixed `pinst_`. Unique identifier for this partner app install, prefixed `pinst_`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app install, prefixed `pinst_`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_name

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_name variant 1

anyOf variant 1: The app’s current name..

- Value shape: string. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.partner_app_name variant 2

anyOf variant 2.

- Value shape: null. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by variant 1

anyOf variant 1: Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again..

- Value shape: string. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`.

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by variant 2

anyOf variant 2.

- Value shape: null. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by_user_id

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it..

- Value shape: string. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.status

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the install is in its lifecycle..

- Value shape: string. Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the install is in its lifecycle. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.supported_actions

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`.

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. 

### PartnerAppInstallPermissionsUpdatedEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEventInput.source

Field definitions: [EnvironmentGrantCreatedEventInput.source](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource).

