[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DecideReturnInspectionLineItemRequestInput

The request body for: Decide return inspection line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decision_reason` | Required | string | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. |
| `acceptance_decision_reason_message` | Optional | string | Detail about `acceptance_decision_reason`. minLength: `1`. |
| `acceptance_status` | Required | string | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`. |
| `expected_version` | Optional | integer | Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the inspection ID and its current version. Format: `int64`. minimum: `1`. |

