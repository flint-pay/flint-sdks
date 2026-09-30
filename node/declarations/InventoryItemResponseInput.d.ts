
import type { InventoryItemInput } from './InventoryItemInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryItemResponseInput = { "data": InventoryItemInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
