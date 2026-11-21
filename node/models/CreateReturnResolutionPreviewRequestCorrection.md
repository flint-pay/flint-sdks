[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestCorrection

The `correction` variant of `CreateReturnResolutionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustmentRequest](../models/ReturnResolutionAdjustmentRequest.md#returnresolutionadjustmentrequest) | Fees and credits to apply to the resolution, at most 50. minItems: `1`. |
| `corrects_return_resolution_id` | Required | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. minLength: `1`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion would be refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action. An unsupported selection returns INVALID_REQUEST with a NOT_ALLOWED detail at resolution.gift_card_refund_destination and conflicting_fields naming resolution.resolution_type. Store credit and its corrections always issue new gift cards. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. minLength: `1`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |

