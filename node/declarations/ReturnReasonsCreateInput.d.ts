import type { InputValue } from '../runtime.js';
import type { CreateReturnReasonRequestInput } from './CreateReturnReasonRequestInput.js';

export type ReturnReasonsCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateReturnReasonRequestInput>; };
