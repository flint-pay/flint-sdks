[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodArchivedMerchantEvent

The `payment_method.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentMethodArchivedMerchantEventData](../models/PaymentMethodArchivedMerchantEventData.md#paymentmethodarchivedmerchanteventdata) | `data`: [field definitions](../models/PaymentMethodArchivedMerchantEvent.md#paymentmethodarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_method.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentMethodArchivedMerchantEventRequest](../models/PaymentMethodArchivedMerchantEventRequest.md#paymentmethodarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentMethodArchivedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1).

### PaymentMethodArchivedMerchantEvent.data fields 1.object

Field definitions: [PaymentMethodActivatedMerchantEvent.data fields 1.object](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1object).

