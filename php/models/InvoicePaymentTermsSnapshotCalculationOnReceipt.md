[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermsSnapshotCalculationOnReceipt

How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.

The `on_receipt` variant of `InvoicePaymentTermCalculation`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Optional | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Optional | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | Values: `"on_receipt"`. |

