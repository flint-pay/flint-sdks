[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentCreatedMerchantEvent

The `invoice_manual_payment.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [InvoiceManualPaymentCreatedMerchantEventData](../models/InvoiceManualPaymentCreatedMerchantEventData.md#invoicemanualpaymentcreatedmerchanteventdata) | `data`: [field definitions](../models/InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"invoice_manual_payment.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [InvoiceManualPaymentCreatedMerchantEventRequest](../models/InvoiceManualPaymentCreatedMerchantEventRequest.md#invoicemanualpaymentcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceManualPaymentCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. `object`: [field definitions](../models/InvoiceManualPaymentCreatedMerchantEvent.md#invoicemanualpaymentcreatedmerchanteventdata-fields-1object). |

### InvoiceManualPaymentCreatedMerchantEvent.data fields 1.object

A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.

Field definitions: [shared fields](InvoiceManualPayment.md#invoicemanualpayment).

