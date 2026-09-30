import type { InputValue } from '../runtime.js';
import type { ReleaseReturnResolutionRequestInput } from './ReleaseReturnResolutionRequestInput.js';

export type ReturnResolutionsReleaseInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ReleaseReturnResolutionRequestInput>; };
