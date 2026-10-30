[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceReminderDueMerchantEvent

The `invoice.reminder_due` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceReminderDueMerchantEventData](../models/InvoiceReminderDueMerchantEventData.md#invoicereminderduemerchanteventdata) | `data`: [field definitions](../models/InvoiceReminderDueMerchantEvent.md#invoicereminderduemerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice.reminder_due"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceReminderDueMerchantEventRequest](../models/InvoiceReminderDueMerchantEventRequest.md#invoicereminderduemerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceReminderDueMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1).

### InvoiceReminderDueMerchantEvent.data fields 1.object

Field definitions: [InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object).

