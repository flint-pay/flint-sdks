
import type { PayoutEntry } from './PayoutEntry.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PayoutEntryListResponse = { "data": Array<PayoutEntry>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
