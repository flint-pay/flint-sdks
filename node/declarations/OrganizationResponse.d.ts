
import type { Organization } from './Organization.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrganizationResponse = { "data": Organization; "meta"?: ResponseMeta; "request_id"?: string; };
