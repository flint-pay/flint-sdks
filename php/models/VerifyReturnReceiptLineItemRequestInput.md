[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VerifyReturnReceiptLineItemRequestInput

The request body for: Verify return receipt line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `return_line_item_id` | Required | string | minLength: `1`. |
| `verification_reason` | Required | string | Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | minLength: `1`. |

