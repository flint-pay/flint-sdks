
import type { InventorySourceSystemRequestInput } from './InventorySourceSystemRequestInput.js';

export type InventoryReservationProvenanceInput = { "external_actor_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; };
