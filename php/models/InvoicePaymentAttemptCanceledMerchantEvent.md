[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptCanceledMerchantEvent

The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoicePaymentAttemptCanceledMerchantEventData](../models/InvoicePaymentAttemptCanceledMerchantEventData.md#invoicepaymentattemptcanceledmerchanteventdata) | `data`: [field definitions](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_payment_attempt.canceled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoicePaymentAttemptCanceledMerchantEventRequest](../models/InvoicePaymentAttemptCanceledMerchantEventRequest.md#invoicepaymentattemptcanceledmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | An attempt to collect payment for an invoice. `object`: [field definitions](../models/InvoicePaymentAttemptCanceledMerchantEvent.md#invoicepaymentattemptcanceledmerchanteventdata-fields-1object). |

### InvoicePaymentAttemptCanceledMerchantEvent.data fields 1.object

An attempt to collect payment for an invoice.

Field definitions: [shared fields](InvoicePaymentAttempt.md#invoicepaymentattempt).

