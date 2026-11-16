[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEvent

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [EnvironmentGrantRevokedEventData](../models/EnvironmentGrantRevokedEventData.md#environmentgrantrevokedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [EnvironmentGrantRevokedEventSource](../models/EnvironmentGrantRevokedEventSource.md#environmentgrantrevokedeventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### EnvironmentGrantRevokedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributes). |

### EnvironmentGrantRevokedEvent.data fields 1.object

Field definitions: [EnvironmentGrantCreatedEvent.data fields 1.object](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](EnvironmentGrantRevokedEventDataPreviousAttributes.md#environmentgrantrevokedeventdatapreviousattributes).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id variant 1

anyOf variant 1: Unique identifier for this environment grant, prefixed `egrt_`..

- Value shape: string. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1

anyOf variant 1: The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope..

- Value shape: Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry). The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 2

anyOf variant 2.

- Value shape: null. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes variant 1

anyOf variant 1: The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission..

- Value shape: Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode variant 1

anyOf variant 1: Environment used for this resource or request..

- Value shape: string. Environment used for this resource or request. Values: `"test"`, `"live"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode variant 2

anyOf variant 2.

- Value shape: null. Environment used for this resource or request. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: ID of the install this grant belongs to..

- Value shape: string. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke..

- Value shape: string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessandbox_id).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the grant is in its lifecycle. Only an active grant gives the app access to its environment..

- Value shape: string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput).

