[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnResolutionPreviewRequest

The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | minItems: `1`. `line_items[]`: [field definitions](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequestline_items). |
| `replacement_line_items` | Optional | Array of [BuyerReturnReplacementLineItemRequest](../models/BuyerReturnReplacementLineItemRequest.md#buyerreturnreplacementlineitemrequest) |  |
| `resolution_type` | Required | string | The proposed resolution type. For store_credit, send a nonempty line_items list and omit replacement_line_items. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_id` | Required | string | minLength: `1`. |

### BuyerCreateReturnResolutionPreviewRequest.line_items[]

A return line and quantity to include in a return resolution.

Field definitions: [shared fields](ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput).

