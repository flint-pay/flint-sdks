[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItem

The inspection result for a returned item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `acceptance_decided_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who made the acceptance decision. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `acceptance_decided_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_itemsacceptance_decided_by). |
| `acceptance_decision_reason` | Optional | string | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. |
| `acceptance_decision_reason_message` | Optional | string | Detail about `acceptance_decision_reason`. |
| `acceptance_status` | Required | string | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `available_disposition_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `finding_codes` | Required | Array of string | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `internal_note` | Optional | string | Note for your own team about this line. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_id` | Required | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. |
| `return_inspection_id` | Required | string | ID of the inspection the line belongs to. |
| `return_inspection_line_item_id` | Required | string | Unique identifier for this return inspection line item, prefixed `retinli_`. |
| `return_line_item_id` | Optional | string | ID of the Return line inspected. |
| `return_receipt_id` | Required | string | Receipt that owns return_receipt_line_item_id. |
| `return_receipt_line_item_id` | Required | string | ID of the receipt line inspected. |
| `supported_actions` | Required | Array of string | Items values: `"decide"`. |

### ReturnInspectionLineItem.acceptance_decided_by

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[].acceptance_decided_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_itemsacceptance_decided_by).

