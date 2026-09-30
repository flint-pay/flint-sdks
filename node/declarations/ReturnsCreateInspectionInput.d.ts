import type { InputValue } from '../runtime.js';
import type { CreateReturnInspectionRequestInput } from './CreateReturnInspectionRequestInput.js';

export type ReturnsCreateInspectionInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateReturnInspectionRequestInput>; };
