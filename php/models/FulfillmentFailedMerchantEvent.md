[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentFailedMerchantEvent

The `fulfillment.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [FulfillmentFailedMerchantEventData](../models/FulfillmentFailedMerchantEventData.md#fulfillmentfailedmerchanteventdata) | `data`: [field definitions](../models/FulfillmentFailedMerchantEvent.md#fulfillmentfailedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"fulfillment.failed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FulfillmentFailedMerchantEventRequest](../models/FulfillmentFailedMerchantEventRequest.md#fulfillmentfailedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FulfillmentFailedMerchantEvent.data fields 1

Field definitions: [shared fields](FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1).

### FulfillmentFailedMerchantEvent.data fields 1.object

Field definitions: [FulfillmentCanceledMerchantEvent.data fields 1.object](../models/FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1object).

