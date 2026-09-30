
import type { CustomerAddress } from './CustomerAddress.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerAddressResponse = { "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; };
