[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItemsLineItemsItem](../models/BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItemsLineItemsItem.md#buyerreturnpreviewresponsedataresolutioneligibilityselectionlineitemslineitemsitem) and object) | The lines to check or return, each naming an order line item. minItems: `1`. |
| `selection_type` | Required | string | How the selection picks units. Values: `"line_items"`. |

