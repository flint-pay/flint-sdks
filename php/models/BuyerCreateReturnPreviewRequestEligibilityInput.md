[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreateReturnPreviewRequestEligibilityInput

The `eligibility` variant of `BuyerCreateReturnPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequestInput.md#createreturneligibilitypreviewrequestinput) | The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`. |
| `resolution` | Optional | [BuyerCreateReturnResolutionPreviewRequestInput](../models/BuyerCreateReturnResolutionPreviewRequestInput.md#buyercreatereturnresolutionpreviewrequestinput) | The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return. |

