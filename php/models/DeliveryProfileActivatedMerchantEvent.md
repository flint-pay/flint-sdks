[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileActivatedMerchantEvent

The `delivery_profile.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryProfileActivatedMerchantEventData](../models/DeliveryProfileActivatedMerchantEventData.md#deliveryprofileactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryProfileActivatedMerchantEvent.md#deliveryprofileactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_profile.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryProfileActivatedMerchantEventRequest](../models/DeliveryProfileActivatedMerchantEventRequest.md#deliveryprofileactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryProfileActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryProfile](../models/DeliveryProfile.md#deliveryprofile) | Reusable delivery rules assigned to catalog items. `object`: [field definitions](../models/DeliveryProfileActivatedMerchantEvent.md#deliveryprofileactivatedmerchanteventdata-fields-1object). |

### DeliveryProfileActivatedMerchantEvent.data fields 1.object

Reusable delivery rules assigned to catalog items.

Field definitions: [shared fields](DeliveryProfile.md#deliveryprofile).

### DeliveryProfileActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

