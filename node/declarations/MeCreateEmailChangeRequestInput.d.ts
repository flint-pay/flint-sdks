import type { InputValue } from '../runtime.js';
import type { CreateEmailChangeRequestInput } from './CreateEmailChangeRequestInput.js';

export type MeCreateEmailChangeRequestInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateEmailChangeRequestInput>; };
