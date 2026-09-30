
import type { InventoryAllocationPolicy } from './InventoryAllocationPolicy.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type InventoryAllocationPolicyListResponse = { "data": Array<InventoryAllocationPolicy>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
