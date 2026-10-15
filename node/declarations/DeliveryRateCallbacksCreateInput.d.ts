import type { InputValue } from '../runtime.js';
import type { CreateDeliveryRateCallbackRequestInput } from './CreateDeliveryRateCallbackRequestInput.js';

export type DeliveryRateCallbacksCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateDeliveryRateCallbackRequestInput>; };
