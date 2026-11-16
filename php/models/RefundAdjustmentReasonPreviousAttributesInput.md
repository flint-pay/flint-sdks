[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentReasonPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Why the adjustment was made. Values: [7 declared values](#refundadjustmentreasonpreviousattributesinput-code-values). `code`: [declared alternatives](../models/RefundAdjustmentReasonPreviousAttributesInput.md#refundadjustmentreasonpreviousattributesinputcode). |
| `description` | Optional | string or null | Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. `description`: [declared alternatives](../models/RefundAdjustmentReasonPreviousAttributesInput.md#refundadjustmentreasonpreviousattributesinputdescription). |

#### RefundAdjustmentReasonPreviousAttributesInput code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundAdjustmentReasonPreviousAttributesInput.code

### RefundAdjustmentReasonPreviousAttributesInput.code variant 1

anyOf variant 1: Why the adjustment was made..

- Value shape: string. Why the adjustment was made. Values: `"customer_agreement"`, `"jurisdiction_specific_rule"`, `"merchant_policy"`, `"customer_request"`, `"restocking_policy"`, `"manual_tax_correction"`, `"other"`.

### RefundAdjustmentReasonPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. Why the adjustment was made. 

### RefundAdjustmentReasonPreviousAttributesInput.description

### RefundAdjustmentReasonPreviousAttributesInput.description variant 1

anyOf variant 1: Note explaining the reason, up to 1,024 characters. Required when `code` is `other`..

- Value shape: string. Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. 

### RefundAdjustmentReasonPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Note explaining the reason, up to 1,024 characters. Required when `code` is `other`. 

