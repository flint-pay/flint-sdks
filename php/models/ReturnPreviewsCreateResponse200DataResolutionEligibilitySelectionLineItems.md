[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem.md#returnpreviewscreateresponse200dataresolutioneligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

