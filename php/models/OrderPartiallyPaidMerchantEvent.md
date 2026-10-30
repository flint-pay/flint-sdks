[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPartiallyPaidMerchantEvent

The `order.partially_paid` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [OrderPartiallyPaidMerchantEventData](../models/OrderPartiallyPaidMerchantEventData.md#orderpartiallypaidmerchanteventdata) | `data`: [field definitions](../models/OrderPartiallyPaidMerchantEvent.md#orderpartiallypaidmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"order.partially_paid"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [OrderPartiallyPaidMerchantEventRequest](../models/OrderPartiallyPaidMerchantEventRequest.md#orderpartiallypaidmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### OrderPartiallyPaidMerchantEvent.data fields 1

Field definitions: [shared fields](OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1).

### OrderPartiallyPaidMerchantEvent.data fields 1.object

Field definitions: [OrderClosedMerchantEvent.data fields 1.object](../models/OrderClosedMerchantEvent.md#orderclosedmerchanteventdata-fields-1object).

