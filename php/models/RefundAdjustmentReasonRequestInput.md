[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentReasonRequestInput

The reason to record for a refund adjustment, as a `code` with an optional description.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Why the adjustment was made. Values: [7 declared values](#refundadjustmentreasonrequestinput-code-values). |
| `description` | Optional | string | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. minLength: `1`. |

#### RefundAdjustmentReasonRequestInput code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

