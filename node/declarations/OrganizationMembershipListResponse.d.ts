
import type { OrganizationMembership } from './OrganizationMembership.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrganizationMembershipListResponse = { "data": Array<OrganizationMembership>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
