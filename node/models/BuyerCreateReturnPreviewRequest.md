[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnPreviewRequest

The request body for: Preview Return eligibility or resolution amounts for the current buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [CreateReturnEligibilityPreviewRequest](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [BuyerCreateReturnResolutionPreviewRequest](../models/BuyerCreateReturnResolutionPreviewRequest.md#buyercreatereturnresolutionpreviewrequest) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

### BuyerCreateReturnPreviewRequest variant 1: `mode` = `"eligibility"`

oneOf variant 1.

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### BuyerCreateReturnPreviewRequest variant 2: `mode` = `"resolution"`

oneOf variant 2.

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

