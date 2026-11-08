[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VerifyReturnReceiptLineItemRequestInput

The request body for: Verify return receipt line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the receipt ID and its current version. Format: `int64`. minimum: `1`. |
| `return_line_item_id` | Required | string | ID of the Return line the units were matched to. Absent for unverified units. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `verification_reason` | Required | string | Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | Detail about `verification_reason`. minLength: `1`. |

