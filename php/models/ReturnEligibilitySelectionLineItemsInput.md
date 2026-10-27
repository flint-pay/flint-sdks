[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionLineItemsInput

The `line_items` variant of `ReturnEligibilitySelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnEligibilityLineItemRequestInput](../models/ReturnEligibilityLineItemRequestInput.md#returneligibilitylineitemrequestinput) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

