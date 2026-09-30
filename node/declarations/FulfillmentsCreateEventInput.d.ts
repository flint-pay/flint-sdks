import type { InputValue } from '../runtime.js';
import type { CreateFulfillmentEventRequestInput } from './CreateFulfillmentEventRequestInput.js';

export type FulfillmentsCreateEventInput = { "fulfillment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateFulfillmentEventRequestInput>; };
