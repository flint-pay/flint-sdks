[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnPreviewRequestInput

The request body for: Preview Return eligibility or resolution amounts for the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequestInput.md#buyercreatereturnresolutionpreviewrequestinput) | The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

### BuyerCreateReturnPreviewRequestInput variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `BuyerCreateReturnPreviewRequest`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### BuyerCreateReturnPreviewRequestInput variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `BuyerCreateReturnPreviewRequest`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

