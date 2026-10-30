[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem](../models/BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem.md#buyerreturnpreviewresponsedataeligibilityeligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

