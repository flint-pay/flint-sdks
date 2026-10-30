[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentUpdatedMerchantEvent

The `fulfillment.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [FulfillmentUpdatedMerchantEventData](../models/FulfillmentUpdatedMerchantEventData.md#fulfillmentupdatedmerchanteventdata) | `data`: [field definitions](../models/FulfillmentUpdatedMerchantEvent.md#fulfillmentupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"fulfillment.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FulfillmentUpdatedMerchantEventRequest](../models/FulfillmentUpdatedMerchantEventRequest.md#fulfillmentupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FulfillmentUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1).

### FulfillmentUpdatedMerchantEvent.data fields 1.object

Field definitions: [FulfillmentCanceledMerchantEvent.data fields 1.object](../models/FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1object).

