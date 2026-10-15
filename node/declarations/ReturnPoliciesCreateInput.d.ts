import type { InputValue } from '../runtime.js';
import type { CreateReturnPolicyRequestInput } from './CreateReturnPolicyRequestInput.js';

export type ReturnPoliciesCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateReturnPolicyRequestInput>; };
