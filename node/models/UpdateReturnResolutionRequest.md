[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnResolutionRequest

The request body for: Update return resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [UpdateReturnResolutionAdjustmentRequest](../models/UpdateReturnResolutionAdjustmentRequest.md#updatereturnresolutionadjustmentrequest) | Requires expected_version. |
| `expected_version` | Optional | integer string | Required when any of these fields is present: line_items, replacement_line_items, adjustments. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [UpdateReturnResolutionLineItemRequest](../models/UpdateReturnResolutionLineItemRequest.md#updatereturnresolutionlineitemrequest) | Requires expected_version. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [UpdateReturnReplacementLineItemRequest](../models/UpdateReturnReplacementLineItemRequest.md#updatereturnreplacementlineitemrequest) | Requires expected_version. |

