[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReverseInvoiceManualPaymentRequest

The request body for: Reverse manual invoice payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Expected version of the invoice. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reversal_note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `reversed_at` | Optional | string | When the payment was reversed. Defaults to now and must not precede received_at. Format: `date-time`. minLength: `1`. |

