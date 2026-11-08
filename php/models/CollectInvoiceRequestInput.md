[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceRequestInput

The request body for: Collect invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_schedule_entry_id` | Optional | string | Optional. The schedule entry to collect. Only the earliest entry that is due and still has an outstanding balance can be collected; omit it to collect that entry. Not allowed on an invoice without a schedule. minLength: `1`. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. |
| `payment_method_id` | Optional | string | minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

