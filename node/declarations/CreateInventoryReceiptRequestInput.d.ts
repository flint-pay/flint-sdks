
import type { InventoryReceiptLineRequestInput } from './InventoryReceiptLineRequestInput.js';
import type { InventorySourceSystemRequestInput } from './InventorySourceSystemRequestInput.js';

export type CreateInventoryReceiptRequestInput = { "external_actor_id"?: string; "lines": Array<InventoryReceiptLineRequestInput>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; };
