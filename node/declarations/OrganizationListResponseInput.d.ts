
import type { OrganizationInput } from './OrganizationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type OrganizationListResponseInput = { "data": Array<OrganizationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
