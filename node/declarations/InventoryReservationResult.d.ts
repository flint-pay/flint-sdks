
import type { InventoryLevel } from './InventoryLevel.js';
import type { InventoryReservation } from './InventoryReservation.js';

export type InventoryReservationResult = { "idempotency_key": string; "inventory_movement_ids": Array<string>; "inventory_reservation": InventoryReservation; /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. */ "resulting_inventory_levels": Array<InventoryLevel>; };
