
import type { InventoryReservation } from './InventoryReservation.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryReservationListResponse = { "data": Array<InventoryReservation>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
