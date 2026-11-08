[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilled

The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of ([BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityeligibilityselectionallremainingfulfilledlineitemsitem) and object) | The lines to check or return, each naming an order line item. |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`. |

