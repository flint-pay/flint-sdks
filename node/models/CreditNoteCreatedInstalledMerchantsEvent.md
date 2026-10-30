[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCreatedInstalledMerchantsEvent

The `credit_note.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/CreditNoteCreatedInstalledMerchantsEvent.md#creditnotecreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"credit_note.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CreditNoteCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CreditNote](../models/CreditNote.md#creditnote) | A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected. `object`: [field definitions](../models/CreditNoteCreatedInstalledMerchantsEvent.md#creditnotecreatedinstalledmerchantseventdataobject). |

### CreditNoteCreatedInstalledMerchantsEvent.data.object

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Field definitions: [shared fields](CreditNote.md#creditnote).

### CreditNoteCreatedInstalledMerchantsEvent.data.object.allocated_money

Field definitions: [CreditNote.allocated_money](../models/CreditNote.md#creditnoteallocated_money).

### CreditNoteCreatedInstalledMerchantsEvent.data.object.available_money

Field definitions: [CreditNote.available_money](../models/CreditNote.md#creditnoteavailable_money).

### CreditNoteCreatedInstalledMerchantsEvent.data.object.pending_refund_money

Field definitions: [CreditNote.pending_refund_money](../models/CreditNote.md#creditnotepending_refund_money).

### CreditNoteCreatedInstalledMerchantsEvent.data.object.refunded_money

Field definitions: [BuyerCreditNote.refunded_money](../models/BuyerCreditNote.md#buyercreditnoterefunded_money).

### CreditNoteCreatedInstalledMerchantsEvent.data.object.total_money

Field definitions: [BuyerCreditNote.total_money](../models/BuyerCreditNote.md#buyercreditnotetotal_money).

### CreditNoteCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

