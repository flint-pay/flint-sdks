[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionLineItemRequest

The inspection result for one received return line: acceptance status, condition, and findings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Required | string | Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `finding_codes` | Optional | Array of string | Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `internal_note` | Optional | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_line_item_id` | Optional | string | minLength: `1`. |
| `return_receipt_line_item_id` | Required | string | minLength: `1`. |
| `verification_reason` | Optional | string | Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | minLength: `1`. |

