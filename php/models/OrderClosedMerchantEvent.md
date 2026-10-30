[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedMerchantEvent

The `order.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [OrderClosedMerchantEventData](../models/OrderClosedMerchantEventData.md#orderclosedmerchanteventdata) | `data`: [field definitions](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"order.closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [OrderClosedMerchantEventRequest](../models/OrderClosedMerchantEventRequest.md#orderclosedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### OrderClosedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `object`: [field definitions](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1object). |

### OrderClosedMerchantEvent.data fields 1.object

A customer's purchase and its payment and fulfillment progress.

Field definitions: [shared fields](OrderResponse.md#orderresponsedata).

### OrderClosedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.metadata](../models/OrderResponse.md#orderresponsedatametadata).

### OrderClosedMerchantEvent.data fields 1.object.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

