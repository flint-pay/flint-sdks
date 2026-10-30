[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePartiallyRefundedMerchantEvent

The `invoice.partially_refunded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoicePartiallyRefundedMerchantEventData](../models/InvoicePartiallyRefundedMerchantEventData.md#invoicepartiallyrefundedmerchanteventdata) | `data`: [field definitions](../models/InvoicePartiallyRefundedMerchantEvent.md#invoicepartiallyrefundedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice.partially_refunded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoicePartiallyRefundedMerchantEventRequest](../models/InvoicePartiallyRefundedMerchantEventRequest.md#invoicepartiallyrefundedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePartiallyRefundedMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1).

### InvoicePartiallyRefundedMerchantEvent.data fields 1.object

Field definitions: [InvoiceCollectionBlockResolvedMerchantEvent.data fields 1.object](../models/InvoiceCollectionBlockResolvedMerchantEvent.md#invoicecollectionblockresolvedmerchanteventdata-fields-1object).

