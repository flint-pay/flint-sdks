
import type { PartnerAppInstallInput } from './PartnerAppInstallInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PartnerAppInstallListResponseInput = { "data": Array<PartnerAppInstallInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
