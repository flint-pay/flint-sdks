[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventCreatedMerchantEvent

The `fulfillment_event.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [FulfillmentEventCreatedMerchantEventData](../models/FulfillmentEventCreatedMerchantEventData.md#fulfillmenteventcreatedmerchanteventdata) | `data`: [field definitions](../models/FulfillmentEventCreatedMerchantEvent.md#fulfillmenteventcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"fulfillment_event.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FulfillmentEventCreatedMerchantEventRequest](../models/FulfillmentEventCreatedMerchantEventRequest.md#fulfillmenteventcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FulfillmentEventCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent) | An action recorded during an order's fulfillment. `object`: [field definitions](../models/FulfillmentEventCreatedMerchantEvent.md#fulfillmenteventcreatedmerchanteventdata-fields-1object). |

### FulfillmentEventCreatedMerchantEvent.data fields 1.object

An action recorded during an order's fulfillment.

Field definitions: [shared fields](FulfillmentEvent.md#fulfillmentevent).

