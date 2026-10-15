import type { InputValue } from '../runtime.js';
import type { CreateReturnResolutionRequestInput } from './CreateReturnResolutionRequestInput.js';

export type ReturnsCreateResolutionInput = { "return_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateReturnResolutionRequestInput>; };
