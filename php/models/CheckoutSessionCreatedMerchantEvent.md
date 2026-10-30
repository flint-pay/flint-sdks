[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionCreatedMerchantEvent

The `checkout_session.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CheckoutSessionCreatedMerchantEventData](../models/CheckoutSessionCreatedMerchantEventData.md#checkoutsessioncreatedmerchanteventdata) | `data`: [field definitions](../models/CheckoutSessionCreatedMerchantEvent.md#checkoutsessioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"checkout_session.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CheckoutSessionCreatedMerchantEventRequest](../models/CheckoutSessionCreatedMerchantEventRequest.md#checkoutsessioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CheckoutSessionCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1).

### CheckoutSessionCreatedMerchantEvent.data fields 1.object

Field definitions: [CheckoutSessionClosedMerchantEvent.data fields 1.object](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object).

