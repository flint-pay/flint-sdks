import type { InputValue } from '../runtime.js';
import type { UpdateDeliveryMethodRequestInput } from './UpdateDeliveryMethodRequestInput.js';

export type DeliveryMethodsUpdateInput = { "delivery_method_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateDeliveryMethodRequestInput>; };
