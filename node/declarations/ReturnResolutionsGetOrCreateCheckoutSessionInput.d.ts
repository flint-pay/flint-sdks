import type { InputValue } from '../runtime.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './GetOrCreateReturnResolutionCheckoutSessionRequestInput.js';

export type ReturnResolutionsGetOrCreateCheckoutSessionInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body"?: InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>; };
