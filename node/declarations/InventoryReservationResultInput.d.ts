
import type { InventoryLevelInput } from './InventoryLevelInput.js';
import type { InventoryReservationInput } from './InventoryReservationInput.js';

export type InventoryReservationResultInput = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_reservation": InventoryReservationInput; /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. */ "resulting_inventory_levels": Array<InventoryLevelInput>; };
