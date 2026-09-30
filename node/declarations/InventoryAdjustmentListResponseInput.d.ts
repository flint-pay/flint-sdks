
import type { InventoryAdjustmentInput } from './InventoryAdjustmentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryAdjustmentListResponseInput = { "data": Array<InventoryAdjustmentInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
