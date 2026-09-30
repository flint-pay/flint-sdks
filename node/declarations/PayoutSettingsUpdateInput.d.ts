import type { InputValue } from '../runtime.js';
import type { UpdatePayoutSettingsRequestInput } from './UpdatePayoutSettingsRequestInput.js';

export type PayoutSettingsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdatePayoutSettingsRequestInput>; };
