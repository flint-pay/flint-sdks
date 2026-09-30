
import type { MerchantBillingBalance } from './MerchantBillingBalance.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type MerchantBillingBalanceListResponse = { "data": Array<MerchantBillingBalance>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
