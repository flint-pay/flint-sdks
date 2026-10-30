[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductCreatedMerchantEvent

The `product.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ProductCreatedMerchantEventData](../models/ProductCreatedMerchantEventData.md#productcreatedmerchanteventdata) | `data`: [field definitions](../models/ProductCreatedMerchantEvent.md#productcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"product.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductCreatedMerchantEventRequest](../models/ProductCreatedMerchantEventRequest.md#productcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ProductCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1).

### ProductCreatedMerchantEvent.data fields 1.object

Field definitions: [ProductArchivedMerchantEvent.data fields 1.object](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1object).

