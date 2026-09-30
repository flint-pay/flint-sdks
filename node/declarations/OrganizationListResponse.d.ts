
import type { Organization } from './Organization.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrganizationListResponse = { "data": Array<Organization>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
