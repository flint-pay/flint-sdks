
import type { InventoryItem } from './InventoryItem.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryItemResponse = { "data": InventoryItem; "meta"?: ResponseMeta; "request_id"?: string; };
