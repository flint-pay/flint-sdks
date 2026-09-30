import type { InputValue } from '../runtime.js';
import type { CreateModifierGroupRequestInput } from './CreateModifierGroupRequestInput.js';

export type ModifierGroupsCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateModifierGroupRequestInput>; };
