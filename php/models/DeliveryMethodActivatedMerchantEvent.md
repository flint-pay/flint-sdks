[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedMerchantEvent

The `delivery_method.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryMethodActivatedMerchantEventData](../models/DeliveryMethodActivatedMerchantEventData.md#deliverymethodactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_method.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryMethodActivatedMerchantEventRequest](../models/DeliveryMethodActivatedMerchantEventRequest.md#deliverymethodactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryMethodActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod) | A configured shipping, pickup, local delivery, or service option. `object`: [field definitions](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1object). |

### DeliveryMethodActivatedMerchantEvent.data fields 1.object

A configured shipping, pickup, local delivery, or service option.

Field definitions: [shared fields](DeliveryMethod.md#deliverymethod).

### DeliveryMethodActivatedMerchantEvent.data fields 1.object.configuration

Field definitions: [DeliveryMethod.configuration fields 1](../models/DeliveryMethod.md#deliverymethodconfiguration-fields-1).

### DeliveryMethodActivatedMerchantEvent.data fields 1.object.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

