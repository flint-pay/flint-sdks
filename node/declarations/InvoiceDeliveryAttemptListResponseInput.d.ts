
import type { InvoiceDeliveryAttemptInput } from './InvoiceDeliveryAttemptInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type InvoiceDeliveryAttemptListResponseInput = { "data": Array<InvoiceDeliveryAttemptInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
