[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedMerchantEvent

The `checkout_session.closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CheckoutSessionClosedMerchantEventData](../models/CheckoutSessionClosedMerchantEventData.md#checkoutsessionclosedmerchanteventdata) | `data`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"checkout_session.closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CheckoutSessionClosedMerchantEventRequest](../models/CheckoutSessionClosedMerchantEventRequest.md#checkoutsessionclosedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CheckoutSessionClosedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. `object`: [field definitions](../models/CheckoutSessionClosedMerchantEvent.md#checkoutsessionclosedmerchanteventdata-fields-1object). |

### CheckoutSessionClosedMerchantEvent.data fields 1.object

A session in which a buyer completes an order's payment.

Field definitions: [shared fields](CheckoutSession.md#checkoutsession).

### CheckoutSessionClosedMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.metadata](../models/OrderResponse.md#orderresponsedatametadata).

