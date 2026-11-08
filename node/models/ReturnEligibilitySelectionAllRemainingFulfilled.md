[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionAllRemainingFulfilled







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | The lines to check or return, each naming an order line item. `line_items[]`: [field definitions](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection-variant-1line_items), [field definitions](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection-variant-1line_items). |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`. |

### ReturnEligibilitySelectionAllRemainingFulfilled variant 1: `selection_type` = `"all_remaining_fulfilled"`

anyOf ReturnEligibilitySelectionAllRemainingFulfilled: Declared schema ReturnEligibilitySelectionAllRemainingFulfilled. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).

### ReturnEligibilitySelectionAllRemainingFulfilled variant 2: `selection_type` = `"all_remaining_fulfilled"`

anyOf ReturnEligibilitySelectionAllRemainingFulfilled: Declared schema ReturnEligibilitySelectionAllRemainingFulfilledRequest. The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).

### ReturnEligibilitySelectionAllRemainingFulfilled variant 1.line_items[]

Field definitions: [BuyerReturnEligibilityPreview.selection variant 1.line_items[]](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection-variant-1line_items).

### ReturnEligibilitySelectionAllRemainingFulfilled variant 2.line_items[]

Field definitions: [CreateReturnEligibilityPreviewRequest.selection variant 1.line_items[]](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequestselection-variant-1line_items).

