[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibility

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

The `eligibility` variant of `CreateReturnPreviewData`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnPreviewResponseDataEligibilityEligibility](../models/CreateReturnPreviewResponseDataEligibilityEligibility.md#createreturnpreviewresponsedataeligibilityeligibility) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. `eligibility`: [field definitions](../models/CreateReturnPreviewResponseDataEligibility.md#createreturnpreviewresponsedataeligibilityeligibility-fields-1). |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [CreateReturnPreviewResponseDataEligibilityResolution](../models/CreateReturnPreviewResponseDataEligibilityResolution.md#createreturnpreviewresponsedataeligibilityresolution) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. `resolution`: [field definitions](../models/CreateReturnPreviewResponseDataEligibility.md#createreturnpreviewresponsedataeligibilityresolution-fields-1). |

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Field definitions: [shared fields](CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1).

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1.line_items[]

Field definitions: [CreateReturnPreviewResponse.data.eligibility fields 1.line_items[]](../models/CreateReturnPreviewResponse.md#createreturnpreviewresponsedataeligibility-fields-1line_items).

### CreateReturnPreviewResponseDataEligibility.eligibility fields 1.selection

Declared alternatives: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### CreateReturnPreviewResponseDataEligibility.resolution fields 1

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Field definitions: [shared fields](CreateReturnPreviewResponse.md#createreturnpreviewresponsedataresolution-fields-1).

