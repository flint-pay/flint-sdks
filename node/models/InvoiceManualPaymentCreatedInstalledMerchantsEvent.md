[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentCreatedInstalledMerchantsEvent

The `invoice_manual_payment.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/InvoiceManualPaymentCreatedInstalledMerchantsEvent.md#invoicemanualpaymentcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"invoice_manual_payment.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### InvoiceManualPaymentCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. `object`: [field definitions](../models/InvoiceManualPaymentCreatedInstalledMerchantsEvent.md#invoicemanualpaymentcreatedinstalledmerchantseventdataobject). |

### InvoiceManualPaymentCreatedInstalledMerchantsEvent.data.object

A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.

Field definitions: [shared fields](InvoiceManualPayment.md#invoicemanualpayment).

### InvoiceManualPaymentCreatedInstalledMerchantsEvent.data.object.amount_money

Field definitions: [InvoiceManualPayment.amount_money](../models/InvoiceManualPayment.md#invoicemanualpaymentamount_money).

### InvoiceManualPaymentCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

