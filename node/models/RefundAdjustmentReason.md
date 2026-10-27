[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentReason







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: [7 declared values](#refundadjustmentreason-code-values). |
| `description` | Optional | string |  |

#### RefundAdjustmentReason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundAdjustmentReason variant 1

anyOf variant 1: Declared schema RefundAdjustmentReason. The reason recorded for a refund line item adjustment, as a `code` with an optional description..

No additional constraints.

### RefundAdjustmentReason variant 2

anyOf variant 2: Declared schema RefundAdjustmentReasonRequest. The reason to record for a refund adjustment, as a `code` with an optional description..

- Constraints for `description`: minLength: `1`.

