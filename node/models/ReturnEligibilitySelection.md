[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelection

Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) |  |
| `selection_type` | Required | string | Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### ReturnEligibilitySelection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf variant 1: The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### ReturnEligibilitySelection variant 2: `selection_type` = `"line_items"`

oneOf variant 2: The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

