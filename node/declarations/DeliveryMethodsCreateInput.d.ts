import type { InputValue } from '../runtime.js';
import type { CreateDeliveryMethodRequestInput } from './CreateDeliveryMethodRequestInput.js';

export type DeliveryMethodsCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateDeliveryMethodRequestInput>; };
