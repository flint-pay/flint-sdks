[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequest

A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Conditional | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) |  |
| `corrects_return_resolution_id` | Conditional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `line_items` | Conditional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `line_items[]`: [field definitions](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items). |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequest](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | minLength: `1`. |

### CreateReturnResolutionPreviewRequest variant 1

oneOf with resolution_type: "exchange" | "no_monetary_action" | "refund" | "replacement" | "store_credit": The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of `CreateReturnResolutionPreviewRequest`. The `replacement` variant of `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of `CreateReturnResolutionPreviewRequest`..

- Condition: not (present(`corrects_return_resolution_id`)).
- Required: `line_items`.
- Optional: `adjustments`, `corrects_return_resolution_id`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `resolution_type`: Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`.

### CreateReturnResolutionPreviewRequest variant 2: `resolution_type` = `"correction"`

oneOf with resolution_type: "correction": The `correction` variant of `CreateReturnResolutionPreviewRequest`..

- Condition: not (at least one(present(`line_items`); present(`replacement_line_items`); present(`pricing_basis`))).
- Required: `adjustments`, `corrects_return_resolution_id`.
- Optional: `line_items`.
- Constraints for `adjustments`: minItems: `1`.
- Constraints for `resolution_type`: Values: `"correction"`.

### CreateReturnResolutionPreviewRequest variant 2.line_items[]

Field definitions: [BuyerCreateReturnResolutionPreviewRequest.line_items[]](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items).

