import type { InputValue } from '../runtime.js';
import type { CommitInventoryReservationRequestInput } from './CommitInventoryReservationRequestInput.js';

export type InventoryReservationsCommitInput = { "Idempotency-Key"?: InputValue<string>; "inventory_reservation_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CommitInventoryReservationRequestInput>; };
