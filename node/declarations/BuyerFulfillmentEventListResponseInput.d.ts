
import type { BuyerFulfillmentEventInput } from './BuyerFulfillmentEventInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BuyerFulfillmentEventListResponseInput = { "data": Array<BuyerFulfillmentEventInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
