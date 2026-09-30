
import type { DeliveryQuoteInput } from './DeliveryQuoteInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type DeliveryQuoteListResponseInput = { "data": Array<DeliveryQuoteInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
