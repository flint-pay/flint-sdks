[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnResolutionPreviewRequestStandardInput

The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of `CreateReturnResolutionPreviewRequest`. The `replacement` variant of `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of `CreateReturnResolutionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequestInput.md#returnresolutionadjustmentrequestinput) | Fees and credits to apply to the resolution, at most 50. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion would be refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action. An unsupported selection returns INVALID_REQUEST with a NOT_ALLOWED detail at resolution.gift_card_refund_destination and conflicting_fields naming resolution.resolution_type. Store credit and its corrections always issue new gift cards. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) | Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: `1`. |
| `pricing_basis` | Optional | string | Required for merchant exchange and replacement requests. original_price preserves the selected units' net paid amounts using refund allocation; current_price uses catalog prices; merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit pricing_basis: replacements use original_price; exchanges use original_price when every replacement matches selected returned merchandise by variant, bundle, or product, otherwise current_price. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequestInput.md#returnreplacementlineitemrequestinput) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. minLength: `1`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |

