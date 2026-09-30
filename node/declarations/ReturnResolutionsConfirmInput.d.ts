import type { InputValue } from '../runtime.js';
import type { ConfirmReturnResolutionRequestInput } from './ConfirmReturnResolutionRequestInput.js';

export type ReturnResolutionsConfirmInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConfirmReturnResolutionRequestInput>; };
