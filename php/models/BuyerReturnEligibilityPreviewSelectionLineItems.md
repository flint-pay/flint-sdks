[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewSelectionLineItems

Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([BuyerReturnEligibilityPreviewSelectionLineItemsLineItemsItem](../models/BuyerReturnEligibilityPreviewSelectionLineItemsLineItemsItem.md#buyerreturneligibilitypreviewselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

