import type { InputValue } from '../runtime.js';
import type { AddOrderChargeRequestInput } from './AddOrderChargeRequestInput.js';

export type OrdersAddChargeInput = { "order_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<AddOrderChargeRequestInput>; };
