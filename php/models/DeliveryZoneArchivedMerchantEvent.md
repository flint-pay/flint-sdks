[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneArchivedMerchantEvent

The `delivery_zone.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryZoneArchivedMerchantEventData](../models/DeliveryZoneArchivedMerchantEventData.md#deliveryzonearchivedmerchanteventdata) | `data`: [field definitions](../models/DeliveryZoneArchivedMerchantEvent.md#deliveryzonearchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_zone.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryZoneArchivedMerchantEventRequest](../models/DeliveryZoneArchivedMerchantEventRequest.md#deliveryzonearchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneArchivedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1).

### DeliveryZoneArchivedMerchantEvent.data fields 1.object

Field definitions: [DeliveryZoneActivatedMerchantEvent.data fields 1.object](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1object).

