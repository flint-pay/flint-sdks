import type { InputValue } from '../runtime.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './GetOrCreateReturnResolutionCheckoutSessionRequestInput.js';

export type MeCreateReturnResolutionCheckoutSessionInput = { "return_resolution_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "body"?: InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>; };
