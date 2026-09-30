import type { InputValue } from '../runtime.js';
import type { PublishReturnPolicyRevisionRequestInput } from './PublishReturnPolicyRevisionRequestInput.js';

export type ReturnPoliciesPublishRevisionInput = { "return_policy_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<PublishReturnPolicyRevisionRequestInput>; };
