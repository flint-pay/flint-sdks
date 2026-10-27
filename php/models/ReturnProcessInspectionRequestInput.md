[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnProcessInspectionRequestInput

An inspection result for a returned item, supplied when processing an existing return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Required | string | Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `condition` | Required | string | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `finding_codes` | Optional | Array of string | Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. |
| `inspected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `internal_note` | Optional | string | minLength: `1`. |

