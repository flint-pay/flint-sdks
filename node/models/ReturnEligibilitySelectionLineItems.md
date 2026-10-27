[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

