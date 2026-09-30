
import type { ResponseMetaInput } from './ResponseMetaInput.js';
import type { ShipmentInput } from './ShipmentInput.js';

export type ShipmentListResponseInput = { "data": Array<ShipmentInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
