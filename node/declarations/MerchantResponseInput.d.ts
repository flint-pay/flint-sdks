
import type { MerchantInput } from './MerchantInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type MerchantResponseInput = { "data": MerchantInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
