
import type { CustomerAddress } from './CustomerAddress.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerAddressListResponse = { "data": Array<CustomerAddress>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
