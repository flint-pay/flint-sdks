import type { InputValue } from '../runtime.js';
import type { UpdatePayoutDestinationRequestInput } from './UpdatePayoutDestinationRequestInput.js';

export type RefundsUpdateInput = { "refund_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "body": InputValue<UpdatePayoutDestinationRequestInput>; };
