[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemRequest

The inspection result for one received return line: acceptance status, condition, and findings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Required | string | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `finding_codes` | Optional | Array of string | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `internal_note` | Optional | string | Note for your own team about this line. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Optional | string | ID of the Return line inspected. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_receipt_line_item_id` | Required | string | ID of the receipt line inspected. minLength: `1`. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. |
| `verification_reason` | Optional | string | Why the receipt line was verified against the Return line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | Detail about `verification_reason`. minLength: `1`. |

