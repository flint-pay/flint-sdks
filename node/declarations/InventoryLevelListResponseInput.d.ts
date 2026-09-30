
import type { InventoryLevelInput } from './InventoryLevelInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryLevelListResponseInput = { "data": Array<InventoryLevelInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
