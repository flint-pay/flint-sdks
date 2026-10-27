[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200

A response containing `BuyerReturnPreview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | A Return eligibility or resolution preview shown to the buyer, selected by mode. `data`: [declared alternatives](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeCreateReturnPreviewResponse200.data

A Return eligibility or resolution preview shown to the buyer, selected by mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | [BuyerReturnEligibilityPreview](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreview) | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | [BuyerReturnResolutionPreview](../models/BuyerReturnResolutionPreview.md#buyerreturnresolutionpreview) | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. |

### MeCreateReturnPreviewResponse200.data variant 1: `mode` = `"eligibility"`

oneOf variant 1.

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### MeCreateReturnPreviewResponse200.data variant 2: `mode` = `"resolution"`

oneOf variant 2.

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

