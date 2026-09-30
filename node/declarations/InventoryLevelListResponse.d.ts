
import type { InventoryLevel } from './InventoryLevel.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryLevelListResponse = { "data": Array<InventoryLevel>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
