[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityEligibilitySelectionLineItems

The `line_items` variant of `ReturnEligibilitySelection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of ([ReturnPreviewsCreateResponse200DataEligibilityEligibilitySelectionLineItemsLineItemsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibilitySelectionLineItemsLineItemsItem.md#returnpreviewscreateresponse200dataeligibilityeligibilityselectionlineitemslineitemsitem) and object) | minItems: `1`. |
| `selection_type` | Required | string | Values: `"line_items"`. |

