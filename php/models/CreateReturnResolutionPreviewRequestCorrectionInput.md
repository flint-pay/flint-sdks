[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestCorrectionInput

The `correction` variant of `CreateReturnResolutionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequestInput.md#returnresolutionadjustmentrequestinput) | Fees and credits to apply to the resolution, at most 50. minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. minLength: `1`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. minLength: `1`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |

