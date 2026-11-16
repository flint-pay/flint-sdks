[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallPermissionsUpdatedEvent

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PartnerAppInstallPermissionsUpdatedEventData](../models/PartnerAppInstallPermissionsUpdatedEventData.md#partnerappinstallpermissionsupdatedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerAppInstallPermissionsUpdatedEventSource](../models/PartnerAppInstallPermissionsUpdatedEventSource.md#partnerappinstallpermissionsupdatedeventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributes). |

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.object

Field definitions: [PartnerAppInstallCreatedEvent.data fields 1.object](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PartnerAppInstallPermissionsUpdatedEventDataPreviousAttributes.md#partnerappinstallpermissionsupdatedeventdatapreviousattributes).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1

anyOf variant 1: The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none..

- Value shape: Array of [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant). The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 2

anyOf variant 2.

- Value shape: null. The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1

Field definitions: [PartnerAppInstallResponse.data.environment_grants[]](../models/PartnerAppInstallResponse.md#partnerappinstallresponsedataenvironment_grants).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id variant 1

anyOf variant 1: ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded..

- Value shape: string. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.installed_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id variant 1

anyOf variant 1: The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke..

- Value shape: string. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.merchant_signup_id variant 2

anyOf variant 2.

- Value shape: null. The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: ID of the partner app the merchant installed..

- Value shape: string. ID of the partner app the merchant installed. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. ID of the partner app the merchant installed. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: Unique identifier for this partner app install, prefixed `pinst_`..

- Value shape: string. Unique identifier for this partner app install, prefixed `pinst_`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app install, prefixed `pinst_`. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name variant 1

anyOf variant 1: The app’s current name..

- Value shape: string. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.partner_app_name variant 2

anyOf variant 2.

- Value shape: null. The app’s current name. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by variant 1

anyOf variant 1: Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again..

- Value shape: string. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Values: `"merchant"`, `"partner_app"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by variant 2

anyOf variant 2.

- Value shape: null. Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it..

- Value shape: string. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the install is in its lifecycle..

- Value shape: string. Where the install is in its lifecycle. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the install is in its lifecycle. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`.

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. 

### PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppInstallPermissionsUpdatedEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput).

