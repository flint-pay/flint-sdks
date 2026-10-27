[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInvoicePaymentTermRequest

The request body for: Update invoice payment term. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [InvoicePaymentTermCalculation](../models/InvoicePaymentTermCalculation.md#invoicepaymenttermcalculation) | How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month. |
| `expected_version` | Optional | integer | Optional version last read by the caller. Format: `uint32`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `late_fee_policy` | Optional | [InvoiceLateFeePolicy](../models/InvoiceLateFeePolicy.md#invoicelatefeepolicy) or null |  |
| `name` | Optional | string | minLength: `1`. |

