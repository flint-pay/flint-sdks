import type { InputValue } from '../runtime.js';
import type { UpdateReturnResolutionRequestInput } from './UpdateReturnResolutionRequestInput.js';

export type ReturnResolutionsUpdateInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body": InputValue<UpdateReturnResolutionRequestInput>; };
