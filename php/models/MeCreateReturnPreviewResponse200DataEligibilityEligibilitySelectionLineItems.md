[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItemsLineItemsItem](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionLineItemsLineItemsItem.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

