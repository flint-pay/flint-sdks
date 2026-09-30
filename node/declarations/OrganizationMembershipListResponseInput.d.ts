
import type { OrganizationMembershipInput } from './OrganizationMembershipInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrganizationMembershipListResponseInput = { "data": Array<OrganizationMembershipInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
