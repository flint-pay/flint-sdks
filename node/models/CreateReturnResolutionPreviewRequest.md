[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequest

A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Conditional | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) | Fees and credits to apply to the resolution, at most 50. |
| `corrects_return_resolution_id` | Conditional | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. minLength: `1`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `line_items` | Conditional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | Return lines and quantities to cover, up to 100. Not allowed on a correction. `line_items[]`: [field definitions](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items). |
| `pricing_basis` | Optional | string | Required for merchant exchange and replacement requests. original_price preserves the selected units' net paid amounts using refund allocation; current_price uses catalog prices; merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit pricing_basis: replacements use original_price; exchanges use original_price when every replacement matches selected returned merchandise by variant, bundle, or product, otherwise current_price. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequest](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. minLength: `1`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |

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

