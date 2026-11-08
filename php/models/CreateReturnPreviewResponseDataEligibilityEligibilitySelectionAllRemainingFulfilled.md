[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilled

The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem.md#createreturnpreviewresponsedataeligibilityeligibilityselectionallremainingfulfilledlineitemsitem) and object) | The lines to check or return, each naming an order line item. |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`. |

