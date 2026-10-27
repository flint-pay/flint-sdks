[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook1e0bfe58cccePayload

The `merchant_billing_invoice.issued` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook1e0bfe58cccePayload.md#incomingwebhook1e0bfe58cccepayloaddata). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.issued"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook1e0bfe58cccePayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingInvoice](../models/MerchantBillingInvoice.md#merchantbillinginvoice) | A Flint invoice for the merchant's Flint subscription. `object`: [field definitions](../models/IncomingWebhook1e0bfe58cccePayload.md#incomingwebhook1e0bfe58cccepayloaddataobject). |

### IncomingWebhook1e0bfe58cccePayload.data.object

A Flint invoice for the merchant's Flint subscription.

Field definitions: [shared fields](MerchantBillingInvoice.md#merchantbillinginvoice).

### IncomingWebhook1e0bfe58cccePayload.data.object.credit_money

Credit applied to the invoice: the sum of its credit line items. Never more than subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook1e0bfe58cccePayload.data.object.outstanding_money

Part of total_money Flint still has to collect. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook1e0bfe58cccePayload.data.object.subtotal_money

Sum of the subscription line items, before credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook1e0bfe58cccePayload.data.object.total_money

What the invoice charges: subtotal_money minus credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook1e0bfe58cccePayload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

