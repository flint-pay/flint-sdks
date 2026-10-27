[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResolutionRequestInput

The resolution to apply to a returned item, such as refund or exchange, with the quantity and any replacement items.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `pricing_basis` | Optional | string | Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequestInput.md#returnreplacementlineitemrequestinput) |  |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |

