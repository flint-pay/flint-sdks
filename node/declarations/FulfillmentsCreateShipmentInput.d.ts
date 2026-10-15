import type { InputValue } from '../runtime.js';
import type { CreateShipmentRequestInput } from './CreateShipmentRequestInput.js';

export type FulfillmentsCreateShipmentInput = { "fulfillment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<CreateShipmentRequestInput>; };
