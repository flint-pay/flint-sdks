[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetActivatedMerchantEvent

The `delivery_location_set.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryLocationSetActivatedMerchantEventData](../models/DeliveryLocationSetActivatedMerchantEventData.md#deliverylocationsetactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_location_set.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryLocationSetActivatedMerchantEventRequest](../models/DeliveryLocationSetActivatedMerchantEventRequest.md#deliverylocationsetactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryLocationSetActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryLocationSet](../models/DeliveryLocationSet.md#deliverylocationset) | The locations available to a delivery method. `object`: [field definitions](../models/DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1object). |

### DeliveryLocationSetActivatedMerchantEvent.data fields 1.object

The locations available to a delivery method.

Field definitions: [shared fields](DeliveryLocationSet.md#deliverylocationset).

### DeliveryLocationSetActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

