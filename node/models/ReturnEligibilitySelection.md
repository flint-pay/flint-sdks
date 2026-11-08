[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelection







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | The lines to check or return, each naming an order line item. `line_items[]`: [field definitions](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection-variant-1line_items), [field definitions](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection-variant-1line_items). |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### ReturnEligibilitySelection variant 1: `selection_type` = `"all_remaining_fulfilled"`

anyOf variant 1: Declared schema ReturnEligibilitySelection. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.; oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### ReturnEligibilitySelection variant 2: `selection_type` = `"line_items"`

anyOf variant 1: Declared schema ReturnEligibilitySelection. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.; oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### ReturnEligibilitySelection variant 3: `selection_type` = `"all_remaining_fulfilled"`

anyOf variant 2: Declared schema ReturnEligibilitySelectionRequest. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.; oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### ReturnEligibilitySelection variant 4: `selection_type` = `"line_items"`

anyOf variant 2: Declared schema ReturnEligibilitySelectionRequest. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.; oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### ReturnEligibilitySelection variant 1.line_items[]

Field definitions: [BuyerReturnEligibilityPreview.selection variant 1.line_items[]](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection-variant-1line_items).

### ReturnEligibilitySelection variant 3.line_items[]

Field definitions: [CreateReturnEligibilityPreviewRequest.selection variant 1.line_items[]](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection-variant-1line_items).

