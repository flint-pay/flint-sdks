[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublishReturnPolicyRevisionRequestInput

The request body for: Publish return policy revision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_return_policy_version` | Required | integer | Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Format: `int64`. minimum: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput) | The revision with the complete rules. A field you leave out doesn't carry over from the previous revision. The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |

