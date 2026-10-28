[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

