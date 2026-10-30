[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedMerchantEvent

The `payment_link.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentLinkCreatedMerchantEventData](../models/PaymentLinkCreatedMerchantEventData.md#paymentlinkcreatedmerchanteventdata) | `data`: [field definitions](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_link.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentLinkCreatedMerchantEventRequest](../models/PaymentLinkCreatedMerchantEventRequest.md#paymentlinkcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentLinkCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentLink](../models/PaymentLink.md#paymentlink) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1object). |

### PaymentLinkCreatedMerchantEvent.data fields 1.object

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### PaymentLinkCreatedMerchantEvent.data fields 1.object.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

