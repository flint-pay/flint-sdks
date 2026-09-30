
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FulfillmentEventListResponseInput = { "data": Array<FulfillmentEventInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
