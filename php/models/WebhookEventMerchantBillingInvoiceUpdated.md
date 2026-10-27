[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventMerchantBillingInvoiceUpdated

The `merchant_billing_invoice.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventMerchantBillingInvoiceUpdatedData](../models/WebhookEventMerchantBillingInvoiceUpdatedData.md#webhookeventmerchantbillinginvoiceupdateddata) | `data`: [field definitions](../models/WebhookEventMerchantBillingInvoiceUpdated.md#webhookeventmerchantbillinginvoiceupdateddata-fields-1). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventMerchantBillingInvoiceUpdatedRequest](../models/WebhookEventMerchantBillingInvoiceUpdatedRequest.md#webhookeventmerchantbillinginvoiceupdatedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventMerchantBillingInvoiceUpdated.data fields 1

Field definitions: [shared fields](WebhookEventMerchantBillingInvoiceIssued.md#webhookeventmerchantbillinginvoiceissueddata-fields-1).

### WebhookEventMerchantBillingInvoiceUpdated.data fields 1.object

Field definitions: [WebhookEventMerchantBillingInvoiceIssued.data fields 1.object](../models/WebhookEventMerchantBillingInvoiceIssued.md#webhookeventmerchantbillinginvoiceissueddata-fields-1object).

