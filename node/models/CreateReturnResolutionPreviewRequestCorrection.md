[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestCorrection

The `correction` variant of `CreateReturnResolutionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) | minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `line_items[]`: [field definitions](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items). |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequest](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"correction"`. |
| `return_id` | Required | string | minLength: `1`. |

### CreateReturnResolutionPreviewRequestCorrection.line_items[]

Field definitions: [BuyerCreateReturnResolutionPreviewRequest.line_items[]](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items).

