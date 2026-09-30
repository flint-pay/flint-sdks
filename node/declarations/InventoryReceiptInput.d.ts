
import type { InventoryReceiptLineInput } from './InventoryReceiptLineInput.js';

/** A completed stock receipt. It can record a direct inventory intake or the stock effect of a customer Return disposition. */ export type InventoryReceiptInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "external_actor_id"?: string; "idempotency_key": string; "inventory_receipt_id": string; "lines": Array<InventoryReceiptLineInput>; /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string | globalThis.Date; "return_disposition_id"?: string; "return_id"?: string; "source_system": (({ "external_source_id"?: string; "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other"; }) | (null)); };
