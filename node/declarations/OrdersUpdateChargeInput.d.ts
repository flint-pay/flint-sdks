import type { InputValue } from '../runtime.js';
import type { UpdateOrderChargeRequestInput } from './UpdateOrderChargeRequestInput.js';

export type OrdersUpdateChargeInput = { "order_id": InputValue<string>; "order_charge_id": InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<UpdateOrderChargeRequestInput>; };
