
import type { PartnerAppWithSecret } from './PartnerAppWithSecret.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreatePartnerAppResponse = { "data": PartnerAppWithSecret; "meta"?: ResponseMeta; "request_id"?: string; };
