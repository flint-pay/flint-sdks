[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnResolutionPreviewRequestInput

The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) | minItems: `1`. |
| `replacement_line_items` | Optional | Array of [BuyerReturnReplacementLineItemRequestInput](../models/BuyerReturnReplacementLineItemRequestInput.md#buyerreturnreplacementlineitemrequestinput) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`. |
| `return_id` | Required | string | minLength: `1`. |

