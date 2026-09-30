
import type { InventorySourceSystemRequest } from './InventorySourceSystemRequest.js';

export type InventoryReservationProvenance = { "external_actor_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "source_system"?: InventorySourceSystemRequest; };
