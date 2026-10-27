[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnEligibilityPreviewRequestInput

A request to preview which items of an order can be returned, given an order and a selection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | minLength: `1`. |
| `selection` | Required | [ReturnEligibilitySelectionInput](../models/ReturnEligibilitySelectionInput.md#returneligibilityselectioninput) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |

