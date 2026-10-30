[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedMerchantEvent

The `invoice_manual_payment.reversed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceManualPaymentReversedMerchantEventData](../models/InvoiceManualPaymentReversedMerchantEventData.md#invoicemanualpaymentreversedmerchanteventdata) | `data`: [field definitions](../models/InvoiceManualPaymentReversedMerchantEvent.md#invoicemanualpaymentreversedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_manual_payment.reversed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceManualPaymentReversedMerchantEventRequest](../models/InvoiceManualPaymentReversedMerchantEventRequest.md#invoicemanualpaymentreversedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceManualPaymentReversedMerchantEvent.data fields 1

Field definitions: [shared fields](InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1).

### InvoiceManualPaymentReversedMerchantEvent.data fields 1.object

Field definitions: [InvoiceManualPaymentCreatedMerchantEvent.data fields 1.object](../models/InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1object).

