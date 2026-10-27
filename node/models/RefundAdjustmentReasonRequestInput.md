[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentReasonRequestInput

Request input. Response: [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason).

The reason to record for a refund adjustment, as a `code` with an optional description.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: [7 declared values](#refundadjustmentreasonrequestinput-code-values). |
| `description` | Optional | string | minLength: `1`. |

#### RefundAdjustmentReasonRequestInput code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

