import type { InputValue } from '../runtime.js';
import type { UpdateDeviceRequestInput } from './UpdateDeviceRequestInput.js';

export type DevicesUpdateInput = { "device_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdateDeviceRequestInput>; };
