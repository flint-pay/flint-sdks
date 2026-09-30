
import type { CustomerAddressInput } from './CustomerAddressInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CustomerAddressListResponseInput = { "data": Array<CustomerAddressInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
