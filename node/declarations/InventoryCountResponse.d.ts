
import type { InventoryCount } from './InventoryCount.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryCountResponse = { "data": InventoryCount; "meta"?: ResponseMeta; "request_id"?: string; };
