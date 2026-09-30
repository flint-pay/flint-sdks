
import type { MerchantSubscriptionInvoice } from './MerchantSubscriptionInvoice.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type MerchantSubscriptionInvoiceListResponse = { "data": Array<MerchantSubscriptionInvoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
