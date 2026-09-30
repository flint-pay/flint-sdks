
import type { InventoryReceiptInput } from './InventoryReceiptInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryReceiptListResponseInput = { "data": Array<InventoryReceiptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
