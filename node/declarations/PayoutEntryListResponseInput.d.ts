
import type { PayoutEntryInput } from './PayoutEntryInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PayoutEntryListResponseInput = { "data": Array<PayoutEntryInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
