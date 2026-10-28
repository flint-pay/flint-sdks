[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataResolution

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

The `resolution` variant of `CreateReturnPreviewData`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [ReturnPreviewsCreateResponse200DataResolutionEligibility](../models/ReturnPreviewsCreateResponse200DataResolutionEligibility.md#returnpreviewscreateresponse200dataresolutioneligibility) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. `eligibility`: [field definitions](../models/ReturnPreviewsCreateResponse200DataResolution.md#returnpreviewscreateresponse200dataresolutioneligibility-fields-1). |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolution](../models/ReturnPreviewsCreateResponse200DataResolutionResolution.md#returnpreviewscreateresponse200dataresolutionresolution) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. `resolution`: [field definitions](../models/ReturnPreviewsCreateResponse200DataResolution.md#returnpreviewscreateresponse200dataresolutionresolution-fields-1). |

### ReturnPreviewsCreateResponse200DataResolution.eligibility fields 1

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Field definitions: [shared fields](ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1).

### ReturnPreviewsCreateResponse200DataResolution.eligibility fields 1.line_items[]

Field definitions: [ReturnPreviewsCreateResponse200.data.eligibility fields 1.line_items[]](../models/ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1line_items).

### ReturnPreviewsCreateResponse200DataResolution.eligibility fields 1.selection

Declared alternatives: [MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1selection).

### ReturnPreviewsCreateResponse200DataResolution.resolution fields 1

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Field definitions: [shared fields](ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataresolution-fields-1).

