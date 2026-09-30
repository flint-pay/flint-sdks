
import type { PartnerApp } from './PartnerApp.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PartnerAppResponse = { "data": PartnerApp; "meta"?: ResponseMeta; "request_id"?: string; };
