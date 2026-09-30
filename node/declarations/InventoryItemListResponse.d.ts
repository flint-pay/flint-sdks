
import type { InventoryItem } from './InventoryItem.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryItemListResponse = { "data": Array<InventoryItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
