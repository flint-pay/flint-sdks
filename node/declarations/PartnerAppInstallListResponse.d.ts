
import type { PartnerAppInstall } from './PartnerAppInstall.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PartnerAppInstallListResponse = { "data": Array<PartnerAppInstall>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
