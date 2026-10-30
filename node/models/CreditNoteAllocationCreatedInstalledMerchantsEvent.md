[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationCreatedInstalledMerchantsEvent

The `credit_note_allocation.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/CreditNoteAllocationCreatedInstalledMerchantsEvent.md#creditnoteallocationcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"credit_note_allocation.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteAllocationCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. `object`: [field definitions](../models/CreditNoteAllocationCreatedInstalledMerchantsEvent.md#creditnoteallocationcreatedinstalledmerchantseventdataobject). |

### CreditNoteAllocationCreatedInstalledMerchantsEvent.data.object

One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Field definitions: [shared fields](CreditNoteAllocation.md#creditnoteallocation).

### CreditNoteAllocationCreatedInstalledMerchantsEvent.data.object.amount_money

Field definitions: [CreditNoteAllocation.amount_money](../models/CreditNoteAllocation.md#creditnoteallocationamount_money).

### CreditNoteAllocationCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

