
import type { InventoryCountInput } from './InventoryCountInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryCountListResponseInput = { "data": Array<InventoryCountInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
