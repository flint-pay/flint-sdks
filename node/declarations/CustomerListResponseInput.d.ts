
import type { CustomerInput } from './CustomerInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CustomerListResponseInput = { "data": Array<CustomerInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
