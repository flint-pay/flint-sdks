import type { InputValue } from '../runtime.js';
import type { CreateDeliveryRateCallbackRequestInput } from './CreateDeliveryRateCallbackRequestInput.js';

export type DeliveryRateCallbacksCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateDeliveryRateCallbackRequestInput>; };
