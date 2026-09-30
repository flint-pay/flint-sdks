
import type { PartnerApp } from './PartnerApp.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PartnerAppListResponse = { "data": Array<PartnerApp>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
