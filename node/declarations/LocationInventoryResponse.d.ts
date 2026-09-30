
import type { LocationInventory } from './LocationInventory.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type LocationInventoryResponse = { "data": LocationInventory; "meta"?: ResponseMeta; "request_id"?: string; };
