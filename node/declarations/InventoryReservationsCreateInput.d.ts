import type { InputValue } from '../runtime.js';
import type { CreateInventoryReservationRequestInput } from './CreateInventoryReservationRequestInput.js';

export type InventoryReservationsCreateInput = { "Idempotency-Key"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateInventoryReservationRequestInput>; };
