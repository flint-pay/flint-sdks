import type { InputValue } from '../runtime.js';
import type { UpdatePayoutSettingsRequestInput } from './UpdatePayoutSettingsRequestInput.js';

export type PayoutSettingsUpdateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdatePayoutSettingsRequestInput>; };
