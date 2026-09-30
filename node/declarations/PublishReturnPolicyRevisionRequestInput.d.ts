
import type { ReturnPolicyRevisionRequestInput } from './ReturnPolicyRevisionRequestInput.js';

export type PublishReturnPolicyRevisionRequestInput = { "expected_current_return_policy_revision_id": string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "revision": ReturnPolicyRevisionRequestInput; };
