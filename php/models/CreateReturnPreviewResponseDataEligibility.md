[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibility

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

The `eligibility` variant of `CreateReturnPreviewData`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnPreviewResponseDataEligibilityEligibility](../models/CreateReturnPreviewResponseDataEligibilityEligibility.md#createreturnpreviewresponsedataeligibilityeligibility) | The eligibility check. Present when `mode` is `eligibility`. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. `eligibility`: [field definitions](../models/CreateReturnPreviewResponseDataEligibility.md#createreturnpreviewresponsedataeligibilityeligibility-fields-1). |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`. |
| `resolution` | Optional | [CreateReturnPreviewResponseDataEligibilityResolution](../models/CreateReturnPreviewResponseDataEligibilityResolution.md#createreturnpreviewresponsedataeligibilityresolution) | The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. `resolution`: [field definitions](../models/CreateReturnPreviewResponseDataEligibility.md#createreturnpreviewresponsedataeligibilityresolution-fields-1). |

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1

The eligibility check. Present when `mode` is `eligibility`. The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Field definitions: [shared fields](CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1).

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1.line_items[]

Field definitions: [CreateReturnPreviewResponse.data.eligibility fields 1.line_items[]](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1line_items).

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1.policy_evaluation

Field definitions: [CreateReturnPreviewResponse.data.eligibility fields 1.policy_evaluation](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1policy_evaluation).

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1.selection

Declared alternatives: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### CreateReturnPreviewResponseDataEligibility.resolution fields 1

The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Field definitions: [shared fields](CreateReturnPreviewResponse.md#createreturnpreviewresponsedataresolution-fields-1).

### CreateReturnPreviewResponseDataEligibility.resolution fields 1.adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments).

### CreateReturnPreviewResponseDataEligibility.resolution fields 1.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### CreateReturnPreviewResponseDataEligibility.resolution fields 1.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

