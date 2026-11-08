[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilitySelectionLineItems







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | The lines to check or return, each naming an order line item. minItems: `1`. |
| `selection_type` | Required | string | How the selection picks units. Values: `"line_items"`. |

### ReturnEligibilitySelectionLineItems variant 1: `selection_type` = `"line_items"`

anyOf ReturnEligibilitySelectionLineItems: Declared schema ReturnEligibilitySelectionLineItems. The `line_items` variant of `ReturnEligibilitySelection`..

No additional constraints.

### ReturnEligibilitySelectionLineItems variant 2: `selection_type` = `"line_items"`

anyOf ReturnEligibilitySelectionLineItems: Declared schema ReturnEligibilitySelectionLineItemsRequest. The `line_items` variant of `ReturnEligibilitySelection`..

No additional constraints.

