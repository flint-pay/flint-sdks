[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionLineItemsRequestInput

The `line_items` variant of `ReturnEligibilitySelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnEligibilityLineItemRequestModelInput](../models/ReturnEligibilityLineItemRequestModelInput.md#returneligibilitylineitemrequestmodelinput) | The lines to check or return, each naming an order line item. minItems: `1`. |
| `selection_type` | Required | string | How the selection picks units. Values: `"line_items"`. |

