[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainUpdatedEvent

The `custom_domain.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomDomainUpdatedEventData](../models/CustomDomainUpdatedEventData.md#customdomainupdatedeventdata) | `data`: [field definitions](../models/CustomDomainUpdatedEvent.md#customdomainupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"custom_domain.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomDomainUpdatedEventRequest](../models/CustomDomainUpdatedEventRequest.md#customdomainupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomDomainUpdatedEvent.data fields 1

Field definitions: [shared fields](CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1).

### CustomDomainUpdatedEvent.data fields 1.object

Field definitions: [CustomDomainArchivedEvent.data fields 1.object](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1object).

