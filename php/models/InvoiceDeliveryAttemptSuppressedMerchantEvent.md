[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptSuppressedMerchantEvent

The `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceDeliveryAttemptSuppressedMerchantEventData](../models/InvoiceDeliveryAttemptSuppressedMerchantEventData.md#invoicedeliveryattemptsuppressedmerchanteventdata) | `data`: [field definitions](../models/InvoiceDeliveryAttemptSuppressedMerchantEvent.md#invoicedeliveryattemptsuppressedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.suppressed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceDeliveryAttemptSuppressedMerchantEventRequest](../models/InvoiceDeliveryAttemptSuppressedMerchantEventRequest.md#invoicedeliveryattemptsuppressedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceDeliveryAttemptSuppressedMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1).

### InvoiceDeliveryAttemptSuppressedMerchantEvent.data fields 1.object

Field definitions: [InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.object](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1object).

