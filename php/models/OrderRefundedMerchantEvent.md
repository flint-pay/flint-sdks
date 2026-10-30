[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderRefundedMerchantEvent

The `order.refunded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [OrderRefundedMerchantEventData](../models/OrderRefundedMerchantEventData.md#orderrefundedmerchanteventdata) | `data`: [field definitions](../models/OrderRefundedMerchantEvent.md#orderrefundedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"order.refunded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [OrderRefundedMerchantEventRequest](../models/OrderRefundedMerchantEventRequest.md#orderrefundedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### OrderRefundedMerchantEvent.data fields 1

Field definitions: [shared fields](OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1).

### OrderRefundedMerchantEvent.data fields 1.object

Field definitions: [OrderClosedMerchantEvent.data fields 1.object](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1object).

