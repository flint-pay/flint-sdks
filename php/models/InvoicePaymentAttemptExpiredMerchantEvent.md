[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptExpiredMerchantEvent

The `invoice_payment_attempt.expired` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoicePaymentAttemptExpiredMerchantEventData](../models/InvoicePaymentAttemptExpiredMerchantEventData.md#invoicepaymentattemptexpiredmerchanteventdata) | `data`: [field definitions](../models/InvoicePaymentAttemptExpiredMerchantEvent.md#invoicepaymentattemptexpiredmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_payment_attempt.expired"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoicePaymentAttemptExpiredMerchantEventRequest](../models/InvoicePaymentAttemptExpiredMerchantEventRequest.md#invoicepaymentattemptexpiredmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePaymentAttemptExpiredMerchantEvent.data fields 1

Field definitions: [shared fields](InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1).

### InvoicePaymentAttemptExpiredMerchantEvent.data fields 1.object

Field definitions: [InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.object](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1object).

