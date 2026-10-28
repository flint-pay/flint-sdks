[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublishReturnPolicyRevisionRequestInput

The request body for: Publish return policy revision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Required | integer string | Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput) | The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |

