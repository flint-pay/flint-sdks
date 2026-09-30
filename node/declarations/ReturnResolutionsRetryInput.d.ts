import type { InputValue } from '../runtime.js';
import type { RetryReturnResolutionRequestInput } from './RetryReturnResolutionRequestInput.js';

export type ReturnResolutionsRetryInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<RetryReturnResolutionRequestInput>; };
