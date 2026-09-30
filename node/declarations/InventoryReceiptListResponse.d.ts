
import type { InventoryReceipt } from './InventoryReceipt.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryReceiptListResponse = { "data": Array<InventoryReceipt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
