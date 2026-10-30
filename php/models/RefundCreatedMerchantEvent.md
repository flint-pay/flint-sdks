[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundCreatedMerchantEvent

The `refund.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [RefundCreatedMerchantEventData](../models/RefundCreatedMerchantEventData.md#refundcreatedmerchanteventdata) | `data`: [field definitions](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"refund.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [RefundCreatedMerchantEventRequest](../models/RefundCreatedMerchantEventRequest.md#refundcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### RefundCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Refund](../models/Refund.md#refund) | Money returned against a collected payment. `object`: [field definitions](../models/RefundCreatedMerchantEvent.md#refundcreatedmerchanteventdata-fields-1object). |

### RefundCreatedMerchantEvent.data fields 1.object

Money returned against a collected payment.

Field definitions: [shared fields](Refund.md#refund).

### RefundCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

