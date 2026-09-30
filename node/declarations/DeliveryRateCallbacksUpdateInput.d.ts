import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryRateCallbackRequestInput } from './UpdateDeliveryRateCallbackRequestInput.js';

export type DeliveryRateCallbacksUpdateInput = { "delivery_rate_callback_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateDeliveryRateCallbackRequestInput>; };
