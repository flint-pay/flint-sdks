[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook078273f39700Payload

The `environment_grant.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook078273f39700Payload.md#incomingwebhook078273f39700payloaddata). |
| `event_type` | Required | string | Values: `"environment_grant.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook078273f39700Payload.md#incomingwebhook078273f39700payloadsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook078273f39700Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PartnerEnvironmentGrant](../models/PartnerEnvironmentGrant.md#partnerenvironmentgrant) | A partner application's authorization to access an environment. `object`: [field definitions](../models/IncomingWebhook078273f39700Payload.md#incomingwebhook078273f39700payloaddataobject). |

### IncomingWebhook078273f39700Payload.data.object

A partner application's authorization to access an environment.

Field definitions: [shared fields](PartnerEnvironmentGrant.md#partnerenvironmentgrant).

### IncomingWebhook078273f39700Payload.data.object.granted_permissions[]

Field definitions: [CreatePartnerAppRequest.permission_manifest[]](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest).

### IncomingWebhook078273f39700Payload.source

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string | Values: `"partner_app"`. |

### IncomingWebhook078273f39700Payload.source variant 1: `type` = `"partner_app"`

oneOf variant 1.

No additional constraints.

