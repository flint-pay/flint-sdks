import type { InputValue } from '../runtime.js';
import type { ConsumeInventoryReservationRequestInput } from './ConsumeInventoryReservationRequestInput.js';

export type InventoryReservationsConsumeInput = { "Idempotency-Key"?: InputValue<string>; "inventory_reservation_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ConsumeInventoryReservationRequestInput>; };
