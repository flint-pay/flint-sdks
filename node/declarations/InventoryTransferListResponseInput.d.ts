
import type { InventoryTransferInput } from './InventoryTransferInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryTransferListResponseInput = { "data": Array<InventoryTransferInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
