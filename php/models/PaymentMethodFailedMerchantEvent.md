[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodFailedMerchantEvent

The `payment_method.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentMethodFailedMerchantEventData](../models/PaymentMethodFailedMerchantEventData.md#paymentmethodfailedmerchanteventdata) | `data`: [field definitions](../models/PaymentMethodFailedMerchantEvent.md#paymentmethodfailedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_method.failed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentMethodFailedMerchantEventRequest](../models/PaymentMethodFailedMerchantEventRequest.md#paymentmethodfailedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentMethodFailedMerchantEvent.data fields 1

Field definitions: [shared fields](PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1).

### PaymentMethodFailedMerchantEvent.data fields 1.object

Field definitions: [PaymentMethodActivatedMerchantEvent.data fields 1.object](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1object).

