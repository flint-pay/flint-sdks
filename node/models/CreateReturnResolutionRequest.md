[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionRequest

The request body for: Create return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Conditional | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) |  |
| `corrects_return_resolution_id` | Conditional | string | minLength: `1`. |
| `expected_return_version` | Optional | integer string | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Conditional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `line_items[]`: [field definitions](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequest](../models/ReturnReplacementLineItemRequest.md#returnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |

### CreateReturnResolutionRequest variant 1

oneOf variant 1: The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of `CreateReturnResolutionRequest`..

- Condition: not (present(`corrects_return_resolution_id`)).
- Required: `line_items`.
- Optional: `adjustments`, `corrects_return_resolution_id`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `resolution_type`: Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`.

### CreateReturnResolutionRequest variant 2: `resolution_type` = `"correction"`

oneOf variant 2: The `correction` variant of `CreateReturnResolutionRequest`..

- Condition: not (at least one(present(`line_items`); present(`replacement_line_items`); present(`pricing_basis`))).
- Required: `adjustments`, `corrects_return_resolution_id`.
- Optional: `line_items`.
- Constraints for `adjustments`: minItems: `1`.
- Constraints for `resolution_type`: Values: `"correction"`.

### CreateReturnResolutionRequest variant 2.line_items[]

Field definitions: [BuyerCreateReturnResolutionPreviewRequest.line_items[]](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items).

