[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptLineItem

A returned item recorded as received.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_disposition_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_id` | Required | string |  |
| `return_receipt_line_item_id` | Required | string |  |
| `supported_actions` | Required | Array of string | Items values: `"verify"`. |
| `unverified_item` | Optional | [ReturnUnverifiedItem](../models/ReturnUnverifiedItem.md#returnunverifieditem) | Merchandise received in a return that does not match an expected return line, described by name, SKU, and description. |
| `verification_reason` | Optional | string | Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string |  |
| `verification_status` | Required | string | Values: `"matched"`, `"unverified"`, `"excess"`. |
| `verified_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `verified_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |

