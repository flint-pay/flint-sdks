[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibility

A return preview, selected by `mode`: either the eligibility of the selected items or the amounts of a resolution.

The `eligibility` variant of `CreateReturnPreviewData`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [ReturnPreviewsCreateResponse200DataEligibilityEligibility](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibility.md#returnpreviewscreateresponse200dataeligibilityeligibility) | The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation. `eligibility`: [field definitions](../models/ReturnPreviewsCreateResponse200DataEligibility.md#returnpreviewscreateresponse200dataeligibilityeligibility-fields-1). |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [ReturnPreviewsCreateResponse200DataEligibilityResolution](../models/ReturnPreviewsCreateResponse200DataEligibilityResolution.md#returnpreviewscreateresponse200dataeligibilityresolution) | A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer. `resolution`: [field definitions](../models/ReturnPreviewsCreateResponse200DataEligibility.md#returnpreviewscreateresponse200dataeligibilityresolution-fields-1). |

### ReturnPreviewsCreateResponse200DataEligibility.eligibility fields 1

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.

Field definitions: [shared fields](ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1).

### ReturnPreviewsCreateResponse200DataEligibility.eligibility fields 1.line_items[]

Field definitions: [ReturnPreviewsCreateResponse200.data.eligibility fields 1.line_items[]](../models/ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1line_items).

### ReturnPreviewsCreateResponse200DataEligibility.eligibility fields 1.selection

Declared alternatives: [ReturnPreviewsCreateResponse200.data.eligibility fields 1.selection](../models/ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataeligibility-fields-1selection).

### ReturnPreviewsCreateResponse200DataEligibility.resolution fields 1

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.

Field definitions: [shared fields](ReturnPreviewsCreateResponse200.md#returnpreviewscreateresponse200dataresolution-fields-1).

