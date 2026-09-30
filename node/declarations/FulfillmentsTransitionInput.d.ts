import type { InputValue } from '../runtime.js';
import type { FulfillmentTransitionRequestInput } from './FulfillmentTransitionRequestInput.js';

export type FulfillmentsTransitionInput = { "fulfillment_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<FulfillmentTransitionRequestInput>; };
