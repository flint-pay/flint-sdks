[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionAllRemainingFulfilledRequestInput

The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of [ReturnEligibilityLineItemRequestModelInput](../models/ReturnEligibilityLineItemRequestModelInput.md#returneligibilitylineitemrequestmodelinput) | The lines to check or return, each naming an order line item. |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`. |

