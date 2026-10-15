import type { InputValue } from '../runtime.js';
import type { UpdateReturnPolicyRequestInput } from './UpdateReturnPolicyRequestInput.js';

export type ReturnPoliciesUpdateInput = { "return_policy_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<UpdateReturnPolicyRequestInput>; };
