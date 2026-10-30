[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestCorrectionInput

The `correction` variant of `CreateReturnResolutionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequestInput.md#returnresolutionadjustmentrequestinput) | minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | minLength: `1`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `resolution_type` | Required | string | Values: `"correction"`. |
| `return_id` | Required | string | minLength: `1`. |

