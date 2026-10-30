[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem.md#createreturnpreviewresponsedataeligibilityeligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

