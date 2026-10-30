[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptCreatedMerchantEvent

The `return_receipt.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnReceiptCreatedMerchantEventData](../models/ReturnReceiptCreatedMerchantEventData.md#returnreceiptcreatedmerchanteventdata) | `data`: [field definitions](../models/ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_receipt.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnReceiptCreatedMerchantEventRequest](../models/ReturnReceiptCreatedMerchantEventRequest.md#returnreceiptcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnReceiptCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | A record of returned items arriving at a location. `object`: [field definitions](../models/ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1object). |

### ReturnReceiptCreatedMerchantEvent.data fields 1.object

A record of returned items arriving at a location.

Field definitions: [shared fields](ReturnReceipt.md#returnreceipt).

