[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook155e0b06aa8fPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook155e0b06aa8fPayload.md#incomingwebhook155e0b06aa8fpayloaddata). |
| `event_type` | Required | string | Values: `"invoice.paid"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook155e0b06aa8fPayload variant 1: `event_type` = `"invoice.paid"`

oneOf variant 1: The `invoice.paid` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"invoice.paid"`.

### IncomingWebhook155e0b06aa8fPayload variant 2: `event_type` = `"invoice.paid"`

oneOf variant 2: The `invoice.paid` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"invoice.paid"`.

### IncomingWebhook155e0b06aa8fPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. `object`: [field definitions](../models/IncomingWebhook155e0b06aa8fPayload.md#incomingwebhook155e0b06aa8fpayloaddataobject). |

### IncomingWebhook155e0b06aa8fPayload.data.object

A bill issued to a customer.

Field definitions: [shared fields](Invoice.md#invoice).

### IncomingWebhook155e0b06aa8fPayload.data.object.credit_money

Field definitions: [BuyerInvoice.credit_money](../models/BuyerInvoice.md#buyerinvoicecredit_money).

### IncomingWebhook155e0b06aa8fPayload.data.object.currently_due_money

Field definitions: [BuyerInvoice.currently_due_money](../models/BuyerInvoice.md#buyerinvoicecurrently_due_money).

### IncomingWebhook155e0b06aa8fPayload.data.object.late_fee_money

Field definitions: [BuyerInvoice.late_fee_money](../models/BuyerInvoice.md#buyerinvoicelate_fee_money).

### IncomingWebhook155e0b06aa8fPayload.data.object.outstanding_money

What is still owed: total_money + late_fee_money - paid_money - credit_money - written_off_money, never below zero. 0 on paid, credited, uncollectible, and void invoices; equal to total_money on a draft. Refunds don't change it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook155e0b06aa8fPayload.data.object.paid_money

Field definitions: [BuyerInvoice.paid_money](../models/BuyerInvoice.md#buyerinvoicepaid_money).

### IncomingWebhook155e0b06aa8fPayload.data.object.refunded_money

Field definitions: [BuyerInvoice.refunded_money](../models/BuyerInvoice.md#buyerinvoicerefunded_money).

### IncomingWebhook155e0b06aa8fPayload.data.object.remit_to_address

Field definitions: [BuyerInvoice.remit_to_address](../models/BuyerInvoice.md#buyerinvoiceremit_to_address).

### IncomingWebhook155e0b06aa8fPayload.data.object.total_money

What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook155e0b06aa8fPayload.data.object.written_off_money

The balance written off when the invoice was marked uncollectible, including unpaid late fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### IncomingWebhook155e0b06aa8fPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook155e0b06aa8fPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

