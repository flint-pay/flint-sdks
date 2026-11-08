[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallRevokedEvent

The `partner_app_install.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PartnerAppInstallRevokedEventData](../models/PartnerAppInstallRevokedEventData.md#partnerappinstallrevokedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppInstallRevokedEvent.md#partnerappinstallrevokedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app_install.revoked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerAppInstallRevokedEventSource](../models/PartnerAppInstallRevokedEventSource.md#partnerappinstallrevokedeventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/PartnerAppInstallRevokedEvent.md#partnerappinstallrevokedeventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PartnerAppInstallRevokedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1).

### PartnerAppInstallRevokedEvent.data fields 1.object

Field definitions: [PartnerAppInstallCreatedEvent.data fields 1.object](../models/PartnerAppInstallCreatedEvent.md#partnerappinstallcreatedeventdata-fields-1object).

### PartnerAppInstallRevokedEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput).

