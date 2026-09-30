import type { InputValue } from '../runtime.js';
import type { ReleaseInventoryReservationRequestInput } from './ReleaseInventoryReservationRequestInput.js';

export type InventoryReservationsReleaseInput = { "Idempotency-Key"?: InputValue<string>; "inventory_reservation_id": InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<ReleaseInventoryReservationRequestInput>; };
