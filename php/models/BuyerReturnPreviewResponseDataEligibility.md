[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibility

A Return eligibility or resolution preview shown to the buyer, selected by mode.

The `eligibility` variant of `BuyerReturnPreview`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [BuyerReturnPreviewResponseDataEligibilityEligibility](../models/BuyerReturnPreviewResponseDataEligibilityEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibility) | The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/BuyerReturnPreviewResponseDataEligibility.md#buyerreturnpreviewresponsedataeligibilityeligibility-fields-1). |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`. |
| `resolution` | Optional | [BuyerReturnPreviewResponseDataEligibilityResolution](../models/BuyerReturnPreviewResponseDataEligibilityResolution.md#buyerreturnpreviewresponsedataeligibilityresolution) | The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/BuyerReturnPreviewResponseDataEligibility.md#buyerreturnpreviewresponsedataeligibilityresolution-fields-1). |

### BuyerReturnPreviewResponseDataEligibility.eligibility fields 1

The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Field definitions: [shared fields](BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1).

### BuyerReturnPreviewResponseDataEligibility.eligibility fields 1.line_items[]

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_items).

### BuyerReturnPreviewResponseDataEligibility.eligibility fields 1.policy_evaluation

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluation).

### BuyerReturnPreviewResponseDataEligibility.eligibility fields 1.selection

Declared alternatives: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### BuyerReturnPreviewResponseDataEligibility.resolution fields 1

The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Field definitions: [shared fields](BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1).

### BuyerReturnPreviewResponseDataEligibility.resolution fields 1.adjustments[]

Field definitions: [BuyerReturnPreviewResponse.data.resolution fields 1.adjustments[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1adjustments).

### BuyerReturnPreviewResponseDataEligibility.resolution fields 1.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### BuyerReturnPreviewResponseDataEligibility.resolution fields 1.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

