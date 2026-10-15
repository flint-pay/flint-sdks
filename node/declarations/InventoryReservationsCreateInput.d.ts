import type { InputValue } from '../runtime.js';
import type { CreateInventoryReservationRequestInput } from './CreateInventoryReservationRequestInput.js';

export type InventoryReservationsCreateInput = { "Idempotency-Key"?: InputValue<string>; "body": InputValue<CreateInventoryReservationRequestInput>; };
