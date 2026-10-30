[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptSupersededMerchantEvent

The `return_receipt.superseded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnReceiptSupersededMerchantEventData](../models/ReturnReceiptSupersededMerchantEventData.md#returnreceiptsupersededmerchanteventdata) | `data`: [field definitions](../models/ReturnReceiptSupersededMerchantEvent.md#returnreceiptsupersededmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_receipt.superseded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnReceiptSupersededMerchantEventRequest](../models/ReturnReceiptSupersededMerchantEventRequest.md#returnreceiptsupersededmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnReceiptSupersededMerchantEvent.data fields 1

Field definitions: [shared fields](ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1).

### ReturnReceiptSupersededMerchantEvent.data fields 1.object

Field definitions: [ReturnReceiptCreatedMerchantEvent.data fields 1.object](../models/ReturnReceiptCreatedMerchantEvent.md#returnreceiptcreatedmerchanteventdata-fields-1object).

