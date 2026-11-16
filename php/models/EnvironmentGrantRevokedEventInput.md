[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEventInput

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### EnvironmentGrantRevokedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdataobject). |
| `previous_attributes` | Optional | object and [PartnerEnvironmentGrantPreviousAttributesInput](../models/PartnerEnvironmentGrantPreviousAttributesInput.md#partnerenvironmentgrantpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/EnvironmentGrantRevokedEventInput.md#environmentgrantrevokedeventinputdataprevious_attributes). |

### EnvironmentGrantRevokedEventInput.data.object

Field definitions: [EnvironmentGrantCreatedEventInput.data.object](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputdataobject).

### EnvironmentGrantRevokedEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PartnerEnvironmentGrantPreviousAttributesInput.md#partnerenvironmentgrantpreviousattributesinput).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id variant 1

anyOf variant 1: Unique identifier for this environment grant, prefixed `egrt_`..

- Value shape: string. Unique identifier for this environment grant, prefixed `egrt_`. Unique identifier for this environment grant, prefixed `egrt_`. Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.environment_grant_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions variant 1

anyOf variant 1: The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope..

- Value shape: Array of [PartnerAppPermissionManifestEntryPreviousAttributesInput](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinput). The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_permissions variant 2

anyOf variant 2.

- Value shape: null. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes variant 1

anyOf variant 1: The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission..

- Value shape: Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.granted_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode variant 1

anyOf variant 1: Environment used for this resource or request..

- Value shape: string. Environment used for this resource or request. Values: `"test"`, `"live"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.mode variant 2

anyOf variant 2.

- Value shape: null. Environment used for this resource or request. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: ID of the install this grant belongs to..

- Value shape: string. ID of the install this grant belongs to. ID of the install this grant belongs to. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke..

- Value shape: string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.sandbox_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributessandbox_id).

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the grant is in its lifecycle. Only an active grant gives the app access to its environment..

- Value shape: string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`.

### EnvironmentGrantRevokedEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. 

### EnvironmentGrantRevokedEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### EnvironmentGrantRevokedEventInput.source

Field definitions: [EnvironmentGrantCreatedEventInput.source](../models/EnvironmentGrantCreatedEventInput.md#environmentgrantcreatedeventinputsource).

