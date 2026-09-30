
import type { InventoryReceiptLineRequest } from './InventoryReceiptLineRequest.js';
import type { InventorySourceSystemRequest } from './InventorySourceSystemRequest.js';

export type CreateInventoryReceiptRequest = { "external_actor_id"?: string; "lines": Array<InventoryReceiptLineRequest>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "source_system"?: InventorySourceSystemRequest; };
