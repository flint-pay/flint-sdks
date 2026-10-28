[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibility

A Return eligibility or resolution preview shown to the buyer, selected by mode.

The `eligibility` variant of `BuyerReturnPreview`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibility](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibility) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/MeCreateReturnPreviewResponse200DataEligibility.md#mecreatereturnpreviewresponse200dataeligibilityeligibility-fields-1). |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [MeCreateReturnPreviewResponse200DataEligibilityResolution](../models/MeCreateReturnPreviewResponse200DataEligibilityResolution.md#mecreatereturnpreviewresponse200dataeligibilityresolution) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/MeCreateReturnPreviewResponse200DataEligibility.md#mecreatereturnpreviewresponse200dataeligibilityresolution-fields-1). |

### MeCreateReturnPreviewResponse200DataEligibility.eligibility fields 1

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Field definitions: [shared fields](MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1).

### MeCreateReturnPreviewResponse200DataEligibility.eligibility fields 1.line_items[]

Field definitions: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.line_items[]](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1line_items).

### MeCreateReturnPreviewResponse200DataEligibility.eligibility fields 1.policy_evaluation

Field definitions: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluation).

### MeCreateReturnPreviewResponse200DataEligibility.eligibility fields 1.selection

Declared alternatives: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1selection).

### MeCreateReturnPreviewResponse200DataEligibility.resolution fields 1

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Field definitions: [shared fields](MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataresolution-fields-1).

