[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainArchivedEvent

The `custom_domain.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomDomainArchivedEventData](../models/CustomDomainArchivedEventData.md#customdomainarchivedeventdata) | `data`: [field definitions](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"custom_domain.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomDomainArchivedEventRequest](../models/CustomDomainArchivedEventRequest.md#customdomainarchivedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomDomainArchivedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CustomDomain](../models/CustomDomain.md#customdomain) | A merchant hostname for hosted checkout or customer account pages. `object`: [field definitions](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1object). |

### CustomDomainArchivedEvent.data fields 1.object

A merchant hostname for hosted checkout or customer account pages.

Field definitions: [shared fields](CustomDomain.md#customdomain).

