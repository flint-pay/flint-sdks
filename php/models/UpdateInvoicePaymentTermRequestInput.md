[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInvoicePaymentTermRequestInput

The request body for: Update invoice payment term.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [InvoicePaymentTermCalculationInput](../models/InvoicePaymentTermCalculationInput.md#invoicepaymenttermcalculationinput) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `expected_version` | Optional | integer | Optional version last read by the caller. Format: `uint32`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicyInput](../models/InvoiceLateFeePolicyInput.md#invoicelatefeepolicyinput) or null |  |
| `name` | Optional | string | minLength: `1`. |

