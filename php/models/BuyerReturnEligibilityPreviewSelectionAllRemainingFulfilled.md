[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilled

Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of ([BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilledLineItemsItem](../models/BuyerReturnEligibilityPreviewSelectionAllRemainingFulfilledLineItemsItem.md#buyerreturneligibilitypreviewselectionallremainingfulfilledlineitemsitem) and object) |  |
| `selection_type` | Required | string | Values: `"all_remaining_fulfilled"`. |

