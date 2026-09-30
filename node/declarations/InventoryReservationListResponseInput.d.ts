
import type { InventoryReservationInput } from './InventoryReservationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryReservationListResponseInput = { "data": Array<InventoryReservationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
