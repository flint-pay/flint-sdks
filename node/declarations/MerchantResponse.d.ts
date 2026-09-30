
import type { Merchant } from './Merchant.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type MerchantResponse = { "data": Merchant; "meta"?: ResponseMeta; "request_id"?: string; };
