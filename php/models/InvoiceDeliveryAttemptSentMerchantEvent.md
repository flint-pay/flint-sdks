[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptSentMerchantEvent

The `invoice_delivery_attempt.sent` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceDeliveryAttemptSentMerchantEventData](../models/InvoiceDeliveryAttemptSentMerchantEventData.md#invoicedeliveryattemptsentmerchanteventdata) | `data`: [field definitions](../models/InvoiceDeliveryAttemptSentMerchantEvent.md#invoicedeliveryattemptsentmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.sent"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceDeliveryAttemptSentMerchantEventRequest](../models/InvoiceDeliveryAttemptSentMerchantEventRequest.md#invoicedeliveryattemptsentmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceDeliveryAttemptSentMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1).

### InvoiceDeliveryAttemptSentMerchantEvent.data fields 1.object

Field definitions: [InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.object](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1object).

