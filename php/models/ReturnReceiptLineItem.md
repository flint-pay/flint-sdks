[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItem

A returned item recorded as received.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_disposition_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Optional | string | ID of the Return line the units were matched to. Absent for unverified units. |
| `return_receipt_id` | Required | string | ID of the receipt the line belongs to. |
| `return_receipt_line_item_id` | Required | string | Unique identifier for this return receipt line item, prefixed `retrcli_`. |
| `supported_actions` | Required | Array of string | Items values: `"verify"`. |
| `unverified_item` | Optional | [ReturnUnverifiedItem](../models/ReturnUnverifiedItem.md#returnunverifieditem) | What the operator recorded for units that match no line. Present on `unverified` lines. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description. |
| `verification_reason` | Optional | string | Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | Detail about `verification_reason`. |
| `verification_status` | Required | string | Whether the units are matched to a line. Values: `"matched"`, `"unverified"`, `"excess"`. |
| `verified_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `verified_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who verified the line. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `verified_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_itemsverified_by). |

### ReturnReceiptLineItem.verified_by

Field definitions: [CancelReturnResponse.data.return_receipts[].line_items[].verified_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_itemsverified_by).

