[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnPreviewRequestResolution

The `resolution` variant of `BuyerCreateReturnPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequest](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [BuyerCreateReturnResolutionPreviewRequest](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

