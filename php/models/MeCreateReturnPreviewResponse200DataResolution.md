[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolution

A Return eligibility or resolution preview shown to the buyer, selected by mode.

The `resolution` variant of `BuyerReturnPreview`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [MeCreateReturnPreviewResponse200DataResolutionEligibility](../models/MeCreateReturnPreviewResponse200DataResolutionEligibility.md#mecreatereturnpreviewresponse200dataresolutioneligibility) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/MeCreateReturnPreviewResponse200DataResolution.md#mecreatereturnpreviewresponse200dataresolutioneligibility-fields-1). |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolution](../models/MeCreateReturnPreviewResponse200DataResolutionResolution.md#mecreatereturnpreviewresponse200dataresolutionresolution) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/MeCreateReturnPreviewResponse200DataResolution.md#mecreatereturnpreviewresponse200dataresolutionresolution-fields-1). |

### MeCreateReturnPreviewResponse200DataResolution.eligibility fields 1

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Field definitions: [shared fields](MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1).

### MeCreateReturnPreviewResponse200DataResolution.eligibility fields 1.line_items[]

Field definitions: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.line_items[]](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1line_items).

### MeCreateReturnPreviewResponse200DataResolution.eligibility fields 1.policy_evaluation

Field definitions: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluation).

### MeCreateReturnPreviewResponse200DataResolution.eligibility fields 1.selection

Declared alternatives: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1selection).

### MeCreateReturnPreviewResponse200DataResolution.resolution fields 1

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Field definitions: [shared fields](MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataresolution-fields-1).

