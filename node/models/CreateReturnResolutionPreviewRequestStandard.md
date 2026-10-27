[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestStandard

The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of `CreateReturnResolutionPreviewRequest`. The `replacement` variant of `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of `CreateReturnResolutionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) |  |
| `corrects_return_resolution_id` | Optional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | minItems: `1`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequest](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_id` | Required | string | minLength: `1`. |

