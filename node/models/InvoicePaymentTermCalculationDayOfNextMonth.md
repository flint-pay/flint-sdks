[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentTermCalculationDayOfNextMonth

The `day_of_next_month` variant of `InvoicePaymentTermCalculation`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `day` | Required | integer | Day of the month. Later days clamp to the last day of the month. Format: `int32`. minimum: `1`. maximum: `31`. |
| `days` | Optional | integer | Format: `int32`. minimum: `0`. maximum: `365`. |
| `type` | Required | string | Values: `"day_of_next_month"`. |

