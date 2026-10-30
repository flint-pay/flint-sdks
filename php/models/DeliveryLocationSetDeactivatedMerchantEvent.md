[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetDeactivatedMerchantEvent

The `delivery_location_set.deactivated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryLocationSetDeactivatedMerchantEventData](../models/DeliveryLocationSetDeactivatedMerchantEventData.md#deliverylocationsetdeactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryLocationSetDeactivatedMerchantEvent.md#deliverylocationsetdeactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_location_set.deactivated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryLocationSetDeactivatedMerchantEventRequest](../models/DeliveryLocationSetDeactivatedMerchantEventRequest.md#deliverylocationsetdeactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryLocationSetDeactivatedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1).

### DeliveryLocationSetDeactivatedMerchantEvent.data fields 1.object

Field definitions: [DeliveryLocationSetActivatedMerchantEvent.data fields 1.object](../models/DeliveryLocationSetActivatedMerchantEvent.md#deliverylocationsetactivatedmerchanteventdata-fields-1object).

