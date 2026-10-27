[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionAllRemainingFulfilledInput

The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Optional | Array of [ReturnEligibilityLineItemRequestInput](../models/ReturnEligibilityLineItemRequestInput.md#returneligibilitylineitemrequestinput) |  |
| `selection_type` | Required | string | Values: `"all_remaining_fulfilled"`. |

