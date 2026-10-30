[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceIssuedEvent

The `merchant_billing_invoice.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.issued"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantBillingInvoiceIssuedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingInvoice](../models/MerchantBillingInvoice.md#merchantbillinginvoice) | A Flint invoice for the merchant's Flint subscription. `object`: [field definitions](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdataobject). |

### MerchantBillingInvoiceIssuedEvent.data.object

A Flint invoice for the merchant's Flint subscription.

Field definitions: [shared fields](MerchantBillingInvoice.md#merchantbillinginvoice).

### MerchantBillingInvoiceIssuedEvent.data.object.credit_money

Field definitions: [MerchantBillingInvoice.credit_money](../models/MerchantBillingInvoice.md#merchantbillinginvoicecredit_money).

### MerchantBillingInvoiceIssuedEvent.data.object.outstanding_money

Field definitions: [MerchantBillingInvoice.outstanding_money](../models/MerchantBillingInvoice.md#merchantbillinginvoiceoutstanding_money).

### MerchantBillingInvoiceIssuedEvent.data.object.subtotal_money

Field definitions: [MerchantBillingInvoice.subtotal_money](../models/MerchantBillingInvoice.md#merchantbillinginvoicesubtotal_money).

### MerchantBillingInvoiceIssuedEvent.data.object.total_money

Field definitions: [MerchantBillingInvoice.total_money](../models/MerchantBillingInvoice.md#merchantbillinginvoicetotal_money).

### MerchantBillingInvoiceIssuedEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

