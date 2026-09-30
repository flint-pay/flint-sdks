
import type { ResponseMeta } from './ResponseMeta.js';
import type { SavePaymentMethodResult } from './SavePaymentMethodResult.js';

export type SavePaymentMethodResponse = { "data": SavePaymentMethodResult; "meta"?: ResponseMeta; "request_id"?: string; };
