import type { InputValue } from '../runtime.js';
import type { UpdateMeRequestInput } from './UpdateMeRequestInput.js';

export type MeUpdateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateMeRequestInput>; };
