[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceRequest

The request body for: Collect invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | Optional. The schedule entry to collect. Only the earliest entry that is due and still has an outstanding balance can be collected; omit it to collect that entry. Not allowed on an invoice without a schedule. minLength: `1`. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `payment_method_id` | Optional | string | Optional. The customer's saved payment method to charge. Omit it to charge the invoice's `collection.payment_method_id`. The method must be active, belong to the invoice's customer, allow charges without the buyer present, and be a payment option the invoice allows. If the invoice has no method either, the request is refused. Only invoices collected automatically can be collected this way. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

