
import type { InventoryItemInput } from './InventoryItemInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryItemListResponseInput = { "data": Array<InventoryItemInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
