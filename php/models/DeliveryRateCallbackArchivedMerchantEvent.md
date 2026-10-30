[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackArchivedMerchantEvent

The `delivery_rate_callback.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryRateCallbackArchivedMerchantEventData](../models/DeliveryRateCallbackArchivedMerchantEventData.md#deliveryratecallbackarchivedmerchanteventdata) | `data`: [field definitions](../models/DeliveryRateCallbackArchivedMerchantEvent.md#deliveryratecallbackarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_rate_callback.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryRateCallbackArchivedMerchantEventRequest](../models/DeliveryRateCallbackArchivedMerchantEventRequest.md#deliveryratecallbackarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryRateCallbackArchivedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1).

### DeliveryRateCallbackArchivedMerchantEvent.data fields 1.object

Field definitions: [DeliveryRateCallbackActivatedMerchantEvent.data fields 1.object](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1object).

