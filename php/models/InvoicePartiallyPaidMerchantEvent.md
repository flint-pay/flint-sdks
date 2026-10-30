[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePartiallyPaidMerchantEvent

The `invoice.partially_paid` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoicePartiallyPaidMerchantEventData](../models/InvoicePartiallyPaidMerchantEventData.md#invoicepartiallypaidmerchanteventdata) | `data`: [field definitions](../models/InvoicePartiallyPaidMerchantEvent.md#invoicepartiallypaidmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice.partially_paid"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoicePartiallyPaidMerchantEventRequest](../models/InvoicePartiallyPaidMerchantEventRequest.md#invoicepartiallypaidmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePartiallyPaidMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1).

### InvoicePartiallyPaidMerchantEvent.data fields 1.object

Field definitions: [InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object).

