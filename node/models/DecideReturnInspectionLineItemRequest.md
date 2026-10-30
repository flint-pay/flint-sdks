[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DecideReturnInspectionLineItemRequest

The request body for: Decide return inspection line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decision_reason` | Required | string | Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. |
| `acceptance_decision_reason_message` | Optional | string | minLength: `1`. |
| `acceptance_status` | Required | string | Values: `"accepted"`, `"rejected"`. |
| `expected_version` | Optional | integer | Optional version of the return inspection. A stale value returns VERSION_CONFLICT with the inspection ID and its current version. Format: `int64`. minimum: `1`. |

