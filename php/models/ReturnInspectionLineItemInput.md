[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemInput

The inspection result for a returned item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `acceptance_decided_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `acceptance_decision_reason` | Optional | string | Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. |
| `acceptance_decision_reason_message` | Optional | string |  |
| `acceptance_status` | Required | string | Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `available_disposition_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `finding_codes` | Required | Array of string | Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `internal_note` | Optional | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_inspection_id` | Required | string |  |
| `return_inspection_line_item_id` | Required | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_receipt_line_item_id` | Required | string |  |
| `supported_actions` | Required | Array of string | Items values: `"decide"`. |

