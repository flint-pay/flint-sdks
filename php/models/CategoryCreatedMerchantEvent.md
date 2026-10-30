[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryCreatedMerchantEvent

The `category.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CategoryCreatedMerchantEventData](../models/CategoryCreatedMerchantEventData.md#categorycreatedmerchanteventdata) | `data`: [field definitions](../models/CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"category.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CategoryCreatedMerchantEventRequest](../models/CategoryCreatedMerchantEventRequest.md#categorycreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CategoryCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Category](../models/Category.md#category) | A catalog grouping used to organize items. `object`: [field definitions](../models/CategoryCreatedMerchantEvent.md#categorycreatedmerchanteventdata-fields-1object). |

### CategoryCreatedMerchantEvent.data fields 1.object

A catalog grouping used to organize items.

Field definitions: [shared fields](Category.md#category).

### CategoryCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

