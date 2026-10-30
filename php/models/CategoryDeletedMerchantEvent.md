[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryDeletedMerchantEvent

The `category.deleted` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CategoryDeletedMerchantEventData](../models/CategoryDeletedMerchantEventData.md#categorydeletedmerchanteventdata) | `data`: [field definitions](../models/CategoryDeletedMerchantEvent.md#categorydeletedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"category.deleted"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CategoryDeletedMerchantEventRequest](../models/CategoryDeletedMerchantEventRequest.md#categorydeletedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CategoryDeletedMerchantEvent.data fields 1

Field definitions: [shared fields](CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1).

### CategoryDeletedMerchantEvent.data fields 1.object

Field definitions: [CategoryCreatedMerchantEvent.data fields 1.object](../models/CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1object).

