[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionExpiredMerchantEvent

The `checkout_session.expired` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CheckoutSessionExpiredMerchantEventData](../models/CheckoutSessionExpiredMerchantEventData.md#checkoutsessionexpiredmerchanteventdata) | `data`: [field definitions](../models/CheckoutSessionExpiredMerchantEvent.md#checkoutsessionexpiredmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"checkout_session.expired"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CheckoutSessionExpiredMerchantEventRequest](../models/CheckoutSessionExpiredMerchantEventRequest.md#checkoutsessionexpiredmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CheckoutSessionExpiredMerchantEvent.data fields 1

Field definitions: [shared fields](CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1).

### CheckoutSessionExpiredMerchantEvent.data fields 1.object

Field definitions: [CheckoutSessionClosedMerchantEvent.data fields 1.object](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object).

