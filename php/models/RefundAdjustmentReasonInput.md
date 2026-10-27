[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentReasonInput

The reason recorded for a refund line item adjustment, as a `code` with an optional description.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: [7 declared values](#refundadjustmentreasoninput-code-values). |
| `description` | Optional | string |  |

#### RefundAdjustmentReasonInput code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

