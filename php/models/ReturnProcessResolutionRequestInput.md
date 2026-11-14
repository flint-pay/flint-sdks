[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessResolutionRequestInput

The resolution to apply to a returned item, such as refund or exchange, with the quantity and any replacement items.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Required for merchant exchange and replacement requests. original_price preserves the selected units' net paid amounts using refund allocation; current_price uses catalog prices; merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit pricing_basis: replacements use original_price; exchanges use original_price when every replacement matches selected returned merchandise by variant, bundle, or product, otherwise current_price. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequestInput.md#returnreplacementlineitemrequestinput) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |

