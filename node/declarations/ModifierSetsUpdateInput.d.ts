import type { InputValue } from '../runtime.js';
import type { UpdateModifierSetRequestInput } from './UpdateModifierSetRequestInput.js';

export type ModifierSetsUpdateInput = { "modifier_set_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateModifierSetRequestInput>; };
