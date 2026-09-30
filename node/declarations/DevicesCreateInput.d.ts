import type { InputValue } from '../runtime.js';
import type { CreateDeviceRequestInput } from './CreateDeviceRequestInput.js';

export type DevicesCreateInput = { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeviceRequestInput>; };
