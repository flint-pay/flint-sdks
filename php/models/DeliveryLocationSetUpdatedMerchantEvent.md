[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetUpdatedMerchantEvent

The `delivery_location_set.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryLocationSetUpdatedMerchantEventData](../models/DeliveryLocationSetUpdatedMerchantEventData.md#deliverylocationsetupdatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryLocationSetUpdatedMerchantEvent.md#deliverylocationsetupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_location_set.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryLocationSetUpdatedMerchantEventRequest](../models/DeliveryLocationSetUpdatedMerchantEventRequest.md#deliverylocationsetupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryLocationSetUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1).

### DeliveryLocationSetUpdatedMerchantEvent.data fields 1.object

Field definitions: [DeliveryLocationSetActivatedMerchantEvent.data fields 1.object](../models/DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1object).

