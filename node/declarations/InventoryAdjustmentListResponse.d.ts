
import type { InventoryAdjustment } from './InventoryAdjustment.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryAdjustmentListResponse = { "data": Array<InventoryAdjustment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
