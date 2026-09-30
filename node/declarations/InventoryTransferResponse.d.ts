
import type { InventoryTransfer } from './InventoryTransfer.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryTransferResponse = { "data": InventoryTransfer; "meta"?: ResponseMeta; "request_id"?: string; };
