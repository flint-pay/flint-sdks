[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnEligibilityPreviewRequest

A request to preview which items of an order can be returned, given an order and a selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | minLength: `1`. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |

