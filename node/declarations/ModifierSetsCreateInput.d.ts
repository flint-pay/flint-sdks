import type { InputValue } from '../runtime.js';
import type { CreateModifierSetRequestInput } from './CreateModifierSetRequestInput.js';

export type ModifierSetsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateModifierSetRequestInput>; };
