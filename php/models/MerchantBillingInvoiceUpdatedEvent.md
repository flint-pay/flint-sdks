[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceUpdatedEvent

The `merchant_billing_invoice.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [MerchantBillingInvoiceUpdatedEventData](../models/MerchantBillingInvoiceUpdatedEventData.md#merchantbillinginvoiceupdatedeventdata) | `data`: [field definitions](../models/MerchantBillingInvoiceUpdatedEvent.md#merchantbillinginvoiceupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantBillingInvoiceUpdatedEventRequest](../models/MerchantBillingInvoiceUpdatedEventRequest.md#merchantbillinginvoiceupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantBillingInvoiceUpdatedEvent.data fields 1

Field definitions: [shared fields](MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1).

### MerchantBillingInvoiceUpdatedEvent.data fields 1.object

Field definitions: [MerchantBillingInvoiceIssuedEvent.data fields 1.object](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1object).

