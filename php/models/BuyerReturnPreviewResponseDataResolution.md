[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolution

A Return eligibility or resolution preview shown to the buyer, selected by mode.

The `resolution` variant of `BuyerReturnPreview`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [BuyerReturnPreviewResponseDataResolutionEligibility](../models/BuyerReturnPreviewResponseDataResolutionEligibility.md#buyerreturnpreviewresponsedataresolutioneligibility) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/BuyerReturnPreviewResponseDataResolution.md#buyerreturnpreviewresponsedataresolutioneligibility-fields-1). |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [BuyerReturnPreviewResponseDataResolutionResolution](../models/BuyerReturnPreviewResponseDataResolutionResolution.md#buyerreturnpreviewresponsedataresolutionresolution) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/BuyerReturnPreviewResponseDataResolution.md#buyerreturnpreviewresponsedataresolutionresolution-fields-1). |

### BuyerReturnPreviewResponseDataResolution.eligibility fields 1

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

Field definitions: [shared fields](BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1).

### BuyerReturnPreviewResponseDataResolution.eligibility fields 1.line_items[]

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[]](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_items).

### BuyerReturnPreviewResponseDataResolution.eligibility fields 1.policy_evaluation

Field definitions: [BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluation).

### BuyerReturnPreviewResponseDataResolution.eligibility fields 1.selection

Declared alternatives: [BuyerReturnPreviewResponse.data.eligibility fields 1.selection](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection).

### BuyerReturnPreviewResponseDataResolution.resolution fields 1

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

Field definitions: [shared fields](BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1).

