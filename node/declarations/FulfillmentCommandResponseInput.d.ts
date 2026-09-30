
import type { FulfillmentCommandResultInput } from './FulfillmentCommandResultInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type FulfillmentCommandResponseInput = { "data": FulfillmentCommandResultInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
