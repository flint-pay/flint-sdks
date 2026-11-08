[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermInput

The payment timing agreed for an invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput) | Rule used to calculate the invoice's due date when it is issued. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `invoice_payment_term_id` | Required | string | ID of the payment term captured on this invoice. Example: `"ipt_01KEZF7C0064N1V301BBMQ37R4"`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput) | One-time late fee policy captured with this term. Absent when no late fee policy applies. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | Name of the payment term shown on invoices. |
| `status` | Required | string | Whether the term can be selected for new invoices. Archiving preserves terms captured on existing invoices. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int32`. |

