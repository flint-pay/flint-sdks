[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileArchivedMerchantEvent

The `delivery_profile.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryProfileArchivedMerchantEventData](../models/DeliveryProfileArchivedMerchantEventData.md#deliveryprofilearchivedmerchanteventdata) | `data`: [field definitions](../models/DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_profile.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryProfileArchivedMerchantEventRequest](../models/DeliveryProfileArchivedMerchantEventRequest.md#deliveryprofilearchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryProfileArchivedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryProfileActivatedMerchantEvent.md#deliveryprofileactivatedmerchanteventdata-fields-1).

### DeliveryProfileArchivedMerchantEvent.data fields 1.object

Field definitions: [DeliveryProfileActivatedMerchantEvent.data fields 1.object](../models/DeliveryProfileActivatedMerchantEvent.md#deliveryprofileactivatedmerchanteventdata-fields-1object).

