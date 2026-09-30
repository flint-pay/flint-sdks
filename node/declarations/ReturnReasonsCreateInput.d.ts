import type { InputValue } from '../runtime.js';
import type { CreateReturnReasonRequestInput } from './CreateReturnReasonRequestInput.js';

export type ReturnReasonsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReturnReasonRequestInput>; };
