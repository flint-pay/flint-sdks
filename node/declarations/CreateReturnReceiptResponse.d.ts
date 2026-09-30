
import type { ResponseMeta } from './ResponseMeta.js';
import type { ReturnReceipt } from './ReturnReceipt.js';

export type CreateReturnReceiptResponse = { "data": ReturnReceipt; "meta"?: ResponseMeta; "request_id"?: string; };
