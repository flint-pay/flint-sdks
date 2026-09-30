
import type { MerchantSubscriptionInvoiceInput } from './MerchantSubscriptionInvoiceInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type MerchantSubscriptionInvoiceListResponseInput = { "data": Array<MerchantSubscriptionInvoiceInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
