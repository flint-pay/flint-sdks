[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestCorrectionInput

The `correction` variant of `CreateReturnResolutionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequestInput.md#returnresolutionadjustmentrequestinput) | minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) |  |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequestInput.md#returnreplacementlineitemrequestinput) |  |
| `resolution_type` | Required | string | Values: `"correction"`. |
| `return_id` | Required | string | minLength: `1`. |

