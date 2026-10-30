[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackActivatedMerchantEvent

The `delivery_rate_callback.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryRateCallbackActivatedMerchantEventData](../models/DeliveryRateCallbackActivatedMerchantEventData.md#deliveryratecallbackactivatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_rate_callback.activated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryRateCallbackActivatedMerchantEventRequest](../models/DeliveryRateCallbackActivatedMerchantEventRequest.md#deliveryratecallbackactivatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback) | An endpoint that supplies delivery rates. `object`: [field definitions](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1object). |

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.object

An endpoint that supplies delivery rates.

Field definitions: [shared fields](DeliveryRateCallbackResponse.md#deliveryratecallbackresponsedata).

