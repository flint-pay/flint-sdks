[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationCreatedMerchantEvent

The `delivery_revocation.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryRevocationCreatedMerchantEventData](../models/DeliveryRevocationCreatedMerchantEventData.md#deliveryrevocationcreatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryRevocationCreatedMerchantEvent.md#deliveryrevocationcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_revocation.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryRevocationCreatedMerchantEventRequest](../models/DeliveryRevocationCreatedMerchantEventRequest.md#deliveryrevocationcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryRevocationCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | A withdrawal of a previously available delivery choice. `object`: [field definitions](../models/DeliveryRevocationCreatedMerchantEvent.md#deliveryrevocationcreatedmerchanteventdata-fields-1object). |

### DeliveryRevocationCreatedMerchantEvent.data fields 1.object

A withdrawal of a previously available delivery choice.

Field definitions: [shared fields](DeliveryRevocation.md#deliveryrevocation).

### DeliveryRevocationCreatedMerchantEvent.data fields 1.object.target

Declared alternatives: [DeliveryRevocation.target](../models/DeliveryRevocation.md#deliveryrevocationtarget).

