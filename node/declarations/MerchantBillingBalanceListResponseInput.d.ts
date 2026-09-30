
import type { MerchantBillingBalanceInput } from './MerchantBillingBalanceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type MerchantBillingBalanceListResponseInput = { "data": Array<MerchantBillingBalanceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
