
import type { InventoryCount } from './InventoryCount.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryCountListResponse = { "data": Array<InventoryCount>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
