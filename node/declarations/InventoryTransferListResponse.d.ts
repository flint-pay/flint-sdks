
import type { InventoryTransfer } from './InventoryTransfer.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryTransferListResponse = { "data": Array<InventoryTransfer>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
