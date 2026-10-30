[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneActivatedMerchantEvent

The `delivery_zone.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryZoneActivatedMerchantEventData](../models/DeliveryZoneActivatedMerchantEventData.md#deliveryzoneactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_zone.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryZoneActivatedMerchantEventRequest](../models/DeliveryZoneActivatedMerchantEventRequest.md#deliveryzoneactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryZoneActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryZone](../models/DeliveryZone.md#deliveryzone) | A geographic area served by a delivery method. `object`: [field definitions](../models/DeliveryZoneActivatedMerchantEvent.md#deliveryzoneactivatedmerchanteventdata-fields-1object). |

### DeliveryZoneActivatedMerchantEvent.data fields 1.object

A geographic area served by a delivery method.

Field definitions: [shared fields](DeliveryZone.md#deliveryzone).

### DeliveryZoneActivatedMerchantEvent.data fields 1.object.configuration

Declared alternatives: [DeliveryZone.configuration](../models/DeliveryZone.md#deliveryzoneconfiguration).

### DeliveryZoneActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

