[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionInvalidatedMerchantEvent

The `checkout_session.invalidated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CheckoutSessionInvalidatedMerchantEventData](../models/CheckoutSessionInvalidatedMerchantEventData.md#checkoutsessioninvalidatedmerchanteventdata) | `data`: [field definitions](../models/CheckoutSessionInvalidatedMerchantEvent.md#checkoutsessioninvalidatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"checkout_session.invalidated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CheckoutSessionInvalidatedMerchantEventRequest](../models/CheckoutSessionInvalidatedMerchantEventRequest.md#checkoutsessioninvalidatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CheckoutSessionInvalidatedMerchantEvent.data fields 1

Field definitions: [shared fields](CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1).

### CheckoutSessionInvalidatedMerchantEvent.data fields 1.object

Field definitions: [CheckoutSessionClosedMerchantEvent.data fields 1.object](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object).

