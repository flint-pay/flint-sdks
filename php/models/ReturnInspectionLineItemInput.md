[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemInput

The inspection result for a returned item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `acceptance_decided_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who made the acceptance decision. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `acceptance_decision_reason` | Optional | string | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. |
| `acceptance_decision_reason_message` | Optional | string | Detail about `acceptance_decision_reason`. |
| `acceptance_status` | Required | string | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `available_disposition_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `finding_codes` | Required | Array of string | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `internal_note` | Optional | string | Note for your own team about this line. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_inspection_id` | Required | string | ID of the inspection the line belongs to. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `return_inspection_line_item_id` | Required | string | Unique identifier for this return inspection line item, prefixed `retinli_`. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. |
| `return_line_item_id` | Optional | string | ID of the Return line inspected. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_receipt_line_item_id` | Required | string | ID of the receipt line inspected. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. |
| `supported_actions` | Required | Array of string | Items values: `"decide"`. |

