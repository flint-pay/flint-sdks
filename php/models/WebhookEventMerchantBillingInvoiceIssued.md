[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventMerchantBillingInvoiceIssued

The `merchant_billing_invoice.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventMerchantBillingInvoiceIssuedData](../models/WebhookEventMerchantBillingInvoiceIssuedData.md#webhookeventmerchantbillinginvoiceissueddata) | `data`: [field definitions](../models/WebhookEventMerchantBillingInvoiceIssued.md#webhookeventmerchantbillinginvoiceissueddata-fields-1). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.issued"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventMerchantBillingInvoiceIssuedRequest](../models/WebhookEventMerchantBillingInvoiceIssuedRequest.md#webhookeventmerchantbillinginvoiceissuedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventMerchantBillingInvoiceIssued.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingInvoice](../models/MerchantBillingInvoice.md#merchantbillinginvoice) | A Flint invoice for the merchant's Flint subscription. `object`: [field definitions](../models/WebhookEventMerchantBillingInvoiceIssued.md#webhookeventmerchantbillinginvoiceissueddata-fields-1object). |

### WebhookEventMerchantBillingInvoiceIssued.data fields 1.object

A Flint invoice for the merchant's Flint subscription.

Field definitions: [shared fields](MerchantBillingInvoice.md#merchantbillinginvoice).

