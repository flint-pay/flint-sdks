import type { InputValue } from '../runtime.js';
import type { UpdateSettingsRequestInput } from './UpdateSettingsRequestInput.js';

export type SettingsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateSettingsRequestInput>; };
