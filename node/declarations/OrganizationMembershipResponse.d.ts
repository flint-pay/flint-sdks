
import type { OrganizationMembership } from './OrganizationMembership.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrganizationMembershipResponse = { "data": OrganizationMembership; "meta"?: ResponseMeta; "request_id"?: string; };
