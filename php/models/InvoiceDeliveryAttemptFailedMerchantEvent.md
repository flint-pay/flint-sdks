[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedMerchantEvent

The `invoice_delivery_attempt.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceDeliveryAttemptFailedMerchantEventData](../models/InvoiceDeliveryAttemptFailedMerchantEventData.md#invoicedeliveryattemptfailedmerchanteventdata) | `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.failed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceDeliveryAttemptFailedMerchantEventRequest](../models/InvoiceDeliveryAttemptFailedMerchantEventRequest.md#invoicedeliveryattemptfailedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceDeliveryAttempt](../models/InvoiceDeliveryAttempt.md#invoicedeliveryattempt) | One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedMerchantEvent.md#invoicedeliveryattemptfailedmerchanteventdata-fields-1object). |

### InvoiceDeliveryAttemptFailedMerchantEvent.data fields 1.object

One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.

Field definitions: [shared fields](InvoiceDeliveryAttemptInput.md#invoicedeliveryattemptinput).

