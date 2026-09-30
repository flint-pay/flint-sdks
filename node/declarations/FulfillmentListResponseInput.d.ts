
import type { FulfillmentInput } from './FulfillmentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FulfillmentListResponseInput = { "data": Array<FulfillmentInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
