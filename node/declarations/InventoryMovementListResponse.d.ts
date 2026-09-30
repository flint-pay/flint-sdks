
import type { InventoryMovement } from './InventoryMovement.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryMovementListResponse = { "data": Array<InventoryMovement>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
