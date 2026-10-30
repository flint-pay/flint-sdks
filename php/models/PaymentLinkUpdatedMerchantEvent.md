[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedMerchantEvent

The `payment_link.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentLinkUpdatedMerchantEventData](../models/PaymentLinkUpdatedMerchantEventData.md#paymentlinkupdatedmerchanteventdata) | `data`: [field definitions](../models/PaymentLinkUpdatedMerchantEvent.md#paymentlinkupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_link.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentLinkUpdatedMerchantEventRequest](../models/PaymentLinkUpdatedMerchantEventRequest.md#paymentlinkupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentLinkUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1).

### PaymentLinkUpdatedMerchantEvent.data fields 1.object

Field definitions: [PaymentLinkCreatedMerchantEvent.data fields 1.object](../models/PaymentLinkCreatedMerchantEvent.md#paymentlinkcreatedmerchanteventdata-fields-1object).

