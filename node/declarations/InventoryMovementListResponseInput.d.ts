
import type { InventoryMovementInput } from './InventoryMovementInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InventoryMovementListResponseInput = { "data": Array<InventoryMovementInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
