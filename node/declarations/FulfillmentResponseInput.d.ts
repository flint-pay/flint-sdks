
import type { FulfillmentInput } from './FulfillmentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FulfillmentResponseInput = { "data": FulfillmentInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
